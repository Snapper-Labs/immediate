# Local development

First, create a virtualenv and activate it:

```
python3 -m virtualenv .venv && .venv/bin/activate
```

Then, install the requirements:

```
pip install -r requirements.txt
```

Finally, serve mkdocs:

```
mkdocs serve
```

Changes to documentation will automatically be reflected.


# Deploying

First, set up your firebase CLI.

Then, build the docs (in the virtualenv):

```
mkdocs build -d build # Output to build directory
```

Then, deploy:

```
firebase deploy --only hosting
```
