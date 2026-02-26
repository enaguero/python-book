# collections e itertools

## Que aprenderas

- Cuando usar `Counter`, `defaultdict` y `deque`
- Composicion de iteradores con `itertools`
- Patrones de procesamiento eficientes en memoria

## Explicacion

La libreria estandar ofrece bloques optimizados para contar, agrupar,
encolar y procesar flujos sin cargar todo en memoria.

## Ejemplo

```python
from collections import Counter

words = ["py", "py", "book", "docs"]
print(Counter(words).most_common(1))
```

## Errores comunes

- Reconstruir utilidades que ya existen en `collections`
- Convertir iteradores a listas demasiado pronto

## Ejercicios

Ver [Ejercicios Parte 2](../exercises/part-2/index.md).

## Lectura adicional

- <https://docs.python.org/3/library/collections.html>
- <https://docs.python.org/3/library/itertools.html>
