# Python Book

Un manual practico de Python basado en capitulos, enfocado en ayudar a principiantes a construir bases solidas.

Read this in English: [README.md](README.md)

## Proposito del proyecto

Este proyecto fue creado para hacer la educacion en programacion mas accesible para mas personas.
El contenido esta estructurado para avanzar desde cero hasta fundamentos solidos de Python.

## Para quien es

- Principiantes absolutos sin experiencia previa en programacion
- Estudiantes a ritmo propio en modalidad de medio tiempo
- Instructores y mentores que necesitan un curriculo claro de fundamentos de Python

## Creacion asistida por IA

Este proyecto fue creado con asistencia de IA para acelerar el borrador de contenidos, la iteracion y las mejoras de calidad.
La direccion final, el alcance y las decisiones de calidad siguen siendo revisadas por personas.

## Colaboracion abierta

El codigo fuente es publico y abierto para aprendizaje, revision y colaboraciones de la comunidad.
Si quieres contribuir, revisa [CONTRIBUTING.md](CONTRIBUTING.md).
Las contribuciones requieren autorizacion explicita del maintainer y deben enviarse mediante Pull Request.

## Licencia (restringida)

Este es un proyecto educativo publico con un modelo de licencia limitado y restringido.

- Permitido: aprendizaje, estudio personal y colaboracion educativa
- Restringido: reventa comercial, redistribucion pagada y relicenciamiento sin permiso explicito del owner del proyecto

Si necesitas derechos comerciales o permisos especiales de uso, contacta primero al maintainer.

## Inicio rapido

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
mkdocs serve
```

Luego abre: <http://127.0.0.1:8000>

## Soporte de idioma

- English: <http://127.0.0.1:8000/>
- Espanol: <http://127.0.0.1:8000/es/>

El proyecto usa `mkdocs-static-i18n` con archivos de contenido traducidos (`*.es.md`).

## Estructura del proyecto

- `docs/part-1-python-fundamentals/`
- `docs/part-2-standard-library-essentials/`
- `docs/part-3-real-world-python/`
- `docs/exercises/` (banco de ejercicios separado)
- `docs/curriculum.md` (tracker principal del curriculo)
- `docs/authoring/chapter-template.md`

## Capitulos interactivos

Algunos capitulos usan Pyodide para ejecutar Python directamente en la pagina.
Para hacer un capitulo interactivo, envuelve un bloque Python con:

````html
<div class="py-run" markdown="1">
```python
print("hello")
```
</div>
````

## Despliegue

El workflow de GitHub Actions esta incluido en `.github/workflows/deploy.yml`.

## Desplegar en GitHub Pages

1. Sube este proyecto a un repositorio de GitHub.
2. En GitHub, ve a `Settings -> Pages`.
3. En "Build and deployment", configura:
   - Source: `Deploy from a branch`
   - Branch: `gh-pages`
   - Folder: `/(root)`
4. Haz push a `main` para disparar el workflow.
5. Espera a que termine "Deploy Docs" y luego abre:
   - `https://<tu-usuario>.github.io/<tu-repo>/`

Notas:

- El workflow publica automaticamente con `mkdocs gh-deploy --force`.
- Las URLs del sitio y repo se autocompletan en CI desde los metadatos del repositorio.
