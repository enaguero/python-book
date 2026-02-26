# pathlib y Archivos

## Que aprenderas

- Operaciones de rutas con `pathlib`
- Lectura y escritura de archivos de forma segura
- Fundamentos de codificacion de texto

## Explicacion

`pathlib` ofrece un modelo de objetos para rutas que es mas claro que la
concatenacion manual de strings. Usa context managers para cerrar archivos bien.

## Ejemplo

```python
from pathlib import Path

notes = Path("notes.txt")
notes.write_text("hello\n", encoding="utf-8")
print(notes.read_text(encoding="utf-8"))
```

## Errores comunes

- Asumir que la codificacion por defecto siempre es UTF-8
- Olvidar cerrar archivos cuando no se usa `with open(...)`

## Ejercicios

Ver [Ejercicios Parte 2](../exercises/part-2/index.md).

## Lectura adicional

- <https://docs.python.org/3/library/pathlib.html>
