# pathlib and Files

## What you'll learn

- Path operations with `pathlib`
- Safe file reading/writing
- Text encoding fundamentals

## Explanation

`pathlib` offers an object model for paths that is clearer than manual string
concatenation. Use context managers to ensure files close correctly.

## Example

```python
from pathlib import Path

notes = Path("notes.txt")
notes.write_text("hello\n", encoding="utf-8")
print(notes.read_text(encoding="utf-8"))
```

## Common mistakes

- Assuming default encoding is always UTF-8
- Forgetting to close files without `with open(...)`

## Exercises

See [Part 2 Exercises](../exercises/part-2/index.md).

## Further reading

- <https://docs.python.org/3/library/pathlib.html>
