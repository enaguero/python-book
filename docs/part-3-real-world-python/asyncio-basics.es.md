# Fundamentos de asyncio

## Que aprenderas

- Modelo mental del event loop
- `async` y `await`
- Patrones de I/O concurrente

## Explicacion

`asyncio` es ideal para concurrencia orientada a I/O.
Usalo cuando necesitas muchas esperas (red, disco, APIs) sin bloquear todo el proceso.

## Ejemplo

```python
import asyncio


async def main():
    await asyncio.sleep(1)
    print("done")


asyncio.run(main())
```

## Errores comunes

- Usar asyncio para trabajo CPU-bound
- Olvidar hacer `await` a una corrutina

## Ejercicios

Ver [Ejercicios Parte 3](../exercises/part-3/index.md).

## Lectura adicional

- <https://docs.python.org/3/library/asyncio.html>
