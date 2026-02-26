# Packaging and Virtual Environments

## What you'll learn

- Why isolated environments matter
- Basic packaging metadata
- Repeatable dependency management

## Explanation

Virtual environments prevent dependency conflicts across projects. Packaging tools
make code installable and easier to share.

## Example

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

## Common mistakes

- Installing dependencies globally
- Committing local virtual environment folders

## Exercises

See [Part 3 Exercises](../exercises/part-3/index.md).

## Further reading

- <https://packaging.python.org/en/latest/tutorials/installing-packages/>
