# My Trip, My Book — Class Guides

Facilitation materials for **My Trip, My Book**, a photo trip-book class that runs entirely inside Claude — no separate app to install.

## What's in this repo

| File | What it's for | Who it's for |
|---|---|---|
| [`Instructor_Guide.html`](./Instructor_Guide.html) | Full facilitator copy — setup, step-by-step scripts, teacher notes, checklists | Instructors / helpers |
| [`Student_Handbook.html`](./Student_Handbook.html) | Same steps, plain language, no notes — printable for students | Students |
| [`trip_book_spec.md`](./trip_book_spec.md) | The build spec attached to each student's Claude Project — tells Claude how to build their trip book | Attached to student projects (not meant to be read as a guide) |

## Viewing the guides

The two HTML guides are hosted live via **GitHub Pages**, so they open directly in a browser with full formatting, the sidebar contents menu, and the "Print / Save as PDF" button all working:

- **Instructor Guide:** `https://<your-username>.github.io/<repo-name>/Instructor_Guide.html`
- **Student Handbook:** `https://<your-username>.github.io/<repo-name>/Student_Handbook.html`

(Replace `<your-username>` and `<repo-name>` with your actual GitHub username and this repo's name.)

`trip_book_spec.md` doesn't need Pages — GitHub renders Markdown natively, so [viewing it directly in the repo](./trip_book_spec.md) is enough.

## Making edits

1. Edit the file(s) locally or directly on GitHub.
2. Commit and push (or re-upload via the web UI).
3. GitHub Pages rebuilds automatically — changes are usually live within a minute.

If you edit the Instructor Guide or Student Handbook, keep both in sync — see the "GUIDE BOOK RULES" section in `trip_book_spec.md` for the shared structure/design rules both docs follow, and the verification checklist to run before publishing an update.

## Setup this repo needs (one-time)

- Repo visibility: **Public** (required for free GitHub Pages).
- **Settings → Pages → Source:** Deploy from a branch → `main` → `/ (root)`.
