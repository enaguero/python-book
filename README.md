# Python Book

A practical, chapter-based Python handbook focused on helping beginners build solid foundations.

## Project purpose

This project was created to make programming education more accessible for more people.
The content is structured so learners can progress from zero experience to strong Python fundamentals.

## Who this is for

- Complete beginners with no prior programming experience
- Self-paced learners studying part-time
- Instructors and mentors who need a clear foundational Python curriculum

## AI-assisted creation

This project has been created with AI assistance to speed up content drafting, iteration, and quality improvements.
Final direction, scope, and quality decisions remain human-reviewed.

## Open collaboration

The source is public and open for learning, review, and community contributions.
If you want to contribute, see [CONTRIBUTING.md](CONTRIBUTING.md).
Contributions require explicit maintainer authorization and must be submitted via Pull Request.

## License (restricted)

This is a public educational project with a limited, restricted license model.

- Allowed: learning, personal study, and educational collaboration
- Restricted: commercial resale, paid redistribution, and relicensing without explicit permission from the project owner

If you need commercial or special usage rights, contact the maintainer first.

## Quick start

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
mkdocs serve
```

Then open: <http://127.0.0.1:8000>

## Language support

- English: <http://127.0.0.1:8000/>
- Espanol: <http://127.0.0.1:8000/es/>

The project uses `mkdocs-static-i18n` with translated content files (`*.es.md`).

## Project structure

- `docs/part-1-python-fundamentals/`
- `docs/part-2-standard-library-essentials/`
- `docs/part-3-real-world-python/`
- `docs/exercises/` (separate exercise bank)
- `docs/curriculum.md` (master curriculum tracker)
- `docs/authoring/chapter-template.md`

## Interactive chapters

Selected chapters use Pyodide to run Python directly in-page.
To make a chapter interactive, wrap a Python block with:

````html
<div class="py-run" markdown="1">
```python
print("hello")
```
</div>
````

## Deploy

GitHub Actions workflow is included at `.github/workflows/deploy.yml`.

## Deploy to GitHub Pages

1. Push this project to a GitHub repository.
2. In GitHub, go to `Settings -> Pages`.
3. Under "Build and deployment", set:
   - Source: `Deploy from a branch`
   - Branch: `gh-pages`
   - Folder: `/(root)`
4. Push to `main` to trigger the workflow.
5. Wait for the "Deploy Docs" workflow to finish, then open:
   - `https://<your-user>.github.io/<your-repo>/`

Notes:

- The workflow automatically publishes with `mkdocs gh-deploy --force`.
- Site/repo URLs are auto-filled during CI from your GitHub repository metadata.
