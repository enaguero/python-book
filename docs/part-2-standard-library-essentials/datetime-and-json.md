# datetime and JSON

## What you'll learn

- Working with date/time objects
- Parsing and formatting date strings
- JSON serialization and deserialization

## Explanation

`datetime` handles date and time data reliably, while `json` supports structured
exchange with APIs and config files.

## Example

```python
from datetime import datetime
import json

now = datetime.now().isoformat()
payload = {"generated_at": now, "ok": True}
print(json.dumps(payload, indent=2))
```

## Common mistakes

- Mixing naive and timezone-aware datetimes
- Assuming JSON supports Python-specific objects directly

## Exercises

See [Part 2 Exercises](../exercises/part-2/index.md).

## Further reading

- <https://docs.python.org/3/library/datetime.html>
- <https://docs.python.org/3/library/json.html>
