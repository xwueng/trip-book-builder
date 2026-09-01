GUIDE BOOK RULES
(this file: instructions_spec.md — instructions for Claude to build and maintain
Instructor_Guide.html and Student_Handbook.html, the class-facilitation guides.
Separate from trip_book_spec.md, which governs the student's own trip book.)

Purpose: keep the two guide documents structurally identical and visually distinct,
so any future edit can be applied to both without re-deriving the design each time.
"Structurally identical" means shared mechanics (sidebar, ids, spacing scale, type
scale) — it does not mean identical wording, identical section lists, or identical
top-level ordering; either doc's content can be trimmed, reworded, reordered, or
numbered on its own (e.g. the Student Handbook drops asides the Instructor Guide
keeps; the Instructor Guide currently numbers its top-level sections and the Student
Handbook does not — see "Top-level section numbering" below).

KNOWN OPEN GAPS (read first): the two docs are not fully in sync right now. Treat
these as the next things to reconcile, not as the intended end state:
- The Instructor Guide's top-level sections are numbered (1–7) and use a unified h2
  style throughout; the Student Handbook's top-level sections are neither numbered
  nor reordered to match. Apply the same treatment to the Student Handbook the next
  time either doc's top-level structure is touched, unless told otherwise.
- The Student Handbook's Step 2 has a teal `.example` box demonstrating a 3-in-1 edit
  message ("Move the bridge photo to the front, remove the blurry photo on page 4,
  and change the line on the castle photo to..."). The Instructor Guide's Step 2 does
  not have this yet. Port it the next time that section is touched, phrased for the
  facilitator-copy voice, unless told otherwise.

RESOLVED (for reference — no longer open gaps):
- The Student Handbook's Step 2 batching tip ("put more than one small change in one
  message...") is now ported to the Instructor Guide's Step 2, phrased for the
  facilitator-copy voice (imperative "Encourage students to..." instead of the
  Handbook's direct-to-student phrasing). Both docs also now carry a matching
  usage-limit heads-up note directly below it (see "Usage-limit heads-up note" below).

Sign-up choice presentation (Student Handbook only): "Create your account" splits the
Google-vs-email choice into two boxes rather than one prose sentence — Google option
first, then non-Google email. Each box is a short bold label followed by its one
explanatory sentence: "Sign in with Google email" pairs with the note about the
Google account-data-sharing email students will receive; "Sign in with non Google
email" pairs with the phone-verification note (trimmed — it does NOT repeat "If you
signed up with Google, you can skip straight to the next step," since that's already
covered by the Google box). Per the amber-vs-teal rule below, both boxes are neutral/
informational, not warnings, so they use `.example` (teal), not `.tip` (amber). The
Instructor Guide keeps its existing single combined sentence for this choice (own
`.note` styling, no amber/teal distinction in that doc) plus a separate `.note` for
the Google-email heads-up — do not force the two-box layout into the Instructor
Guide; that doc's condensed, facilitator-voiced format for this choice is intentional.

Amber-vs-teal rule (Student Handbook only, restated for clarity): `.tip` (amber) is
for genuine warnings/things that can go wrong (PDF generation, the usage-limit note,
the busy-hours delay note, the email-file-size workaround). `.example` (teal) is for
neutral illustrative/informational content, including the two sign-up boxes above and
the "tap the + square to open a section" navigation instruction. No neutral content
should sit inside a `.tip` box — see verification checklist item 13.

Starting photo count: both docs now say **3–4 photos** to start with (was 4–6).
Student Handbook: item 3 of Step 1. Instructor Guide: item 3 of Step 1, including the
Ctrl+click parenthetical aside — keep both mentions of the number in that doc in sync
if this changes again.

Busy-hours generation-delay note: both docs' Step 1 now include a short warning-style
note (`.tip` in the Student Handbook, `.note` in the Instructor Guide) that book
generation can take longer during busy hours and to allow a few minutes before
assuming something's wrong. Placed immediately after the step list, before any
existing device-upload-troubleshooting note.

Usage-limit heads-up note: both docs' Step 2 now include a short warning-style note
(`.tip` in the Student Handbook, `.note` in the Instructor Guide) that a lot of edits
in one sitting can trigger the usage limit, and that waiting a few hours resolves it.
Placed near the top of Step 2, before the editing-actions table — in the Instructor
Guide, directly below the (now-ported) batching-tip paragraph.

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

Terminology — infer, not guess: whenever either doc describes Claude determining a
photo's location without confirmed metadata, use "infer"/"inferred" — never "guess"/
"guessed." This applies everywhere the behavior is mentioned: the intro paragraph, the
editing-action table, the confirm-venue tag explanation, and the feature-summary
table's "Reads your photos" row. Both docs must use this term identically.

Terminology — device, not phone, for uploading: when either doc describes where a
student uploads photos from, or troubleshoots an upload that isn't working, say
"device" rather than naming "phone" specifically — students may be on a phone,
tablet, or laptop, and "device" covers all three without implying phones are the
default or only option. This applies to the "Before the first class" note-to-students
blockquote, Step 1's upload-troubleshooting note, and the "Watch for" checklist's
upload-trouble item (Instructor Guide) — all three currently read "...from your
device..." / "If a device won't upload, open Claude in that device's own browser...".
Do NOT generalize every other "phone" mention this way — "phone" stays literal where
it's genuinely phone-specific and not interchangeable with "device":
- Account phone-number verification (the mobile number Claude texts a code to) —
  this is specifically a phone number, not a "device."
- The Ctrl+click-vs-tap photo-selection note in Step 1, which contrasts desktop
  click behavior against phone tap/"Select All" behavior — the contrast requires
  naming the phone specifically.
- The "Android phone" row in the device/file download table, which names a device
  category for file-format purposes, not an upload action.
- The "Student devices" bullet in the Class size and student devices section, which
  is deliberately listing device types (laptop, tablet, phone), not describing an
  upload action.

Steps — count and numbering: both docs currently run 3 numbered steps (1. Start your
book and add your photos; 2. Put it in order and polish; 3. Download and share it).
There is no separate "add your words" step — Claude asks about each photo's words as
part of the same conversational flow that starts in Step 1, and word-adding guidance
lives inside Step 2 as the nested "Words to help you/students remember" sub-section
(below), not as its own numbered step. Step 1/2/3 headings carry their own "Step N"
number in the heading text and are NOT additionally prefixed by the top-level section
numbering described below (see "Top-level section numbering") — a step heading reads
"Step 2 — Put it in order and polish," never "5. Step 2 — ...". If a future edit needs
to add or remove a step, renumber every subsequent step, its heading id, its sidebar
entry (both docs' side panel and on-page/print TOC), and any other place in either doc
that mentions a step by number (e.g. the feature-summary table's "Limited by" note,
which currently points to "the table in Step 3").

Top-level section numbering (Instructor Guide only, currently — see Known Open Gaps
above): every top-level h2 section EXCEPT the three numbered Steps is prefixed with
its own sequence number directly in the heading text and in both TOC entries (side
panel and on-page/print), e.g. "1. Class size and student devices," "4. Setting up
each student's project," "7. What Claude AI does and doesn't." The three Step
sections keep only their own "Step N" numbering and are not given an additional
top-level number. Nested h3 subsections (Parts 1–3, "Words to help students
remember") are never numbered this way — only true top-level h2 sections. If a
section is added, removed, or reordered, renumber every subsequent top-level section
in both the heading text and both TOC lists so the sequence stays unbroken and
matches reading order top to bottom.

Instructor Guide top-level section order (current, canonical — apply this exact
order unless a future edit explicitly changes it):
1. Class size and student devices
2. Before the first class — note to students
3. Before the first class — facilitator prep list
4. Setting up each student's project (contains Part 1–3 as nested h3s)
5. Building the trip book — the three steps (contains Step 1/2/3 as nested h2s,
   Step 2 further contains "Words to help students remember" as a nested h3)
6. Watch for
7. What Claude AI does and doesn't

Removed sections — superseded, do not reintroduce: the Instructor Guide previously
had three additional top-level sections — "The goal," "How it works — the whole
idea," and "What you'll use" — that have been removed entirely (not merged into
anything). Their content is now redundant with the opening objective paragraph (see
"Objective sentence" below) and the numbered Steps themselves. Do not resurrect these
three sections or their ids (`the-goal`, `how-it-works-the-whole-idea`,
`what-youll-use`) unless explicitly asked to bring the content back — and if so, fold
it into the existing top-level numbering rather than restoring it as a standalone
un-numbered block.

Facilitator checklist — split into two sections, do not reunify: the Instructor
Guide previously had one "Facilitator checklist" section containing two nested h3
subsections ("Before each step" and "Watch for"), matching the collapsible-sections
exception for unlinked sub-headings. That structure is gone. The two lists are now
each their own full top-level h2 section, each independently wrapped in
`<details class="step-details">` with its own id and its own sidebar/TOC entry:
"Before the first class — facilitator prep list" (section 3, the old "Before each
step" list, minus the Project-instructions-paste-line item — see below) and "Watch
for" (section 6, the old "Watch for" list, unchanged content). Do not reintroduce a
combined "Facilitator checklist" parent section, and do not add an h3 label inside
either — the h2 itself is the label now.

Facilitator prep-list content: the "Before the first class — facilitator prep list"
section's checklist currently reads:
- Students without a Gmail address reminded to bring a mobile phone that can receive
  text messages, even if working on a laptop
- The example book ready on the projector
- Handouts printed in large type
The item about having "the Project-instructions paste line... ready to share with
every student" has been removed and should not be reintroduced — the copy-box
pattern (below) already puts that exact line directly in the Student Handbook and
Instructor Guide's own "Add the rules" step, so a facilitator doesn't need a separate
prep item for it.

Class size and student devices section (Instructor Guide, section 1 — formerly
titled "Who and how"): three bullets only —
- Class size: 6–10 students, working independently at their own pace.
- Class length: 90 minutes. (Renamed from "Step length"; the previous "with a short
  break" qualifier has been removed — do not reintroduce either the old label or the
  break mention unless asked.)
- Student devices: a laptop (recommended), tablet, or phone per student. (The
  previous trailing clause "— anything that opens Claude in a browser" has been
  removed; keep the bullet to this one short sentence.)
There is no longer a "Room" bullet (previously: "a projector for demos; good
lighting; water") — it has been removed and should not be reintroduced unless
explicitly asked. The section's trailing setup-steps note (about budgeting 10–15
minutes per student and phone verification being the most common snag) stays
directly under the three bullets, unchanged in position.

Section ordering — "Before the first class" note comes before setup: the "Before the
first class — note to students" section (the blockquote read/sent to students ahead
of class) sits at position 2, directly after "Class size and student devices" and
before "Setting up each student's project." Do not move it back below the setup
section; the note is meant to prime students before they even reach the how-to-set-up
instructions.

"Building the trip book — the three steps" (Instructor Guide, section 5 — formerly
titled "The three steps" and rendered as a special-cased `<h1>`): this section is now
a standard top-level `<h2>` like every other top-level section, matching the shared
type scale (24px) exactly. The previous `<h1 style="font-size:28px;...">` markup, its
matching `details.step-details > summary h1` CSS rule, and the `:hover h1` selector
have all been removed — there is no longer any h1-sized exception anywhere in either
doc's step content (the only remaining `<h1>` in either file is the masthead/cover
title, which is not part of the numbered section flow). Do not reintroduce a
differently-sized top-level heading; every top-level section, including this one,
uses the same h2 styling.

Objective sentence: both docs' opening paragraph (right after the masthead, before any
other framing content) leads with the bolded sentence "The objective of this lab is to
show where AI stands today." Everything else in that paragraph follows it — do not
reorder, trim, or paraphrase this sentence, and do not let a later edit push other
framing content ahead of it.

Prose economy — general principle for any wording edit: when tightening or rewriting
existing sentences (as opposed to writing new content from a blank page), prefer the
shorter, plainer phrasing as long as it loses no real information. Concretely: cut
throat-clearing openers ("This is a real, if short, learning task, so..." →
"...a real, if short, task."), don't restate a word already used earlier in the same
sentence when a pronoun or ellipsis reads just as clearly, and prefer one clean
sentence over two that repeat each other's point. This is a standing preference for
future edits, not a one-time pass — don't let new content drift back toward the more
verbose phrasing this rule replaced.

Format: each is one self-contained HTML file — no external dependencies, no build step.
HTML (not PDF) is the primary deliverable, because it's the only format that supports
the live sidebar behavior below. PDF export remains available as a fallback via each
doc's built-in "Print / Save as PDF" button.

Typography: both docs share one type scale — body 18px/1.62 line-height, h2 24px,
h3 19px, notes/tips 16px, on-page TOC list 16px, sidebar title 11.5px, sidebar links
14.5px, nested sidebar sub-links 13px. Only the palette (below) is allowed to differ
between docs — font sizes must match exactly so neither guide reads as an afterthought.
There is no longer any h2/h1 size split within a single doc either (see "Building the
trip book" above) — every top-level section in both docs uses the same h2 size.

Spacing: kept compact and consistent between docs — h2 margin 26px top / 6px bottom,
h3 margin 16px top, paragraphs and list items 5–8px vertical margin, hr rule 18px,
notes/tips/blockquotes/loop-cards 6–10px vertical margin, masthead/cover padding
trimmed to roughly 22–32px. Treat these as the baseline; don't reintroduce the larger
spacing (e.g. 40px h2 margins) when adding new sections.

Section dividers (`<hr>`): both docs currently have zero `<hr>` elements — every prior
divider between section groups (below "Getting set up," before "The three steps," etc.)
has been removed. The collapsed `<details>` accordion's own heading/border-bottom
styling is treated as sufficient visual separation between sections; don't reintroduce
`<hr>` dividers unless explicitly asked for. The `hr` CSS rule above stays defined in
both stylesheets even while unused, the same way `.dl-icon` does (see the download-
button section below), in case a divider is ever reintroduced.

Palette:
- Structural palette (background, headers, sidebar, badges) stays distinct per doc,
  same structure:
  - Instructor Guide: slate/slate-deep background, brass accent, clay badges —
    facilitator tone.
  - Student Handbook: teal/teal-deep background, amber accent — plain-language tone.
- Warning/informational callout palette is now SHARED between both docs (changed —
  previously the plan was for the Instructor Guide to derive its own slate/brass
  equivalents; that plan is superseded, see below): both docs use the same amber
  (`--amber`/`--amber-tint`, warnings) and teal (`--teal`/`--teal-deep`/`--teal-tint`,
  informational) hex values for `.tip`/`.example`, layered into the Instructor
  Guide's `:root` alongside its own slate/clay/brass tokens rather than replacing
  them. Those structural tokens still drive the sidebar, toggle button, active-link
  highlight, and copy-button component in each doc — only the `.tip`/`.example`
  callout pair is now color-shared.

Note/warning vs. example/illustration color — amber is reserved for warnings only,
teal for neutral/informational, in BOTH docs now: both guides have two visually
distinct callout box styles that must not be conflated:
- `.tip` (amber background, amber left border) — reserved for genuine warnings,
  cautions, or things that could go wrong if missed (e.g. "saving the HTML page as a
  PDF yourself does not produce a correct PDF," "if your email won't let the file
  through..."). Amber signals "pay attention, this could trip you up."
- `.example` (teal background, teal left border, teal-deep text — using the shared
  `--teal-tint`/`--teal`/`--teal-deep` tokens, not new hex values) — reserved for
  neutral illustrative or orientation content that isn't a warning (e.g. the "tap the
  + square to open a section" instruction, the facilitator-copy intro note, the "one
  message, three edits" sample message). Teal signals "here's context/an example,"
  not "watch out."
Do not use `.tip` for illustrative/orientation content going forward, and do not
introduce a third ad-hoc callout color — reuse `.example` for any future non-warning
callout in either doc. The Instructor Guide's old single `.note` class (slate/clay-
tinted, used for every aside regardless of warning-vs-informational) has been fully
retired — every former `.note` usage has been reclassified into `.tip` or `.example`
per the warning/informational split above; do not reintroduce `.note` or a
slate/clay-tinted catch-all aside style in that doc going forward.

Structure: masthead/cover, an inline on-page TOC (kept for print only), then top-level
h2 sections each with a stable kebab-case id (see "Top-level section numbering" above
for how the Instructor Guide's sections are additionally numbered in the heading
text). The id is the single link between a section and its sidebar entry — never
rename an id without updating the matching sidebar data-target.

Left sidebar TOC (added to both docs):
- Fixed left panel, full height, duplicating the on-page TOC, color-matched per doc.
- Live active-section highlighting via IntersectionObserver watching each h2 — updates
  as the reader scrolls, not just per "page" (this is the capability a static PDF
  cannot offer; only the HTML version does this).
- Every sidebar entry is a real anchor link that jumps to its section and closes the
  panel on mobile after clicking.
- On-page inline TOC is hidden on screen (sidebar replaces it) but stays in the markup
  for print output.
- Sidebar link text mirrors the section's numbering exactly (see "Top-level section
  numbering" above) — if a heading reads "3. Before the first class — facilitator
  prep list," both the side-panel and on-page TOC entries for it also start with "3."
  Keep long headings shortened consistently between the two TOC copies where space is
  tight (e.g. the side panel may say "5. Building the trip book" while the on-page TOC
  spells out the full "5. Building the trip book — the three steps") — this
  abbreviation pattern already exists for other long headings and is fine to continue,
  as long as the number itself always matches.

Second-level (nested) index: where an h2 section contains its own numbered h3
subsections (e.g. "Getting set up"/"Setting up each student's project" → "1. Create
your account" / "2. Create your Project" / "3. Add the rules", or its equivalent
"Part 1–3" labels in the Instructor Guide; or Step 2 → "Words to help you/students
remember"), give each h3 its own kebab-case id and nest a <ul class="side-toc-sub">
of matching links inside that h2's <li> in the sidebar. These nested h3s are never
given the top-level numbering described above — only true top-level h2 sections get
that treatment.
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
  text goes (e.g. "Paste it into that instructions box, then tap Save") — never
  leave the reader to infer the destination from the copy step alone.

Collapsible sections (added to both docs): every top-level h2 section and every
nested h3 subsection (Getting set up's Create account / Create Project / Add the
rules and its Instructor Guide equivalent Part 1–3; Step 2's nested "Words to help
you/students remember") is wrapped in a native `<details class="step-details">` /
`<summary>` pair, collapsed by default (no `open` attribute). Parent sections whose
content is itself a set of numbered sub-steps (e.g. "Getting set up"/"Setting up each
student's project," "Building the trip book — the three steps," Step 2) nest their
child `<details>` inside their own `<div class="step-body">`, so opening the parent
reveals a set of still-individually-collapsed children — a two-level accordion, not a
single flat list. Every top-level section in both docs is now fully wrapped this way,
each with its own id and sidebar entry — there is currently no example in either doc
of an unwrapped sub-heading inside an already-wrapped section (the "Before each
step"/"Watch for" case that used to be this exception no longer exists — see
"Facilitator checklist — split into two sections" above; both are now their own
wrapped top-level sections). If a genuinely unlinked, id-less sub-heading is ever
introduced again, it's still fine to leave it unwrapped rather than adding a
pointless extra click — this general allowance stays, it just has no current example.

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
  the icon stays vertically centered against the heading. The heading's existing
  margin/border-bottom stays on `summary > h2`/`summary > h3` (nested selector) — both
  docs now use only h2/h3 for section headings (see "Building the trip book" above for
  the removed h1 exception and its now-deleted `summary > h1` CSS rule; do not
  reintroduce it). Nested `<details>` inside a parent's `.step-body` get a left
  border + indent (`details.step-details .step-body details.step-details{margin-
  left:6px; padding-left:14px; border-left:2px solid var(--rule)}`) to show the
  accordion depth.
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
  is added.

Feature-summary table ("What Claude AI does and doesn't," added to both docs, last
top-level section before the closing `</div>`): a plain-language summary of what
Claude does for the student, aimed at students rather than facilitators — student
wording is reused as-is in the Instructor Guide rather than reframed for facilitators.
Structure: a 3-column `<table class="feature-table feature-table--index">` — `#`,
`What Claude does for you`, `How` — inside the section's `<div class="step-body">`, one
row per capability. Keep the row set itself short (five rows currently: builds the
book, reads/describes photos, edits on request, download & share, runs on a token
budget) — this is a summary, not a full feature inventory; do not expand it into a
duplicate of the step-by-step instructions elsewhere in the doc. The fifth row ("Runs
on a token budget") is a lighthearted tie-in to the usage-limit note above (Step 2):
every message costs "fuel" (tokens), and bundling edits into one message is framed as
carpooling — stretches the budget, doesn't eliminate the limit outright (don't claim
batching "avoids" hitting the limit; it lets the student fit in more edits before they
do). This row's text must be reused byte-for-byte identical between both docs, same as
the rest of this table — see the reuse rule two sentences below. The `How` column's
actor must always be Claude/AI,
not the student — describe what Claude does ("Makes the change you ask for," "Generates
a downloadable file"), not an instruction telling the student what to click or type.
Immediately after the table, two required trailing notes: a bolded "Limited by:" line
naming the current platform limitation (iPhone/iPad can't open a local HTML file as a
live page — direct the reader to the PDF option, with a pointer to the step number of
the device/file table below), and a bolded "Doesn't:" line stating plainly that Claude
doesn't generate a perfect trip book (misalignment, truncated text, and similar rough
spots are possible) and that the reader should check it over before sharing. Both of
these trailing lines have been tightened per the Prose economy rule above (e.g.
"Limited by: platform support — ..." rather than "Limited by: Claude AI is limited by
platform support — ...") — keep them this concise in future edits rather than
reintroducing the earlier, more repetitive phrasing.
- CSS: `.feature-table` is a bordered/rounded card matching the doc's other card
  components (`.loop-card`/`.callout`), using the doc's own `--card`/`--rule`/
  `--shadow` tokens for the container. The header row (`.feature-table th`) and first
  column (`#`) now use the shared `--teal-tint`/`--teal-deep` informational color in
  BOTH docs (changed — the Instructor Guide previously used its own `--clay-tint`/
  `--slate-deep` accent here; that read as an "alert" orange/clay tone on tables that
  are purely informational, so it was switched to match the Student Handbook's teal,
  consistent with the amber-vs-teal warning/informational rule above). This applies to
  all three `.feature-table` instances in the Instructor Guide — the editing-action
  table, the device/file download table, and the "What Claude does" table — not just
  the indexed one. The first column (`#`) is bold and colored with `--teal-deep` in
  both docs — but this narrow first-column width (`width:30px`) is
  scoped to a `.feature-table--index` modifier class, not to `.feature-table` itself,
  since two other tables in these docs (the editing-action table and the device/file
  table, below) share the `.feature-table` base class but have full-length first-column
  content and must not be squeezed. Only add `feature-table--index` to a table whose
  first column is a short index like `#`.
- Apply the same row content to both docs; only the intro sentence above the table may
  differ in framing (plain in the Student Handbook, "worth sharing with students" in
  the Instructor Guide).

Device/download table's first column — width fix (both docs): the "Which file to
download" table (Student Handbook, inside Step 3) uses the base `.feature-table`
class plus a second modifier class, `.device-table`, specifically to undo the narrow
30px first-column width that `.feature-table--index` would otherwise impose — that
narrow width is only correct for a short "#" index column, and looked visibly
squeezed against this table's longer "Your device (or the person you're sending it
to)" label. `.device-table td:first-child{width:auto; font-weight:600; color:var(
--ink)}` overrides both the width and the index table's bold-deep-accent styling
with a lighter weight/color suited to a label rather than an index number. Apply the
same `.device-table` modifier (with each doc's own equivalent ink/text token) to the
Instructor Guide's device/file download table if its first column ever needs the same
fix — currently the Instructor Guide's version uses "Viewing device" as a header over
shorter device names ("Android phone," "iPhone or iPad") and has not needed this
fix, but the pattern is available if wording there ever gets longer.

Editing-action table (Step 2 — Put it in order and polish, added to both docs, at the
top of the step's body): a 2-column `<table class="feature-table">` — `What you want to
do` / `What to type/say` — listing the ways a reader can ask Claude to change the book.
"Type/say" (not just "type") in the header, since typing can be hard for some readers
and Claude accepts spoken input too. Keep the row set to five actions: change the
order, remove a photo, add a fact, confirm a guessed/inferred location, fix the
wording — matching content in both docs, phrased as example quotes ("Move the bridge
photo to the front.") rather than abstract instructions. Directly above this table
(Student Handbook — see Known Open Gaps for porting to the Instructor Guide), a
one-line batching tip: "Have more than one small change? Put them all in one message
instead of sending them one at a time — this saves you messages, which matters most
on a free account." Directly below the table, a teal `.example` callout (not `.tip` —
see the amber-vs-teal color rule above) showing one realistic message that combines
three of the table's actions at once (currently: reorder + remove + reword), labeled
"Example — one message, three edits:" in bold, followed by a single line — "Flip
through and check it reads the way you want." — then the nested "Words to help you/
students remember" sub-section (below). Do not add the `feature-table--index`
modifier to this table.

Nested "Words to help you/students remember" (added to both docs, inside Step 2, after
the editing-action table and its batching example): a small h3 sub-section, wrapped in
its own nested `<details>` per the collapsible-sections rule above, giving the reader
six fill-in-the-blank sentence starters for photo captions, plus a line suggesting
they can ask Claude for a question about the photo instead. This is not a separate
top-level step — it lives inside Step 2 because it's about the same "polish the
words" activity, and gets its own sidebar sub-entry (see the nested-index rule above)
rather than a top-level entry.

Device/file download table (Step 3 — Download and share it, added to both docs): the
trip book downloads as an HTML file by default; a PDF is only generated when the reader
explicitly asks Claude for one (typing or saying "Please generate a PDF file"). A
3-column `<table class="feature-table">` (Student Handbook additionally uses the
`.device-table` width-fix modifier — see above) — `Viewing device` / `What file to
download` / `What to do` — lists Android phone, Windows or Mac computer (both: HTML,
default, just click Download), and iPhone or iPad (PDF, ask Claude first, then
download what Claude gives you). Do not add the `feature-table--index` modifier to
this table. Right after the table, keep the standing warning that saving the HTML
page as a PDF via the browser's own print menu does not produce a correct PDF — the
reader must always get the PDF from Claude, never self-convert. The step's intro line
(before the table) states the HTML-default/PDF-on-request behavior in one sentence,
and that same intro line is where the reader is pointed to "check the table below" —
don't duplicate that instruction elsewhere in the step. A separate short note states
that downloading is entirely optional — only for readers who want a copy of their own
or want to send it to family — kept as its own one-line note distinct from the
PDF-warning note, not merged into it.

Send icon (added wherever a step's "Send" action is called out, currently Step 1's
final "Send them" list item in both docs): a small inline SVG matching the real Claude
send button — a solid filled circle with a white up-arrow inside
(`class="send-icon"`, `viewBox="0 0 24 24"`, `<circle cx="12" cy="12" r="11"
fill="#D97757"/>` plus an up-arrow `<path d="M12 17V7M12 7l-4.5 4.5M12 7l4.5
4.5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
fill="none"/>`) — placed directly before the instruction to send/tap it in that list
item. Not a paper-plane glyph; match the actual button shape (circle + up-arrow), not a
generic "send" icon convention. Unlike every other themed icon in these docs, this one
is an intentional exception to the palette-derived-color rule above: it uses a fixed
Claude-brand orange (`fill="#D97757"`) in both docs rather than either doc's
`--amber`/`--clay`/`--brass` tokens, since it represents the actual product's send-
button color, not a doc-specific accent. `.send-icon{vertical-align:-2px}` keeps it
aligned with the surrounding text, matching the pattern already used for `.dl-icon`.
Phrase the surrounding sentence as an instruction to click/tap the icon ("Click the
[icon] icon to send them") rather than folding "send" into a longer compound sentence —
typing/tapping instructions should be as literal and short as possible for this
audience.

Title/dates prompt (Step 1, added to both docs): Claude does not require the reader to
supply a book title and trip dates up front. After the reader sends their first batch
of photos, Claude asks for a title and dates as its own conversational turn — the
reader can answer, or choose to skip, in which case Claude infers the dates from the
photos themselves. Both docs state this as a single step ("Claude will ask for a title
and the trip dates. Answer if you'd like, or choose to skip...") rather than
instructing the reader to supply a title/dates line themselves before sending photos.
Do not reintroduce a pre-filled "Start my book" paste-line pattern (previously used in
the Instructor Guide to front-load the title/dates before Claude could ask) unless the
underlying product behavior changes back to requiring it.

iOS trip-book download guidance — superseded: this used to describe a two-option
tradeoff for iPhone/iPad readers (download as PDF and lose the page-flip animation, or
switch to a Windows/Mac computer to keep it) from when the trip-book tool auto-
generated both an HTML and a PDF file on every download. That's no longer how the tool
behaves — see "Device/file download table" above for the current rule (HTML by
default, PDF only when explicitly requested from Claude). Do not reintroduce the old
PDF-animation-loss/desktop-computer-workaround framing; it describes a product behavior
that no longer exists. This entry is kept only so a future edit doesn't accidentally
resurrect it by pattern-matching an old doc revision.

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

Claude Projects "Project instructions" naming — CORRECTED (was flagged unverified,
now confirmed to differ by platform): the free-text field where a project's own
custom instructions live (separate from Context/Project files above — this field
holds instructions, not attached files) is labeled **Instructions** on desktop and
**Add Instructions** on the phone/tablet app — the labels do NOT match, unlike the
Context/Project files pair above. Both guides now reflect this: refer to "the
instructions box," naming both platform labels (Instructions / Add Instructions) the
first time each doc points the reader to it, rather than a single "Project
instructions" name treated as universal. Apply the same platform split to the **New
Project** button: **New Project** on desktop, **+New project** on phone/tablet (note
the lowercase "project" and leading "+" in the phone/tablet label — this one is a
genuine label difference, not just a styling quirk, so preserve the exact casing when
quoting it). Every mention of either control in both docs — including secondary
references like a "watch for"/troubleshooting bullet pointing the reader back to it —
must use the platform-split wording, not the old single-label phrasing.

Sharing the finished trip book: the student's finished book is a Claude artifact, and
Anthropic's own docs (https://support.claude.com/en/articles/9547008-publish-and-share-artifacts)
describe a **Publish**/**Share** button on artifacts for getting a link. In practice
that route isn't used in either guide for this class — trip books are photo-heavy and
often too large for that publish/share path, so both guides route all sharing through
the **Download** button instead: download the file, then attach it to an email, text,
or messaging app. Do not reintroduce "click Publish"/"ask Claude for a link" wording
unless the file-size limitation is independently reconfirmed to no longer apply.

- Android phones and Windows/Mac computers download the trip book as HTML by default
  and open it normally — no extra steps, so both guides just say to attach it as usual
  there. iPhone/iPad need the PDF instead (see the "Device/file download table" rule
  above) — this is the one case that needs its own row/note.
- If an email won't carry the file (large photo-heavy books), both guides suggest a
  USB drive or a generic cloud-drive link (Google Drive, Dropbox) rather than a
  Claude-specific publish/share link.
- This USB/cloud-drive fallback line lives nested inside Step 3's "To send it to
  family" list item itself (not as a separate standalone paragraph, and not as its own
  section) in both docs. Do not reintroduce a second, separate sharing section; keep
  all sharing guidance inside Step 3.

Repo file references: any time a repo file is named in either guide — whether as an
instruction to open it, a list entry, or a checklist item — wrap the filename in a
link to its canonical URL, using the filename itself as the visible link text (never
show the raw URL as the link text or add it as separate visible text next to the
filename). Two URL patterns are in use, depending on the file:
- `trip_book_spec.html` — the GitHub Pages rendered URL,
  https://xwueng.github.io/trip-book-builder/trip_book_spec.html. This applies
  everywhere the spec is referenced in prose, as well as inside the copy-box literal
  text (see the copy-to-clipboard pattern above and its exception, below) — the spec
  is only ever linked or pasted via this Pages URL now, not the raw GitHub blob `.md`
  link.
- Every other repo file (currently `San_Francisco_demo_book.html`) — the GitHub blob
  URL, https://github.com/xwueng/trip-book-builder/blob/main/<filename>.
Apply this consistently everywhere a repo filename appears in either doc, including
repeated mentions of the same file. Exception: the literal text inside a copy-box (see
the copy-to-clipboard pattern above) stays exact, unstyled, unlinked plain text so it
copies and pastes correctly, even where it contains a URL that names a repo file.

Verification checklist before delivering any edit to either guide:
1. Every heading id (h2 and any nested h3) has exactly one matching sidebar
   data-target, and vice versa (no orphans) — nested ids included.
2. HTML tag counts balance (div/aside/ul/script open vs close) and CSS brace count balances.
3. Rendered check at both a wide (desktop) and narrow (<900px) viewport width to confirm
   the sidebar/toggle behavior looks right before handing off.
4. Font sizes for shared elements (body, h2, h3, notes/tips, TOC, sidebar) still match
   between the two docs, unless a change was explicitly asked for only one — and every
   top-level section in both docs uses h2 (no remaining h1-sized exception anywhere in
   the step content; see "Building the trip book" above).
5. Every mention of a repo filename in either doc is a clickable link to its correct
   canonical URL (GitHub Pages URL for trip_book_spec.html, GitHub blob URL for every
   other repo file — see the Repo file references rule above), with the filename (not
   the raw URL) as the visible link text — except literal copy-box text, which stays
   unlinked.
6. Every `.copy-btn`'s `data-copy-target` matches exactly one `.copy-text` id in the
   same doc, and each doc's copy-to-clipboard `<script>` block is present and unchanged
   unless the copy behavior itself was the point of the edit.
7. Every top-level h2 section and every nested h3 subsection is wrapped in
   `<details class="step-details">` with no `open` attribute (collapsed by default).
   Each heading's id is unchanged and still inside its `<details>`/`<summary>`, nested
   parent/child accordions are preserved where they existed, and the `@media print`
   override still forces collapsed content visible for printing.
8. No "guess"/"guessed" wording remains anywhere describing Claude determining a
   photo's location — "infer"/"inferred" only (see Terminology — infer rule above).
9. Step numbering is consistent in both docs: exactly 3 numbered steps, no orphaned
   references to a step that no longer exists at that number (check heading text,
   sidebar/TOC entries, and any in-body cross-reference like the feature-summary
   table's "Limited by" note).
10. The `feature-table--index` width-modifier class is present only on the numbered
    "What Claude AI does and doesn't" table, not on the editing-action table or the
    device/file download table (both share the base `.feature-table` class but must
    keep their full-width first column); the `.device-table` modifier, where used, is
    present only on the device/file download table.
11. In the Instructor Guide, every top-level h2 section EXCEPT Step 1/2/3 is numbered
    sequentially (1, 2, 3...) in both its heading text and both TOC entries, with no
    gaps or duplicates, and the numbering matches top-to-bottom reading order (see
    "Top-level section numbering" above). The Student Handbook is not held to this
    same numbering requirement unless/until the Known Open Gaps item above is
    resolved.
12. No "phone" wording remains where "device" is called for per the Terminology —
    device rule above (upload/troubleshooting contexts), and no unintended
    "device"-ification has happened where "phone" is genuinely correct (account
    phone-number verification, the Ctrl+click-vs-tap note, the device/file table's
    "Android phone" row, the Student devices bullet).
13. In BOTH docs, amber (`.tip`) is used only for genuine warnings, and any neutral
    illustrative/informational content uses the teal `.example` class instead — no
    such content sits inside a `.tip` box, and the Instructor Guide's old catch-all
    `.note` class does not reappear (see the amber-vs-teal color rule above).

Edits: given in plain language — apply to both docs' matching structure/CSS tokens
(not just one) unless a Known Open Gap above says otherwise, regenerate, and re-run
the verification checklist above before delivering.
