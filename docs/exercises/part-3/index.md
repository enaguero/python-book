# Part 3 Exercises

## Exercise 1: Simple pytest test

Write a function `is_even(n)` and test it with pytest.

??? tip "Hint"
    Create two assertions: one true case and one false case.

??? success "One possible solution"
    ```python
    def is_even(n: int) -> bool:
        return n % 2 == 0


    def test_is_even():
        assert is_even(4)
        assert not is_even(5)
    ```

## Exercise 2: Async await

Create an async function that sleeps for half a second and returns `"ok"`.

??? tip "Hint"
    Use `asyncio.sleep(0.5)`.

??? success "One possible solution"
    ```python
    import asyncio


    async def ping() -> str:
        await asyncio.sleep(0.5)
        return "ok"


    print(asyncio.run(ping()))
    ```
