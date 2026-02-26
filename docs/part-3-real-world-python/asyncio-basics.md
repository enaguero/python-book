# asyncio Basics

## What you'll learn

- Event loop mental model
- `async` and `await`
- Concurrent I/O patterns

## Explanation

`asyncio` is best for I/O-bound concurrency. Use it when you need many waits
(network, disk, APIs) without blocking the whole process.

## Example

```python
import asyncio


async def main():
    await asyncio.sleep(1)
    print("done")


asyncio.run(main())
```

## Common mistakes

- Using asyncio for CPU-bound work
- Forgetting to `await` a coroutine

## Exercises

See [Part 3 Exercises](../exercises/part-3/index.md).

## Further reading

- <https://docs.python.org/3/library/asyncio.html>
