# Typing and Code Quality

## What you'll learn

- Adding type hints to improve clarity
- Static checking basics
- Formatting and linting workflow

## Explanation

Type hints support better tooling and reduce ambiguity. They are not runtime
enforcement by default, but they improve maintainability significantly.

## Example

```python
def full_name(first: str, last: str) -> str:
    return f"{first} {last}"
```

## Common mistakes

- Treating type hints as optional noise in shared codebases
- Ignoring failing lint/type checks in CI

## Exercises

See [Part 3 Exercises](../exercises/part-3/index.md).

## Further reading

- <https://docs.python.org/3/library/typing.html>
