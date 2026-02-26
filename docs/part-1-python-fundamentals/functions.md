# Functions

## What you'll learn

- Function definition and return values
- Positional and keyword arguments
- Scope basics

## Explanation

Functions group behavior into reusable units. Prefer small, explicit functions with
clear names and predictable return values.

## Example

Run it in the browser:

<div class="py-run" markdown="1">

```python
def area(width: float, height: float) -> float:
    return width * height

print(area(3.0, 4.0))
```

</div>

## Common mistakes

- Mutating arguments unexpectedly
- Using mutable default values

## Exercises

See [Part 1 Exercises](../exercises/part-1/index.md).

## Further reading

- <https://docs.python.org/3/tutorial/controlflow.html#defining-functions>
