# Pruebas con pytest

## Que aprenderas

- Estructura y nombres de tests
- Asserts y fixtures
- Ciclos de feedback rapido

## Explicacion

`pytest` mantiene los tests legibles y faciles de descubrir.
Empieza probando funciones puras y luego avanza a pruebas de integracion en limites (archivos, DB, red).

## Ejemplo

Ejecucionalo en el navegador:

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

## Errores comunes

- Tests que dependen de servicios externos sin aislamiento
- Abusar de mocks para codigo simple y determinista

## Ejercicios

Ver [Ejercicios Parte 3](../exercises/part-3/index.md).

## Lectura adicional

- <https://docs.pytest.org/>
