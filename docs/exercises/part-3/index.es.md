# Ejercicios Parte 3

## Ejercicio 1: Test simple con pytest

Escribe una funcion `is_even(n)` y pruebala con pytest.

??? tip "Pista"
    Crea dos asserts: un caso verdadero y un caso falso.

??? success "Una posible solucion"
    ```python
    def is_even(n: int) -> bool:
        return n % 2 == 0


    def test_is_even():
        assert is_even(4)
        assert not is_even(5)
    ```

## Ejercicio 2: Async await

Crea una funcion async que espere medio segundo y devuelva `"ok"`.

??? tip "Pista"
    Usa `asyncio.sleep(0.5)`.

??? success "Una posible solucion"
    ```python
    import asyncio


    async def ping() -> str:
        await asyncio.sleep(0.5)
        return "ok"


    print(asyncio.run(ping()))
    ```
