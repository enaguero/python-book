# Tipado y Calidad de Codigo

## Que aprenderas

- Agregar type hints para mejorar claridad
- Bases de revision estatica
- Flujo de formateo y linting

## Explicacion

Los type hints mejoran herramientas y reducen ambiguedad.
No son validacion en tiempo de ejecucion por defecto, pero mejoran mucho el mantenimiento.

## Ejemplo

```python
def full_name(first: str, last: str) -> str:
    return f"{first} {last}"
```

## Errores comunes

- Tratar type hints como ruido opcional en bases de codigo compartidas
- Ignorar fallos de lint/type checks en CI

## Ejercicios

Ver [Ejercicios Parte 3](../exercises/part-3/index.md).

## Lectura adicional

- <https://docs.python.org/3/library/typing.html>
