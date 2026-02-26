# Contributing Guide

## Contribution policy (restricted)

- Contributions are accepted only with explicit maintainer authorization.
- All changes must be submitted through a Pull Request (PR).
- Direct pushes to `main` are not accepted.
- PRs without prior authorization may be closed without review.
- A maintainer approval is required before merge.

## Writing rules

- Keep chapters short and focused (one core idea per chapter).
- Follow the chapter template in `docs/authoring/chapter-template.md`.
- Prefer runnable Python examples.
- Add at least 2 exercises for each chapter.
- Keep exercise statements and solutions in `docs/exercises/`.

## Required flow

1. Request authorization from the maintainer before starting.
2. Create a feature branch (or fork + branch).
3. Open a PR against `main` with a clear description of changes.
4. Wait for maintainer approval before merge.

## PR checklist

- [ ] I have explicit maintainer authorization for this contribution
- [ ] Chapter follows template
- [ ] Examples run on Python 3.11+
- [ ] Exercises include hints and solutions
- [ ] Links and headings are valid
- [ ] `mkdocs serve` builds without errors

## Labels suggestion

Use these labels for community contribution flow:

- `good first issue`
- `content`
- `exercise`
- `docs tooling`
