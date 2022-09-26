package main

import (
	"log"
	"os"
	"os/signal"
	"syscall"
	"time"
	"fmt"
	"net/http"
	"net/http/httputil"
	"net/url"

	"github.com/radovskyb/watcher"
)

func check(err error) {
	if err != nil {
		panic(err)
	}
}

func mustParseUrl(s string) *url.URL {
	u, err := url.Parse(s)
	check(err)
	return u
}

func main() {
	// Maintain two reverse proxies, one for the current command, and one for
	// the next.
	ports := []uint32{7777, 7778}
	currIndex := 0
	command := "go run ."

	var cmd *Command
	var proxy *httputil.ReverseProxy

	restartProxy := func() {
		proxy = httputil.NewSingleHostReverseProxy(mustParseUrl(fmt.Sprintf("http://localhost:%d", ports[currIndex])))
	}

	restartCommand := func() error {
		lastCmd := cmd

		// Spawn the command at the next index
		nextIndex := (currIndex + 1) % len(ports)
		cmd = NewCommand(ports[nextIndex], command)

		if err := cmd.Start(5 * time.Second); err != nil {
			return err
		}

		// Switch the index to the new command.
		currIndex = nextIndex
		restartProxy()

		// Kill the old command.
		if lastCmd != nil {
			if err := lastCmd.Kill(); err != nil {
				return err
			}
		}
		return nil
	}

	restartCommand()

	// Set up the http handler.
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if proxy != nil {
			proxy.ServeHTTP(w, r)
		} else {
			// Error out the request.
			w.WriteHeader(http.StatusInternalServerError)
		}
	})

	// Set up the file watcher. Note that this uses polling, so it's not quite
	// as performant, but it's simpler to use.
	w := watcher.New()

	// SetMaxEvents is something like a debounce.
	w.SetMaxEvents(1)

	err := w.AddRecursive(".")
	check(err)

	reloadChan := make(chan struct{})

	go func() {
		for range w.Event {
			// Got an update; re-run the command, switch the proxy, and send a
			// reload event to the browser.
			if err := restartCommand(); err != nil {
				fmt.Printf("Error restarting command: %v\n", err)
				continue
			}

			reloadChan <- struct{}{}
		}
	}()

	go w.Start(time.Millisecond * 100)


	http.HandleFunc("/events", func(w http.ResponseWriter, r *http.Request) {
		// Add headers needed for server-sent events (SSE):
		w.Header().Set("Content-Type", "text/event-stream")
		w.Header().Set("Cache-Control", "no-cache")
		w.Header().Set("Connection", "keep-alive")
		flusher, ok := w.(http.Flusher)
		if !ok {
			log.Fatalln("Your browser does not support server-sent events (SSE).")
			return
		}
		for {
			select {
			case <-reloadChan:
				fmt.Fprintf(w, "event: reload\ndata\n\n")
				flusher.Flush()
			case <-r.Context().Done():
				// No-op
				return
			}
		}
	})

	// Watch for when we are killed, and kill the current command if it's
	// running.
	c := make(chan os.Signal)
    signal.Notify(c, os.Interrupt, syscall.SIGTERM)
    go func() {
        <-c
		if cmd != nil {
			cmd.Kill()
		}
        os.Exit(1)
    }()


	log.Println("Listening on :8080...")
	http.ListenAndServe(":8080", nil)
}
