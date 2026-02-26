# Control Flow

## What you'll learn

- Branching with `if`/`elif`/`else`
- Iteration with `for` and `while`
- Loop control keywords

## Explanation

Control flow decides which code runs and how often. Python emphasizes readability
with explicit blocks and consistent indentation.

## Example

```python
for n in range(1, 6):
    if n % 2 == 0:
        print(n, "even")
    else:
        print(n, "odd")
```

## Common mistakes

- Infinite `while` loops due to missing state updates
- Off-by-one errors with `range`

## Exercises

See [Part 1 Exercises](../exercises/part-1/index.md).

## Further reading

- <https://docs.python.org/3/tutorial/controlflow.html>
