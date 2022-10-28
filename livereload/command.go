package main

import (
	"fmt"
	"os/exec"
	"os"
	"net"
	"time"
	"syscall"

	log "github.com/sirupsen/logrus"
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

	doneErr *error
}

func NewCommand(port uint32, command string) *Command {
	return &Command{cmd: nil, command: command, port: port, doneErr: nil}
}

func (this *Command) Start(timeout time.Duration) error {
	log.Debugf("Starting command: %s on port: %d", this.command, this.port)
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

	go func() {
		err := this.cmd.Wait()
		this.doneErr = &err
	}()

	// Wait for the process to begin listening on the port
	if err := this.waitUntilListening(timeout); err != nil {
		return err
	}

	return nil
}

func (this *Command) Kill() error {
	if this.cmd == nil {
		return fmt.Errorf("This command was never started.")
	}

	if (this.doneErr != nil) {
		log.Debugf("Command already finished: %v", *this.doneErr)
		// No need to kill the process, it's already done.
		return nil
	}

	// Kill the process group, which will kill all of the children as well.
	return syscall.Kill(-this.cmd.Process.Pid, syscall.SIGKILL)
}

func (this *Command) waitUntilListening(timeout time.Duration) error {
	port := this.port
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

			// Check if the process is done.
			if (this.doneErr != nil) {
				return fmt.Errorf("Process exited before listening on port %d (%v)", port, *this.doneErr)
			}

			// Sleep a bit.
			time.Sleep(300 * time.Millisecond)
		}
	}
}

