TRIP BOOK RULES
(this file: trip_book_spec.md)

Build a flip-through trip book from uploaded photos: one self-contained HTML file, phone-friendly, real page-turning flip. No music unless asked.

Design: cream paper w/ soft vignette, cream-white cards, teal headings, amber accent, warm dark ink. Serif display font (Palatino/Book Antiqua/Georgia) for title + place names, sans-serif for body text. Cover/closing: thin bordered frame. Cover = tracked-uppercase kicker ("A Trip Book"), large serif title, wavy divider with a dot at each end, dates (or placeholder), "Tap Next to begin" hint, illustrated postmark stamp top corner (dashed border, inner frame, circle motif, landscape silhouette, short label) — not plain text. Closing = same frame, serif "The End", route line of places joined by "·", short closing line. Fact callout: tinted box, left amber border, sentence only — no "Fact"/"Fun Fact" label. Nav bar: "Back"/"Next" fixed to bottom, gradient fade above, safe-area padding; fixed-size (not stretched) chunky/tactile buttons with 3D-press feel; counter centered between them.

Structure: cover → one page per photo (send order) → closing page (+ route map on closing, only if Map rule met). Each photo page: photo, place, date, note, fact in its callout below the note. No "Stop 1/2/3" labels.

Page turn: hinge-and-curl from the edge, like a real page turning. Never a flat rotate/spin.

Uploads: build immediately when photos are sent, even with no caption or text. Photos-only send is enough to trigger the build — don't wait for a description.

Dates: show only if in metadata or given; otherwise omit, no placeholder. Missing metadata is normal (uploads often strip GPS/date on export) — not an error.

Places/facts: identify each photo's place. Confident ID → state plainly. Guess → still write a fact, and flag with a "confirm venue" badge on the photo's corner.

Map: include a route map on the closing page only if every photo has a confirmed location (GPS metadata or the person's own words). Any unknown or guessed/badged location → omit the map entirely, never a partial or guessed route. All-or-nothing, re-checked on every rebuild.

Notes: ask for title/dates first if missing. Walk through each photo and ask for the person's words. If none given (they say "skip," or the photo arrives uncaptioned) → write the note yourself from what's visible in the photo, name the place, add the fact.

Edits: plain-language request → apply and regenerate.


GUIDE BOOK RULES
(covers Instructor_Guide.html and Student_Handbook.html — the class-facilitation guides.
Separate from the trip-book rules above, which govern the student's own book.)

Purpose: keep the two guide documents structurally identical and visually distinct,
so any future edit can be applied to both without re-deriving the design each time.

Format: each is one self-contained HTML file — no external dependencies, no build step.
HTML (not PDF) is the primary deliverable, because it's the only format that supports
the live sidebar behavior below. PDF export remains available as a fallback via each
doc's built-in "Print / Save as PDF" button.

Palette (kept distinct, same structure):
- Instructor Guide: slate/slate-deep background, brass accent, clay badges — facilitator tone.
- Student Handbook: teal/teal-deep background, amber accent — plain-language tone.
Each doc's :root CSS variables are the single source of truth for its palette; the
sidebar, toggle button, and active-link highlight all derive their colors from those
same variables, not hard-coded hex values.

Structure: masthead/cover, an inline on-page TOC (kept for print only), then numbered
h2 sections each with a stable kebab-case id. The id is the single link between a
section and its sidebar entry — never rename an id without updating the matching
sidebar data-target.

Left sidebar TOC (added to both docs):
- Fixed left panel, full height, duplicating the on-page TOC, color-matched per doc.
- Live active-section highlighting via IntersectionObserver watching each h2 — updates
  as the reader scrolls, not just per "page" (this is the capability a static PDF
  cannot offer; only the HTML version does this).
- Every sidebar entry is a real anchor link that jumps to its section and closes the
  panel on mobile after clicking.
- On-page inline TOC is hidden on screen (sidebar replaces it) but stays in the markup
  for print output.

Mobile (<900px): sidebar collapses off-canvas behind a fixed ☰ toggle button top-left;
opening it shows a dark backdrop that closes the panel on tap; content gets top padding
to clear the toggle button. Above 900px the sidebar is always visible and content gets
a left margin to clear it.

Print / Save-as-PDF: sidebar, toggle, and backdrop are hidden in @media print; the
original inline TOC and existing page-break rules take over unchanged, so print output
is unaffected by the sidebar addition.

Hosting: Google Drive does not render HTML as a live webpage (files open as source/blank
or force a download), so these guides are hosted via GitHub Pages — public repo, Pages
enabled on the root or /docs folder — giving each a working https://<user>.github.io/...
link that opens directly in a browser with full JS/CSS intact. trip_book_spec.md (this
file) ships alongside as plain Markdown; GitHub renders .md natively, so it needs no
Pages setup.

Verification checklist before delivering any edit to either guide:
1. Every h2 id has exactly one matching sidebar data-target, and vice versa (no orphans).
2. HTML tag counts balance (div/aside/script open vs close) and CSS brace count balances.
3. Rendered check at both a wide (desktop) and narrow (<900px) viewport width to confirm
   the sidebar/toggle behavior looks right before handing off.

Edits: given in plain language — apply to both docs' matching structure/CSS tokens
(not just one), regenerate, and re-run the verification checklist above before delivering.

