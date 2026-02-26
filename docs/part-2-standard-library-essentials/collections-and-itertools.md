# collections and itertools

## What you'll learn

- When to use `Counter`, `defaultdict`, and `deque`
- Iterator composition with `itertools`
- Memory-friendly processing patterns

## Explanation

The standard library provides optimized building blocks for counting, grouping,
queuing, and streaming computations without loading everything into memory.

## Example

```python
from collections import Counter

words = ["py", "py", "book", "docs"]
print(Counter(words).most_common(1))
```

## Common mistakes

- Rebuilding utilities that already exist in `collections`
- Converting iterators to lists too early

## Exercises

See [Part 2 Exercises](../exercises/part-2/index.md).

## Further reading

- <https://docs.python.org/3/library/collections.html>
- <https://docs.python.org/3/library/itertools.html>
