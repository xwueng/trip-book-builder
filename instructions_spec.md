GUIDE BOOK RULES
(this file: instructions_spec.md — instructions for Claude to build and maintain
Instructor_Guide.html and Student_Handbook.html, the class-facilitation guides.
Separate from trip_book_spec.md, which governs the student's own trip book.)

Purpose: keep the two guide documents structurally identical and visually distinct,
so any future edit can be applied to both without re-deriving the design each time.
"Structurally identical" means shared mechanics (sidebar, ids, spacing scale, type
scale) — it does not mean identical wording; either doc's content can be trimmed or
reworded on its own (e.g. the Student Handbook drops asides the Instructor Guide keeps).

Students work independently: neither guide assumes a classroom helper/aide sits with
students during setup or steps. The Instructor Guide still assumes an instructor runs
the class (demos the example book, times the steps, answers questions, circulates to
check on stuck students) — that role stays. But phrasing implying a second person
walks a student through their own setup one-on-one (e.g. "a helper," "helper pastes
it," "with a helper alongside," a helper-to-student ratio) should not appear; students
create their own account/Project and paste their own lines, following the written
steps. If a new draft reintroduces helper-based phrasing, rewrite it to have the
student act on their own, and keep the instructor role limited to running the class,
not personally walking each student through it.

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
sidebar, toggle button, active-link highlight, and copy-button component (below) all
derive their colors from those same variables, not hard-coded hex values.

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
Project" / "3. Add the rules"), give each h3 its own kebab-case id and nest a
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
link that opens directly in a browser with full JS/CSS intact. instructions_spec.md
(this file) and trip_book_spec.md ship alongside as plain Markdown; GitHub renders
.md natively, so neither needs Pages setup.

Copy-to-clipboard instruction line (added to both docs): whenever a step asks the
reader to paste an exact string somewhere else (currently: the one-line
"Build trip book by following the spec in <URL>" instruction that goes into Project
instructions), show it as a copy-box rather than plain prose or a note block, so the
reader doesn't have to manually select/retype it:

- Markup: `<div class="copy-box"><code class="copy-text" id="UNIQUE-ID">EXACT TEXT
  TO COPY</code><button type="button" class="copy-btn" data-copy-target="UNIQUE-ID"
  aria-label="Copy line to clipboard"><svg class="copy-icon" ...>...</svg><span
  class="copy-btn-label">Copy</span></button></div>`.
- `id`/`data-copy-target` must match within the same doc; each doc only needs one such
  id today (`rules-line`) but keep ids unique if a second copy-box is ever added to the
  same page.
- The text inside `.copy-text` is the literal string to be pasted elsewhere — never
  convert it into a link, never reformat it, never wrap the URL portion in different
  styling. It must round-trip exactly as written.
- CSS (per doc's palette, matching the sidebar/toggle accent already in use):
  `.copy-box` a bordered/rounded container in `--card`/`--paper`; `.copy-btn` uses the
  doc's accent color for its border/background (`--amber`/`--amber-tint` for the
  Student Handbook, `--brass`/`--clay-tint` for the Instructor Guide) and switches to
  a solid, contrasting fill (`--teal` / `--slate`) with a `.copied` class while showing
  feedback.
- JS: a single delegated click handler (one per doc, in its own `<script>` block,
  separate from the sidebar/scrollspy script) copies the target element's `textContent`
  via `navigator.clipboard.writeText`, with a `document.execCommand('copy')` fallback
  through a hidden textarea for browsers without Clipboard API support. On success the
  button's label swaps to "Copied!" for ~1.8s (via a `.copied` class + timeout) before
  reverting to "Copy".
- Always pair a copy-box with an explicit, separate paste step naming exactly where the
  text goes (e.g. "Paste it into the Project instructions box, then tap Save") — never
  leave the reader to infer the destination from the copy step alone.

Collapsible sections (added to both docs): every section — both top-level h2 (and the
one h1, "The four steps," in the Instructor Guide) and nested h3 subsections (Getting
set up's Create account / Create Project / Add the rules; Setting up each student's
project's Part 1–3) — is wrapped in a native `<details class="step-details">` /
`<summary>` pair, collapsed by default (no `open` attribute). Parent sections whose
content is itself a set of numbered sub-steps (e.g. "Getting set up," "Setting up each
student's project," "The four steps") nest their child `<details>` inside their own
`<div class="step-body">`, so opening the parent reveals a set of still-individually-
collapsed children — a two-level accordion, not a single flat list. The only headings
left unwrapped are ones with no id and no sidebar entry that sit inside an already-
wrapped section (e.g. "Start my book" in the Instructor Guide, "Before each step" /
"Watch for" inside Facilitator checklist) — wrapping a sub-heading with no id doesn't
help navigation and would just add another click.

- Markup: `<details class="step-details"><summary><svg class="toggle-icon" ...>...
  </svg><h2 id="...">...</h2></summary><div class="step-body">...section
  content...</div></details>`. The toggle icon comes first in the markup (leftmost in
  the row), the heading follows — never the reverse. The heading keeps its existing id
  and stays the single link to its sidebar entry, exactly as before — collapsing
  doesn't change the id/sidebar-matching rule above.
- Icon: a small rounded square containing a plus sign — one `<rect>` (the square
  outline) plus two `<line>`s (one horizontal, one vertical, forming the "+"). The
  vertical line carries its own class (`toggle-icon-v`) so `details[open] > summary
  .toggle-icon-v{display:none}` hides just that line when expanded, leaving only the
  horizontal line — turning the "+" into a "−" with no separate open/closed icon
  asset needed. Do not use a chevron/arrow/rotate-based indicator; this square
  plus/minus is the one collapse indicator used across both docs.
- CSS: `summary` has its native marker hidden (`::-webkit-details-marker{display:none}`
  / `::marker{content:""}`) and is laid out as a flex row (`align-items:center`, icon
  fixed-size first, heading `flex:1` second) so the whole heading row is clickable and
  the icon stays vertically centered against the heading regardless of h1/h2/h3 size.
  The heading's existing margin/border-bottom stays on `summary > h2`/`summary >
  h3`/`summary > h1` (nested selector, covers all three since the Instructor Guide's
  "The four steps" is an h1), not on the `<details>` itself. Nested `<details>` inside
  a parent's `.step-body` get a left border + indent
  (`details.step-details .step-body details.step-details{margin-left:6px;
  padding-left:14px; border-left:2px solid var(--rule)}`) to show the accordion depth.
- No JS is required for the accordion behavior — this is native `<details>` markup.
  Do not add a click handler for expand/collapse; only the existing copy-to-clipboard
  and scrollspy scripts remain.
- Print: `<details>` content must stay visible when printed regardless of collapsed
  state, so `@media print` forces `details.step-details:not([open]) > *:not(summary)`
  to `display:block !important` and hides the toggle icon — printed/PDF output always
  shows every section expanded (nested included), unaffected by on-screen collapse
  state.
- A one-line note near the top of each doc (right after the intro paragraph(s), before
  the first collapsible section) tells the reader how the accordion works — e.g. "Tap
  the small + square next to any heading below to open that section — tap it again to
  close it." Keep this to one line; it's an orientation cue, not a repeated
  instruction.
- Apply this consistently to both docs wherever a new section (numbered step or not)
  is added, unless it's an unlinked sub-heading inside an already-wrapped section (see
  above).

iOS trip-book download guidance (added to both docs, in Step 4 — Download and share
it): iPhone/iPad don't open a downloaded HTML file as a live webpage by default —
tapping it typically shows plain text instead of the flip-book — so Step 4 includes a
note (student-facing tone in the Student Handbook, facilitator-framing "flag this
before they download" in the Instructor Guide) giving iOS users two named options:
1) download as PDF, with the tradeoff stated plainly (easy to view/share anywhere, but
becomes flat, non-flipping pages — the page-turn animation is lost); 2) use a Windows
or Mac computer instead — sign in to claude.ai there, open the same project, and
download the book, since it opens and flips normally on a desktop browser. Do not
reintroduce a "Share button → Open in Safari" style suggestion as an iOS workaround —
it was tested and found not to reliably work, which is why option 2 is the
desktop-computer route instead. Keep both current options and their tradeoffs in
every mention — don't drop the PDF's animation-loss caveat or the "needs a Windows/Mac
computer" condition on option 2. Both docs also note, right before the iOS-specific
block, that Android phones and Windows/Mac computers need no extra steps at all.

Download-button instructions (desktop + mobile) — status: not currently used by either
guide. The rules-file step used to instruct downloading trip_book_spec.md and attaching
it under Context/Project files; that flow has been replaced by the copy-to-clipboard
pattern above (paste one line into Project instructions — no download or attachment
needed). This section is kept in case a future edit reintroduces a step that requires
downloading a repo file directly:

GitHub's download control for a repo file is NOT the same UI on desktop vs. mobile web,
so wherever a guide instructs the reader to download a repo file, give both flows as
two separate paragraphs with a blank line between them (never joined with a line
break) — mobile first, since most students in this class are on phones, desktop
second:

- Mobile (phone browser): there is no standalone icon. Near the top of the file, next
  to the Preview / Code / Blame tabs, is a "•••" (three-dot) icon at the right end of
  that row. Tapping it opens a small menu (Raw file content / Copy / View / Download)
  where "Download" appears as a plain text row. Instruct mobile readers to tap "•••"
  at the right end of that row, then tap "Download" from the menu that appears.
  Illustrate this with a screenshot of the actual tab row (Preview | Code | Blame with
  the ••• icon), embedded inline as a base64 image directly below the instruction —
  do not just describe it in prose.

- Desktop: the Preview/Code/Blame row has no "•••" icon at all — do not use "menu"
  language for desktop, since there is no menu to open. Instead, the right side of
  that same row (past the line-count info) has a "Raw" button, a copy icon, and a
  small standalone download-tray icon button, which the reader clicks directly. Give
  a screenshot of this right-hand cluster (Raw / copy / download / edit icons) as a
  base64 image directly below the instruction, same as the mobile screenshot. Also
  represent the download icon inline in the sentence with this SVG instead of a plain
  "⬇" character:

  <svg class="dl-icon" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" style="vertical-align:-2px;">
    <path fill="currentColor" d="M7.25 10.25a.75.75 0 0 0 1.5 0V3.75a.75.75 0 1 0-1.5 0v6.5ZM4.72 6.72a.75.75 0 0 1 1.06 0L8 8.94l2.22-2.22a.75.75 0 1 1 1.06 1.06l-2.75 2.75a.75.75 0 0 1-1.06 0L4.72 7.78a.75.75 0 0 1 0-1.06ZM3.5 12.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75Z"/>
  </svg>

Apply this consistently everywhere a download-button step is (re)introduced in either
doc. (The `.dl-icon` CSS rule remains defined in both stylesheets even while unused,
so it's ready if this pattern comes back.)

Claude Projects "add content" naming: the area where a downloaded file gets attached
to a Project is labeled differently by platform — on desktop web it's called
**Context** (right side of the project page); on the Claude mobile app, the same area
is called **Project files**. Whenever either guide instructs the reader to attach a
file to their Project, name both labels rather than only "Context." (Verified against
Anthropic's own support documentation only for the general project-knowledge flow;
the mobile-specific "Project files" label came from the person's own testing, not a
docs citation — flag this to them again if it should ever need re-confirming.)

Claude Projects "Project instructions" naming: the free-text field where a project's
own custom instructions live (separate from Context/Project files above — this field
holds instructions, not attached files) is currently referred to in both guides as
**Project instructions**, used as the same label on desktop and the mobile app. This
has not been independently verified against Anthropic's own product documentation for
platform-label parity (unlike the Context/Project files note above, which cites
support docs) — flag this for re-confirmation if it's ever in doubt, and correct both
guides together if the actual mobile label turns out to differ.

Sharing the finished trip book: the student's finished book is a Claude artifact, and
Anthropic's own docs (https://support.claude.com/en/articles/9547008-publish-and-share-artifacts)
describe a **Publish**/**Share** button on artifacts for getting a link. In practice
that route isn't used in either guide for this class — trip books are photo-heavy and
often too large for that publish/share path, so both guides route all sharing through
the **Download** button instead: download the file, then attach it to an email, text,
or messaging app. Do not reintroduce "click Publish"/"ask Claude for a link" wording
unless the file-size limitation is independently reconfirmed to no longer apply.

- Android phones and Windows/Mac computers open a downloaded trip-book HTML file
  normally — no extra steps, so both guides just say to attach it as usual there.
- iPhone/iPad don't open a downloaded HTML file as a live webpage by default (see the
  "iOS trip-book download guidance" entry below) — this is the one case that needs
  its own note.
- If an email won't carry the file (large photo-heavy books), both guides suggest a
  USB drive or a generic cloud-drive link (Google Drive, Dropbox) rather than a
  Claude-specific publish/share link.

Repo file references: any time a repo file is named in either guide (trip_book_spec.md,
San_Francisco_demo_book.html, etc.) — whether as an instruction to open it, a "what
you'll use" list entry, or a checklist item — wrap the filename in a link to its GitHub
blob URL (https://github.com/xwueng/trip-book-builder/blob/main/<filename>). The
filename itself stays the visible link text; never show the raw URL as the link text
or add it as separate visible text next to the filename. Apply this consistently
everywhere a repo filename appears in either doc, including repeated mentions of the
same file. Exception: the literal text inside a copy-box (see the copy-to-clipboard
pattern above) is exempt — it must stay exact, unstyled, unlinked plain text so it
copies and pastes correctly, even where it contains a URL that names a repo file.

Verification checklist before delivering any edit to either guide:
1. Every heading id (h2 and any nested h3) has exactly one matching sidebar
   data-target, and vice versa (no orphans) — nested ids included.
2. HTML tag counts balance (div/aside/ul/script open vs close) and CSS brace count balances.
3. Rendered check at both a wide (desktop) and narrow (<900px) viewport width to confirm
   the sidebar/toggle behavior looks right before handing off.
4. Font sizes for shared elements (body, h2, h3, notes/tips, TOC, sidebar) still match
   between the two docs, unless a change was explicitly asked for only one.
5. Every mention of a repo filename in either doc is a clickable link to its GitHub
   blob URL, with the filename (not the raw URL) as the visible link text — except
   literal copy-box text, which stays unlinked.
6. Every `.copy-btn`'s `data-copy-target` matches exactly one `.copy-text` id in the
   same doc, and each doc's copy-to-clipboard `<script>` block is present and unchanged
   unless the copy behavior itself was the point of the edit.
7. Every section (top-level h2/h1 and nested h3 subsections) is wrapped in
   `<details class="step-details">` with no `open` attribute (collapsed by default),
   except unlinked sub-headings with no id inside an already-wrapped section. Each
   heading's id is unchanged and still inside its `<details>`/`<summary>`, nested
   parent/child accordions are preserved where they existed, and the `@media print`
   override still forces collapsed content visible for printing.

Edits: given in plain language — apply to both docs' matching structure/CSS tokens
(not just one), regenerate, and re-run the verification checklist above before delivering.
