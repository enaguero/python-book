# Empaquetado y Entornos Virtuales

## Que aprenderas

- Por que importan los entornos aislados
- Metadatos basicos de empaquetado
- Gestion repetible de dependencias

## Explicacion

Los entornos virtuales evitan conflictos de dependencias entre proyectos.
Las herramientas de empaquetado hacen el codigo instalable y mas facil de compartir.

## Ejemplo

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

## Errores comunes

- Instalar dependencias de forma global
- Hacer commit de carpetas locales de entorno virtual

## Ejercicios

Ver [Ejercicios Parte 3](../exercises/part-3/index.md).

## Lectura adicional

- <https://packaging.python.org/en/latest/tutorials/installing-packages/>
