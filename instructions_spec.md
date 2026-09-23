GUIDE BOOK RULES
(instructions for Claude to build/maintain Instructor_Guide.html and
Student_Handbook.html. Separate from trip_book_spec.md, which governs the
student's own trip book.)
Last updated: 2026-09-23 21:23 UTC

## Purpose
Keep both docs structurally identical (sidebar, ids, spacing, type scale) but
visually/verbally distinct. Wording, section lists, and top-level ordering may
differ between docs.

## Known open gaps
- Instructor Guide numbers its top-level sections (1–7); Student Handbook does not
yet. Apply same numbering to Student Handbook next time its structure is touched.
- Student Handbook Step 2 has a plain-text (unboxed) “one message, three edits”
example the Instructor Guide's Step 2 lacks. Port it (facilitator voice) next time that section is touched.

## Format & hosting
- One self-contained HTML file per doc, no build step, no external deps.
- HTML is primary (live sidebar); each doc's own "Print/Save as PDF" button is the
PDF fallback.
- Every Student Handbook revision ships TWO files: `Student_Handbook.html` and a
regenerated `Student_Handbook.pdf` built from that same HTML (headless Chromium, print media, `preferCSSPageSize`, `printBackground`) — never deliver one without
the other. Instructor Guide is HTML only; no PDF.
- Student Handbook print: `@page{size:letter; margin:0.6in 0.6in 0.75in;
@bottom-center{content:"Page " counter(page) " of " counter(pages)}}` (10pt, #555).
Print keep-togethers: `.loop-card`, `.tip`, `.example`, `.toc`, `.copy-box`, `.quote-list li`, table rows; headings/summaries `break-after:avoid`. Don't
put `page-break-inside:avoid` on whole `ul`/`ol` (leaves half-blank pages).
- Student Handbook print matches screen styling: no print-only body font-size or
cover shadow overrides; cover `h1` pinned to 42px in print (its `clamp(…5vw…)`
would otherwise shrink on the narrower page).
- Hosted via GitHub Pages (Google Drive won't render HTML live). `.md` specs ship
alongside, rendered natively by GitHub — no Pages setup needed for them.

## Shared type scale & spacing (must match exactly between docs)
Body 18px/1.62 line-height · h2 24px · h3 19px · notes/tips 16px · on-page TOC 16px ·
sidebar title 11.5px · sidebar links 14.5px · nested sidebar links 13px.
Spacing: h2 margin 26px top/6px bottom · h3 margin 16px top · paragraphs/list items
5–8px vertical margin · notes/tips/blockquotes/loop-cards 6–10px vertical margin ·
masthead padding ~22–32px. No h1-sized heading exception anywhere (only true `<h1>`
left is the cover title) — every top-level section uses h2.
No `<hr>` dividers in either doc — collapsed `<details>` borders are the only
section separator.

## Palette
- Structural (background/header/sidebar/badges) stays distinct per doc: Instructor
Guide = slate/slate-deep + brass + clay; Student Handbook = teal/teal-deep + amber.
- `.tip` (amber) / `.example` (teal) callout colors are SHARED across both docs,
layered into the Instructor Guide's `:root` alongside its own tokens.
- `.tip` = genuine warnings only. `.example` = neutral/informational content.
Never put neutral content in `.tip`. No third ad-hoc callout color.
- Exception: the device-setup list (below) stays an unboxed plain `<ul>` — do not
wrap it in `.tip`/`.example` despite being informational (avoids callout overload).
- Student Handbook text color (Student Handbook only): all regular body text and
`.tip`/`.example` box text is solid black `#000000` (`body`, `strong`, `.tip`, `.example`, cover subtitle, copy-box text, quote-list). Headings, sidebar,
TOC, table header row and table first-column labels keep their palette colors.
Box backgrounds/borders unchanged.
- Student Handbook page background (Student Handbook only): `--paper` is pure
white `#FFFFFF` for readability on a large projector screen. Cards, tables and
boxes keep their borders/tints for separation.
- Neutral boxed text (Student Handbook only): `.loop-card` and `.quote-list li`
use a barely-tinted `--box:#F4F6F5` background; the `.copy-box` inside a
loop-card stays white so it stands out. `.tip`/`.example` unchanged.
- Callout-fatigue exceptions (Student Handbook only): these stay plain `<p>`,
never boxed — the tap-to-expand orientation note; the two sign-in notes (see
Sign-up choice); the “Like what Claude did?” thumbs-up/down line; the “Example —
one message, three edits” sample.
- Instructor Guide's old `.note` class is retired — do not reintroduce; every prior
`.note` is now `.tip` or `.example`.
- `.send-icon` uses fixed Claude-brand orange (`#D97757`) in both docs — the one
icon exempt from doc-specific palette tokens.

## Structure & sidebar
- masthead → inline on-page TOC (print-only, hidden on screen) → top-level h2
sections, each a stable kebab-case id matching one sidebar `data-target` 1:1.
- Left sidebar: fixed panel, live active-section highlight via
IntersectionObserver, closes on mobile after click. Below 900px it collapses
behind a ☰ toggle with backdrop; above 900px always visible.
- Nested h3 subsections (e.g. Steps' sub-parts) get their own id + a
`<ul class="side-toc-sub">` nested in the sidebar `<li>`. Never given top-level
numbering.
- Sidebar/TOC entry text always mirrors the heading's numbering exactly; long
headings may be shortened consistently between side panel and on-page TOC.

## Collapsible sections
- Every top-level h2 and nested h3 is wrapped in
`<details class="step-details"><summary><svg class="toggle-icon">…<h2 id=…>…
</summary><div class="step-body">…</div></details>`, collapsed by default.
- Icon: rounded square + plus (one `<rect>`, two `<line>`s); the vertical line has
class `toggle-icon-v`, hidden via `details[open] > summary .toggle-icon-v` to turn
"+" into "−". No chevron/rotate icon.
- Parents whose content is itself numbered sub-steps nest child `<details>` inside
their own `.step-body` (two-level accordion). Nested `<details>` get a left
border+indent to show depth.
- No JS needed (native `<details>`); only the copy-to-clipboard and scrollspy
scripts exist.
- `@media print` must also target `details.step-details::details-content{content-visibility:visible; display:block; height:auto}` (all `!important`) — current Chrome hides closed-details content there, and the child-selector override alone prints only headings.
- `@media print` forces all collapsed content visible and hides the toggle icon —
print/PDF always shows everything expanded.
- One-line orientation note near the top of each doc explains the tap-to-expand
behavior.

## Numbering rules
- Steps: exactly 3 numbered steps (1 Start your book & add photos, 2 Put it in
order and polish, 3 Download and share it). No separate "add words" step — that
lives inside Step 2 as the nested "Words to help you/students remember"
sub-section. Step headings read "Step 2 — …", never prefixed by top-level
numbering. Adding/removing a step means renumbering every subsequent step, its id,
sidebar entries, and any cross-reference (e.g. feature table's "Limited by" note).
- Instructor Guide top-level sections (all except Steps) are numbered 1–7 in both
heading text and both TOC copies, matching reading order:
  1. Class size and student devices
  2. Before the first class — note to students
  3. Before the first class — facilitator prep list
  4. Setting up each student's project (nested Part 1–3)
  5. Building the trip book — the three steps (nested Step 1/2/3; Step 2 nests
     "Words to help students remember")
  6. Watch for
  7. What Claude AI does and doesn't
  Student Handbook is NOT held to this numbering yet (see Known open gaps).

## Terminology
- "Infer"/"inferred," never "guess"/"guessed," for Claude determining a photo's
location without confirmed metadata — applies everywhere this is mentioned in
both docs.
- "Device," not "phone," when describing where a student uploads photos from or
troubleshoots an upload. Exceptions where "phone" stays literal: account
phone-verification, the Ctrl+click-vs-tap contrast, the device/file table's
"Android phone" row, and the device-setup list (below).

## Device-setup list (both docs)
Replaces the old one-line device description. One intro sentence + a plain `<ul>`
(no callout box), same three items verbatim in both docs:
- **Phone + laptop** — <strong>recommended</strong> (bold this word specifically):
read the handbook on one screen, work in Claude on the other.
- **Phone + tablet** — a solid middle ground/alternative.
- **Phone only** — works, but the small screen makes it harder to read the
handbook and work in Claude at once.

Per doc:
- **Student Handbook**, "What to bring" section — replaces the old paragraph
outright. Intro: "Choose one of these three setups — a phone is required either
way (needed to receive a verification code if you sign up with a non-Google
email):"
- **Instructor Guide**, "Class size and student devices" section — sits below the
two remaining bullets (Class size, Class length; the old "Student devices" bullet
is gone) and above the existing "The setup steps" `.example` box. Facilitator
voice: "The student chooses one of these three setups — a phone is required
either way (needed to receive a verification code if signing up with a
non-Google email):"

Do not box this list, and don't reintroduce the retired "Student devices" bullet
or the old single-paragraph description.

## Class size and student devices section (Instructor Guide §1)
Two bullets only — Class size (6–10 students) and Class length (90 min, no
"short break" qualifier) — then the device-setup list above. No "Room" bullet.
The existing "setup steps" note (budget 10–15 min/student, phone verification is
the common snag) stays directly below, unchanged.

## Sign-up choice box (Student Handbook only)
"Create your account" splits Google-vs-email into two plain unboxed `<p>`s —
Google first, then non-Google — each a bold label (“Sign in with Google email” /
“Sign in with non Google email”), `<br>`, then the text. No `.example`/`.tip`.
Instructor Guide keeps its own condensed single-sentence + `.note`→now-`.tip`/
`.example` version; do not force the two-box layout into it.

## Extra section (Student Handbook only)
Last top-level h2 section, after "What Claude AI does and doesn't" and directly
before the build timestamp. Own id (`extra`), own sidebar + on-page TOC entry,
wrapped in a collapsed `<details class="step-details">` like every other
top-level section. Heading: "Extra — try it again on something new."
- One intro paragraph (no callout box) telling the reader they already know the
process — send photos, describe them in plain words, download — and that they
can either start a new chat in the same Project or start a whole new Project to
try a different kind of book. No callout styling; plain `<p>`.
- A plain `<ul>` (not `.tip`/`.example`) with exactly four ideas, each a bold
label + one short sentence: Recipe book, Pet memory book, Garden or craft
journal, Short life-story page.
- Instructor Guide has no counterpart section — this is a Student-only
enrichment idea, not a Known open gap to reconcile; do not port it to the
Instructor Guide unless separately asked.

## Objective sentence
Both docs' opening paragraph leads with the bolded sentence "The objective of this
lab is to show where AI stands today." — never reordered, trimmed, or preceded by
other framing content.

## Prose economy (standing rule for all edits)
Prefer short, plain phrasing: cut throat-clearing openers, don't restate a word
already used in the same sentence, prefer one clean sentence over two that repeat
each other.

## Repo file links
Any repo filename mentioned in either doc is a link, filename as visible text
(never the raw URL):
- `trip_book_spec.html` → GitHub Pages URL
(`https://xwueng.github.io/trip-book-builder/trip_book_spec.html`).
- Every other file (e.g. `San_Francisco_demo_book.html`) → GitHub blob URL
(`https://github.com/xwueng/trip-book-builder/blob/main/`).
Exception: literal copy-box text stays unlinked plain text even if it contains a
URL.

## Copy-to-clipboard pattern
For any exact string the reader must paste elsewhere (currently the one
Project-instructions line):
- Markup: `.copy-box` > `code.copy-text#UNIQUE-ID` + `button.copy-btn[data-copy-target=UNIQUE-ID]` (SVG icon + "Copy" label).
- `.copy-text` content is the literal string — never linked/reformatted.
- JS: one delegated click handler per doc, `navigator.clipboard.writeText` with a
`execCommand('copy')` fallback; button label flips to "Copied!" (~1.8s) via
`.copied` class.
- Always pair with an explicit paste-destination step — never leave it implied.

## Feature tables
Three `<table class="feature-table">` instances exist:
1. **Editing-action table** (Step 2 top) — 2 cols, "What you want to do" / "What
to type/say", 5 fixed rows (reorder, remove, add fact, confirm inferred location,
fix wording), phrased as example quotes. Batching tip directly above (Student
Handbook only — port to Instructor Guide per Known open gaps). Unboxed
"one message, three edits" sample directly below as a plain `<p>` with bold
"Example — one message, three edits:" label, then the nested "Words to
help…" sub-section. No `feature-table--index` modifier.
2. **Device/file download table** (Step 3) — 3 cols, "Viewing device" / "What
file to download" / "What to do": Android phone & Windows/Mac → HTML by default;
iPhone/iPad → PDF on request only. Student Handbook adds `.device-table` modifier
to un-squeeze its longer first-column label
(`.device-table td:first-child{width:auto; font-weight:600; color:var(--ink)}`);
Instructor Guide hasn't needed it yet but the modifier is available. No
`feature-table--index`. Directly after: the standing warning that browser
"print-to-PDF" doesn't work — always get the PDF from Claude. Downloading itself
is optional — noted separately from the PDF warning.
3. **Feature-summary table** ("What Claude AI does and doesn't," last section) —
3 cols with `feature-table--index` modifier, `#` / `What Claude does for you` /
`How`. Exactly 5 rows (builds book, reads/describes photos, edits on request,
download & share, runs on a token budget — the last a "tokens as fuel,
batching = carpooling" bit, reused byte-for-byte in both docs). "How" column's
actor is always Claude, never the student. Followed by two bolded trailing
lines: "Limited by:" (iPhone/iPad can't open local HTML live — points to the PDF
row) and "Doesn't:" (imperfect output — check before sharing).
All three tables have vertical column borders matching the row borders
(`1px solid var(--rule)` on `th+th`/`td+td`) — Student Handbook only for now.
Column headers (`th`) are explicitly bold: `font-weight:800`, 15px, uppercase
(13.5px, no letter-spacing below 600px so the 3-column table fits a phone)
(Student Handbook only for now).
All three tables: header row + first column use shared `--teal-tint`/`--teal-deep`
in both docs (not Instructor Guide's old clay/slate accent).

## Send icon
Wherever a step calls out tapping Send (currently Step 1's last item): inline SVG
matching the real Claude button — filled circle (`fill="#D97757"`) + white
up-arrow, not a paper-plane. `.send-icon{vertical-align:-2px}`. Phrase as "Click
the [icon] icon to send them."

## Title/dates prompt (Step 1)
Claude asks for title/trip dates itself after the first photo batch — reader may
skip (Claude infers dates from photos). Don't reintroduce a pre-filled
"Start my book" paste-line requiring title/dates up front.

## Sharing the finished book
Route all sharing through **Download**, not artifact Publish/Share (books are
often too large for that path). Android/Windows/Mac → HTML, attach as usual.
iPhone/iPad → PDF (see device/file table). If email can't carry the file: suggest
USB or a generic cloud-drive link (Google Drive/Dropbox) — this fallback lives
nested inside Step 3's "send to family" item, not as its own section.

## Claude Projects platform-specific labels
Name both platform labels wherever mentioned, since they differ:
- **Context** (desktop) / **Project files** (mobile) — where files attach.
- **Instructions** (desktop) / **Add Instructions** (mobile) — the custom-instructions field ("the instructions box").
- **New Project** (desktop) / **+New project** (mobile, exact casing) — the
create-project button.

## Students work independently
Neither guide implies a helper/aide sits one-on-one with a student. Instructor
role stays limited to running the class (demo, timing, circulating) — students
create their own account/Project and act on their own steps.

## Build timestamp
Last line of `.sheet`, after the final section's `</details>`, before `.sheet`'s
closing `</div>` — no heading, id, or sidebar entry.
`.print-timestamp{ text-align:right; font-size:9px; color:#888888; margin:20px 0 0; }`
Format: `Last updated: YYYY-MM-DD HH:MM UTC`. Update whenever that doc's content
changes; the two docs' dates don't need to match each other.

## Do not reintroduce (superseded patterns)
- The three now-removed Instructor Guide sections "The goal," "How it works,"
"What you'll use," or their ids.
- A combined "Facilitator checklist" parent section (now two standalone top-level
sections: prep list + Watch for).
- The Project-instructions-paste-line prep-checklist item (redundant with the
copy-box).
- The "Room" bullet, the old "Step length" label, or the "short break" qualifier.
- The retired "Student devices" bullet or old device paragraph (see device-setup
list above).
- The special-cased `<h1>` step-section heading or its CSS.
- The iOS PDF-vs-animation tradeoff framing (product no longer works that way).
- The old single-label "Project instructions" phrasing (must be platform-split).
- "Click Publish"/"ask Claude for a link" sharing language.
- The Instructor Guide's old catch-all `.note` class.
- `<hr>` section dividers.
- Boxing the device-setup list in `.tip`/`.example`.

## Verification checklist (run before delivering any edit)
1. Every h2/h3 id ↔ exactly one sidebar `data-target`, no orphans.
2. HTML tags and CSS braces balance.
3. Rendered check at desktop and <900px widths (sidebar/toggle behavior).
4. Shared font sizes still match between docs (unless a one-doc change was
requested); no h1-sized exception remains.
5. Every repo filename is a correctly-linked visible-text link (except unlinked
copy-box text).
6. Every `.copy-btn` `data-copy-target` matches one `.copy-text` id; copy `<script>` intact.
7. Every top-level/nested section is a collapsed `<details class="step-details">`
with id preserved; print override still forces content visible.
8. No "guess"/"guessed" wording remains (infer/inferred only).
9. Exactly 3 numbered steps, no orphaned step-number references.
10. `feature-table--index` only on the feature-summary table; `.device-table`
only on the device/file table.
11. Instructor Guide's non-Step sections numbered 1–7 with no gaps, matching
reading order (Student Handbook exempt for now).
12. No "phone" where "device" is required, and no over-genericized "device" where
"phone" is correct (verification, Ctrl+click note, "Android phone" row,
device-setup list).
13. `.tip` used only for warnings, `.example` only for neutral content, no `.note`
anywhere — EXCEPT the device-setup list and the Student Handbook callout-fatigue
exceptions (Palette), which stay unboxed by design.
14. Exactly one `.print-timestamp` line per doc, positioned correctly, outside any
`<details>`, no sidebar entry.
15. Device-setup list: exactly 3 items, same order, identical wording between
docs (aside from the direct-address vs. facilitator-voice intro line), with
"recommended" bolded only in the "Phone + laptop" item.
16. Student Handbook only: `Student_Handbook.pdf` regenerated from the final HTML
— every section expanded, "Page X of Y" on every page, cover/body styling
matches screen, no half-blank pages from stranded headings. No Instructor Guide PDF.

Edits are given in plain language — apply to both docs unless a Known Open Gap
says otherwise, regenerate, then re-run this checklist before delivering.
