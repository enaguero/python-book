# Flujo de Control

## Que aprenderas

- Ramificacion con `if`/`elif`/`else`
- Iteracion con `for` y `while`
- Palabras clave de control de bucles

## Explicacion

El flujo de control decide que codigo se ejecuta y cuantas veces.
Python enfatiza la legibilidad con bloques explicitos e indentacion consistente.

## Ejemplo

```python
for n in range(1, 6):
    if n % 2 == 0:
        print(n, "even")
    else:
        print(n, "odd")
```

## Errores comunes

- Bucles `while` infinitos por no actualizar estado
- Errores off-by-one con `range`

## Ejercicios

Ver [Ejercicios Parte 1](../exercises/part-1/index.md).

## Lectura adicional

- <https://docs.python.org/3/tutorial/controlflow.html>
