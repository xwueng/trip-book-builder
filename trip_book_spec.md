TRIP BOOK RULES
(this file: trip_book_spec.md)

Build a flip-through trip book from uploaded photos: one self-contained HTML file, phone-friendly, real page-turning flip. No music unless asked.

Design: cream paper w/ soft vignette, cream-white cards, teal headings, amber accent, warm dark ink. Serif display font (Palatino/Book Antiqua/Georgia) for title + place names, sans-serif for body text. Cover/closing: thin bordered frame. Cover = tracked-uppercase kicker ("A Trip Book"), large serif title, wavy divider with a dot at each end, dates (or placeholder), "Tap Next to begin" hint, illustrated postmark stamp top corner (dashed border, inner frame, circle motif, landscape silhouette, short label) — not plain text. Closing = same frame, serif "The End", route line of places joined by "·", short closing line. Fact callout: tinted box, left amber border, sentence only — no "Fact"/"Fun Fact" label. Nav bar: "Back"/"Next" fixed to bottom, gradient fade above, safe-area padding; fixed-size (not stretched) chunky/tactile buttons with 3D-press feel; counter centered between them.

Structure: cover → one page per photo (send order) → closing page (+ route map on closing, only if Map rule met). Each photo page: photo, place, date, note, fact in its callout below the note. No "Stop 1/2/3" labels.

Page turn: hinge-and-curl from the edge, like a real page turning. Never a flat rotate/spin. Hinge stays on the same spine edge (left) for every page, cover to closing — set transform-origin to the left edge, not the right; a right-anchored hinge can look plausible flipping forward (the page vanishes past 90° once backface-visibility hides it) but is immediately visible as wrong when flipping backward, so test the backward direction specifically, not just forward. Stacking order: turned pages and not-yet-turned pages must be tracked in two non-overlapping z-index ranges (e.g. turned = page index, unturned = a large constant minus page index) — never a single formula like `total - index` for the unturned side, since that range collides with the turned range partway through any book longer than a few pages and makes later pages flip from the wrong side. During the flip itself, the actively-turning page must stay above the entire stack for the full duration of its transition (so it visibly arcs over the book), and only drop to its settled low z-index after the transition finishes (e.g. via a timeout matching the CSS transition duration) — assigning its final low z-index at the same instant the flip starts makes it sink behind the stack mid-animation instead of passing over it. Check the flip at the book's midpoint and near the end, not just the first couple of pages, before delivering.

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
"Structurally identical" means shared mechanics (sidebar, ids, spacing scale, type
scale) — it does not mean identical wording; either doc's content can be trimmed or
reworded on its own (e.g. the Student Handbook drops asides the Instructor Guide keeps).

Title: both docs display "My Trip Book" — in the page <title> and in the visible
masthead/cover h1 — not "My Trip, My Book".

Format: each is one self-contained HTML file — no external dependencies, no build step.
HTML (not PDF) is the primary deliverable, because it's the only format that supports
the live sidebar behavior below. PDF export remains available as a fallback via each
doc's built-in "Print / Save as PDF" button.

Typography: both docs share one type scale — body 18px/1.62 line-height, h2 24px,
h3 19px, notes/tips 16px, on-page TOC list 16px, sidebar title 11.5px, sidebar links
14.5px, nested sidebar sub-links 13px. Only the palette (below) is allowed to differ
between docs — font sizes must match exactly so neither guide reads as an afterthought.

Spacing: kept compact and consistent between docs — h2 margin 26px top / 6px bottom,
h3 margin 16px top, paragraphs and list items 5–8px vertical margin, hr rule 18px,
notes/tips/blockquotes/loop-cards 6–10px vertical margin, masthead/cover padding
trimmed to roughly 22–32px. Treat these as the baseline; don't reintroduce the larger
spacing (e.g. 40px h2 margins) when adding new sections.

Palette (the one thing kept distinct, same structure):
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

Second-level (nested) index: where an h2 section contains its own numbered h3
subsections (e.g. "Getting set up" → "1. Create your account" / "2. Create your
Project" / "3. Add the rules file"), give each h3 its own kebab-case id and nest a
<ul class="side-toc-sub"> of matching links inside that h2's <li> in the sidebar.
The .side-toc-sub CSS (smaller font, left-indented, no bullet) is already defined in
both docs' stylesheets. No JS changes are needed — the scrollspy script selects all
`.side-toc a` regardless of nesting depth, so nested links highlight automatically.
Apply this pattern to both docs wherever a section has its own numbered/lettered
subsections, to keep the sidebar's depth consistent between them.

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
1. Every heading id (h2 and any nested h3) has exactly one matching sidebar
   data-target, and vice versa (no orphans) — nested ids included.
2. HTML tag counts balance (div/aside/ul/script open vs close) and CSS brace count balances.
3. Rendered check at both a wide (desktop) and narrow (<900px) viewport width to confirm
   the sidebar/toggle behavior looks right before handing off.
4. Font sizes for shared elements (body, h2, h3, notes/tips, TOC, sidebar) still match
   between the two docs, unless a change was explicitly asked for only one.

Edits: given in plain language — apply to both docs' matching structure/CSS tokens
(not just one), regenerate, and re-run the verification checklist above before delivering.

