package main

import (
	"log"
	"fmt"
	"os/exec"
	"os"
	"net"
	"time"
	"syscall"

	"github.com/google/shlex"
)

// Command wraps `os/exec` and represents an instance of the underlying command
// `livereload` is managing.
//
// The basic idea is that we execute the command with the desired PORT
// environment variable, and wait for the process to begin listening on that
// port. Once it does, `livereload` can safely switch it's reverse proxy to this
// instance's port.
type Command struct {
	cmd *exec.Cmd
	command string
	port uint32
}

func NewCommand(port uint32, command string) *Command {
	return &Command{cmd: nil, command: command, port: port}
}

func (this *Command) Start(timeout time.Duration) error {
	log.Printf("Starting command: %s on port: %d", this.command, this.port)
	splits, err := shlex.Split(this.command)
	if err != nil {
		return err
	}

	cmd := exec.Command(splits[0], splits[1:]...)
	cmd.Env = append(os.Environ(), fmt.Sprintf("PORT=%d", this.port))
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr

	// It's important to put the command in a new process group, so that we can
	// kill it and all of its children.
	cmd.SysProcAttr = &syscall.SysProcAttr{Setpgid: true}

	if err := cmd.Start(); err != nil {
		return err
	}

	this.cmd = cmd

	// Wait for the process to begin listening on the port
	if err := waitUntilListening(this.port, timeout); err != nil {
		return err
	}

	return nil
}

func (this *Command) Kill() error {
	if this.cmd == nil {
		return fmt.Errorf("This command was never started.")
	}

	// Kill the process group, which will kill all of the children as well.
	return syscall.Kill(-this.cmd.Process.Pid, syscall.SIGKILL)
}

func waitUntilListening(port uint32, timeout time.Duration) error {
	start := time.Now()
	for {
		// Check if the port is listening
		c, err := net.Dial("tcp", fmt.Sprintf("localhost:%d", port))

		if err == nil {
			// Got a connection; close it and return.
			c.Close()
			return nil
		} else {
			// Check if we've timed out
			if time.Now().Sub(start) > timeout {
				return fmt.Errorf("Timed out waiting for port %d to listen", port)
			}
		}
	}
}

