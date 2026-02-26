# Funciones

## Que aprenderas

- Definicion de funciones y valores de retorno
- Argumentos posicionales y por nombre
- Bases de alcance (scope)

## Explicacion

Las funciones agrupan comportamiento en unidades reutilizables.
Prefiere funciones pequenas y explicitas, con nombres claros y retornos predecibles.

## Ejemplo

Ejecucionalo en el navegador:

<div class="py-run" markdown="1">

```python
def area(width: float, height: float) -> float:
    return width * height

print(area(3.0, 4.0))
```

</div>

## Errores comunes

- Mutar argumentos de forma inesperada
- Usar valores por defecto mutables

## Ejercicios

Ver [Ejercicios Parte 1](../exercises/part-1/index.md).

## Lectura adicional

- <https://docs.python.org/3/tutorial/controlflow.html#defining-functions>
