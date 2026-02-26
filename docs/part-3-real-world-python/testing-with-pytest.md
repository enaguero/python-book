# Testing with pytest

## What you'll learn

- Test structure and naming
- Assertions and fixtures
- Fast feedback loops

## Explanation

`pytest` keeps tests readable and discoverable. Start by testing pure functions,
then move toward integration tests around boundaries (files, DB, network).

## Example

Run it in the browser:

<div class="py-run" markdown="1">

```python
def add(a, b):
    return a + b


def test_add():
    assert add(2, 3) == 5


test_add()
print("test passed")
```

</div>

## Common mistakes

- Tests that depend on external services without isolation
- Overusing mocks for simple deterministic code

## Exercises

See [Part 3 Exercises](../exercises/part-3/index.md).

## Further reading

- <https://docs.pytest.org/>
