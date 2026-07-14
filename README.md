# My Trip Book — Class Guides

Facilitation materials for **My Trip Book**, a photo trip-book class that runs entirely inside Claude — no separate app to install.

## What's in this repo

| File / folder | What it's for | Who it's for |
|---|---|---|
| [`Instructor_Guide.html`](./Instructor_Guide.html) | Full facilitator copy — setup, step-by-step scripts, teacher notes, checklists | Instructors / helpers |
| [`Student_Handbook.html`](./Student_Handbook.html) | Same steps, plain language, no notes — printable for students | Students |
| [`trip_book_spec.md`](./trip_book_spec.md) | The build spec — tells Claude how to build a trip book. Students point their Project at it by pasting one line into Project instructions (no download needed) | Referenced by student projects (not meant to be read as a guide) |
| [`instructions_spec.md`](./instructions_spec.md) | The build spec for Claude to create/maintain `Instructor_Guide.html` and `Student_Handbook.html` — shared structure, typography, and design rules for the two guides | Used when editing the guides (not meant to be read as a guide) |
| [`San_Francisco_demo_book.html`](./San_Francisco_demo_book.html) | Finished example trip book, flipped through on the projector on day one to show the goal | Instructors (demo only) |
| [`Demo Photos/`](./Demo%20Photos) | Source photos used to build the San Francisco demo book | Instructors (reference only, not needed by students) |

## Viewing the guides

The HTML files are hosted live via **GitHub Pages**, so they open directly in a browser with full formatting, the sidebar contents menu, and the "Print / Save as PDF" button all working:

- **Instructor Guide:** `https://<your-username>.github.io/<repo-name>/Instructor_Guide.html`
- **Student Handbook:** `https://<your-username>.github.io/<repo-name>/Student_Handbook.html`
- **San Francisco demo book:** `https://<your-username>.github.io/<repo-name>/San_Francisco_demo_book.html`

(Replace `<your-username>` and `<repo-name>` with your actual GitHub username and this repo's name.)

`trip_book_spec.md` and `instructions_spec.md` don't need Pages — GitHub renders Markdown natively, so viewing them directly in the repo ([trip_book_spec.md](./trip_book_spec.md), [instructions_spec.md](./instructions_spec.md)) is enough. The `Demo Photos` folder is just a reference — GitHub shows the images in-browser if you click into the folder, but there's no need for a Pages link to it.

## Making edits

1. Edit the file(s) locally or directly on GitHub.
2. Commit and push (or re-upload via the web UI).
3. GitHub Pages rebuilds automatically — changes are usually live within a minute.

If you edit the Instructor Guide or Student Handbook, keep both in sync — see `instructions_spec.md` for the shared structure/design rules both docs follow, and the verification checklist to run before publishing an update.

## Setup this repo needs (one-time)

- Repo visibility: **Public** (required for free GitHub Pages).
- **Settings → Pages → Source:** Deploy from a branch → `main` → `/ (root)`.
