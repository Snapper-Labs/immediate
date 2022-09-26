livereload
-----------

Simple tool that adds live reloading to any user-provided command that runs a
webserver that listens on the environment variable PORT.

# Usage

First, make sure that your webserver listens on localhost:PORT, where PORT is
the environment variable named PORT.

Then, run:

```
livereload -c <command>
```

By default, `livereload` will watch for changes recursively in the working
directory ('.'). To customize, you can use the -w flag; for example, the
following command will watch for changes recursively in the `src/` directory.

```
livereload -c <command> -w src/
```
