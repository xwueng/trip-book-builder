TRIP BOOK RULES
(trip_book_spec.md — student trip book + PDF export. Separate from
instructions_spec.md, which covers Instructor Guide / Student Handbook. Never
cross-edit.)
Rule IDs (F/D/C/T/L/M/N/E/S/P) are stable references — cite by ID.
File must carry a last-updated stamp.
Last updated: 2026-10-17 19:34 UTC

## Format

F1. Every build generates the self-contained HTML book (phone-friendly, real
 page-turn flip) by default. The static PDF export (P1–P4) of the same
 book is generated only when the student/user explicitly asks for a
 PDF (including picking "Get a PDF" at N7/S2) — do not generate it
 automatically as part of a normal build.
F2. No music unless asked.

## Visual Design

D1. Colors: paper `#F4EFE4` (full-viewport bg, `html`/`body`, outside L5's
 scaled unit), card `#FBF8F1` (page surface), teal `#2F6F6A`
 (headings/kickers/hints), amber `#C68A3D`, ink `#3A2F28` (titles/body).
 Secondary text (dates, route line, closing note, nav counter): ink at
 .55 opacity (dates) or .72 opacity (rest).
D2. Serif (Palatino/Book Antiqua/Georgia) for title + place names;
 sans-serif for body text.
D3. Cover: bordered frame; kicker "A Trip Book"; serif title; wavy divider
 with dot each end; dates only if given (M1), never a placeholder;
 "Tap Next to begin"; postmark stamp top-right (dashed border, inner
 frame, circle motif, landscape silhouette, short label). Kicker+title+
 divider+dates+hint centered as one block; omitted dates leave no gap.
 Postmark is inline SVG only — never an `<img>` or other external/
 generated image reference (F1's self-containment covers the whole
 file, but this is the one element most likely to slip through as an
 image tag instead). Inset it at least 20px from the card's padded
 edge, not flush against it. The label text must fit the box regardless
 of how long the destination name is: set the `<text>` element's
 `textLength` to the box's available width and
 `lengthAdjust="spacingAndGlyphs"`, so it compresses to fit instead of
 overflowing — this is decorative chrome with no other layout-safety
 rule (D7/L-series) covering it, so the guardrail has to be stated here
 explicitly rather than assumed.
D4. Closing: same frame; "The End"; map (M5–M9) above route line of places
 joined by "·" when M8 includes one; closing line.
D5. Fact callout: bg = amber at 14% opacity (`rgba(198,138,61,.14)`), left
 amber border, sentence only, no label.
D6. Nav buttons: fixed-size, teal, 3D-press style; counter centered between.
D7. Photos never cropped. Frame = photo's real `aspect-ratio:w/h`, capped
 `max-height:50%` of page. `object-fit:contain` fallback; letterbox bg =
 rule color `#C9BFA8`, never black/transparent.
D8. Photo is dominant element, sized by its own ratio up to 50% page height.
 Page content stacks top-down; leftover space at bottom only, never
 centered/spread.

## Book Structure

C1. Order: cover → one page per photo (send order) → closing.
C2. Closing includes map only if M5–M9 met.
C3. Each photo page: photo, place, date, note, fact.
C4. No "Stop 1/2/3" labels on pages (M8's numbered map markers are separate).

## Page-Turn Mechanics

T1. Hinge-and-curl motion, never flat rotate.
T2. `transform-origin: left center` (0% 50%) on every page — the vertical
 midpoint of the left edge, i.e. the book's spine axis. Not `left top` or
 `left bottom`: either pivots the page from a corner instead of
 turning along the spine.
T3. Same hinge geometry both directions; verify both.
T4. Z-index: turned pages = `0..N`; unturned = `1000 - index`.
T5. Actively-turning leaf: `z-index:9999` during transition; settle to T4
 range after.
T6. Verify flip at midpoint and near end, not just first pages.
T7. Only current front leaf + (mid-transition) its neighbor are
 `visibility:visible`; all other leaves `visibility:hidden`.

## Layout & Rendering

L1. Center book + nav bar horizontally and vertically.
L2. Nav bar in normal flow directly below book, inside the same
 width-constrained wrapper — never fixed to viewport.
L3. Note: `flex:0 1 auto; min-height:0; overflow-y:auto` — sizes to
 content, shrinks/scrolls if too long, never grows to fill space.
L4. Fact: fixed top margin (12px HTML / 5mm PDF), never `margin-top:auto`.
L5. Scale-to-fit. This mechanism (L1/L2/L5 together) has regressed more
 than any other part of this spec even with full prose explanations
 present — use this reference implementation verbatim rather than
 re-deriving it from a description:

```css
body{ display:flex; align-items:center; justify-content:center; }
.stage{ width:100%; height:100%; display:flex;
        align-items:center; justify-content:center; }
.book-wrap{ width:440px; display:flex; flex-direction:column;
            transform-origin:center center; will-change:transform; }
.book{ position:relative; width:100%; height:600px; }
.navbar{ display:flex; align-items:center; justify-content:space-between;
         margin-top:14px; padding:10px 14px calc(10px + env(safe-area-inset-bottom));
         border-radius:12px; }
```

```js
var bookWrap = document.querySelector('.book-wrap');
function fitToViewport(){
  var MARGIN = 20;
  var vw = document.documentElement.clientWidth || window.innerWidth;
  var vh = document.documentElement.clientHeight || window.innerHeight;
  if (!vw || !vh) return;
  bookWrap.style.transform = 'none';
  var natural = bookWrap.getBoundingClientRect();
  if (!natural.width || !natural.height) return;
  var availW = vw - MARGIN * 2;
  var availH = vh - MARGIN * 2;
  var scale = Math.min(availW / natural.width, availH / natural.height);
  scale = Math.min(scale, 2.2);
  scale = Math.max(scale, 0.4);
  bookWrap.style.transform = 'scale(' + scale + ')';
}
window.addEventListener('resize', fitToViewport);
window.addEventListener('orientationchange', fitToViewport);
fitToViewport();
window.addEventListener('load', fitToViewport);
setTimeout(fitToViewport, 100);
setTimeout(fitToViewport, 400);
```

 Non-negotiable properties of this mechanism, whether copied verbatim or
 adapted: nav bar lives inside `.book-wrap` so it's part of the single
 measured/scaled unit (L2) — a nav bar outside this wrapper, or scaled
 independently, is the single most common way this regresses. The scale
 calculation must bail out (not clamp to the floor) on a zero/invalid
 measurement. Paper background stays outside this unit, on `body`.
 `transform-origin` must be `center center` to match L1's centering.

## Data Handling — Dates

M1. Show date only if given; else omit, no placeholder. "Given" means typed
 by the student or stored in the photo's own date info.
M2. Missing metadata is normal, not an error.

## Data Handling — Places & Facts

M3. Every photo's place is exactly one state:
 - State 1, Confirmed — state plainly.
 - State 2, Guessed — write a fact, flag with "confirm venue" badge.
 - State 3, N/A — object/non-place photo; no location field, no badge,
   no guess.
M4. State 2 → fact + badge. State 3 → no claim, no badge. Confirmed/guessed/
 N-A state drives both the photo page's badge and the map marker (M8)
 from the same source — keep them in sync across edits.

## Data Handling — Map

M5. Include map on closing page if ≥1 photo is state 1 or 2. Plot all state
 1+2 stops together. State 3 never appears on the map. Collapse
 same-place photos to one marker. Omit map only if every photo is
 state 3. Re-evaluate every rebuild.
M6. Multi-region/country trips: offer a choice — single overview vs.
 per-region maps.
M7. Sourcing: real geographic data only — fetch actual coastline/boundary
 geometry and real lat/long per landmark (e.g. Natural Earth via
 raw.githubusercontent.com). Latitude-corrected equirectangular
 projection for land and markers alike. No live map/geocoding API at
 runtime — bake into static SVG at build time. Never reuse a
 cached/past map as a shortcut.
M8. Drawing: cream/white land, blue water, green park patches, gray roads
 with white centerlines, illustrative touches as fitting. Markers:
 numbered colored circles (not teardrop pins), white number, distinct
 color per stop (cycle palette if more stops than colors). No legend
 box — colored text label beside each marker instead. Guessed stops get
 a dashed ring added to the marker. Compass always included. Scale bar
 at city/regional scale (optional at country scale). Route line only
 when it adds clarity — omit for country-scale or mixed-mode travel.
M9. Layout: offset colliding markers/labels, connect back to true
 coordinate with a thin leader line in the marker's color. Mandatory
 geometric overlap check (e.g. shapely) across every placed element
 before presenting — zero unexpected overlaps, everything in bounds.
 Re-verify after any fix.

## Notes & Conversation Flow

*(Every student-facing prompt below is in a code block so it renders with
its exact numbers. Show it to the student word for word, numbers included,
as plain chat text — not inside a code block. Every menu starts at 1, even
when it follows another menu in the same chat. Never renumber, never
continue from an earlier list.)*

N1. Ask for title/dates first if missing, with exactly this prompt:

```
What's the book's title and the trip dates?
1. Skip title (Let AI make one)
2. Skip dates (Let AI use the photo dates)
3. Skip both
```

 The student types the title/dates as free text, or picks a number.
 Skip title → make a title from the photos. Skip dates → use the dates
 stored in the photos (M1); if none, show no dates. Skip both → do both.
N2. Walk through each photo, ask for the person's words, with these options:

```
1. Skip (Let AI write it)
2. Skip all photos (Let AI write them all)
```

 1 → N3 for that photo. 2 → N3 for every remaining photo, then build (N4).
N3. If skipped/uncaptioned: write the note from the photo, name the place,
 add the fact.
N4. Build only after asking. Exception: if told to skip ahead, build
 immediately — use N3 for uncaptioned photos, guess a title if missing.
N5. Talk to the user in simple, short, direct sentences. No wordiness, no
 filler, no long explanations. Applies to every message in the chat —
 not to the book's own content (notes/facts follow C3/N3).
N6. Whenever the user has a choice to make, give the options as a numbered
 list so they can reply with just a number. Applies to every choice
 point, including M6's map choice.
 - Every list starts at 1 and counts up by 1 (1, 2, 3…). Never continue
   numbering from an earlier list.
 - A reply that is just a number (e.g. "2", "2.", "#2", "two", "option 2")
   always picks that option from the most recent list. Never treat it as
   a title, caption, date, or free text. If the number isn't on that
   list, say: "Please pick a number from the list." and show the list
   again.
 - Say once, in the first reply after the photos arrive: "When I show a
   numbered list, type or say a number to pick an option. You can also
   type your own words." Never repeat it under later lists.
 - Option labels say "AI," never "I" or "me" (e.g. "Let AI write it"),
   so the student knows who does what.
 - Bare numbered lists (1, 2, 3) are only for options to pick from.
   Instructions the student must follow in order use "Step 1:", "Step 2:"
   labels, introduced by a line saying what the steps are for.
N7. Sharing step — last step of every build.
 a. Show the book and ask:

```
Does it look good?
1. Yes
2. Change something
```

 On 2, say exactly: "What do you want to change?" Apply the change
 (E1), say "Done.", show the book again and repeat this question.
 b. On 1, check its size (S2) first, then ask:
 - 16MB or less:

```
How do you want to share it?
1. Get a PDF (free account)
2. Share a public link (paid account; anyone with the link can see your book)
3. Not now
```

 - Over 16MB:

```
Your book is too big (x MB) for a link.
1. Get a PDF
2. Not now
```

 Run only the path they pick. Nothing is published unless the student
 picks "Share a public link" or asks for a link. Claude can't see the
 student's plan, so the student picks; the "(free account)"/"(paid
 account)" labels guide them. If publishing fails
 or isn't available on the student's account (e.g. free plan), use the
 S7 fallback. Re-offer after a rebuild only if asked.

## Edits

E1. Plain-language request → apply and regenerate.

## Sharing as a Link

S1. Make a link only when the student picks it at N7 or asks for one. The
 N7 option carries the "anyone with the link" warning — no second
 confirm. Claude handles photo sizes as usual — no extra shrinking for
 the link.
S2. Size check — before every publish, including updates, check the built
 book's size as-is.
 - 16MB or less → publish.
 - Over 16MB → don't publish. Say: "Your book is now too big (x MB) for
   the link." (x = size in MB, whole number). If a link already exists,
   add: "The link still shows the old book, without your new photos."
   Then offer:

```
1. Get a PDF
2. Not now
```

S3. Publish the HTML book as a private Claude artifact. It is saved in the
 student's artifacts list, with a Share button. Don't paste the web
 address. Say exactly:

```
Your book is ready. To send the link, follow these 3 steps:
Step 1: Tap the Share button to turn on book sharing.
Step 2: Copy the link.
Step 3: Paste it into an email or text.
```

 Claude cannot turn on sharing for the student — only the Share button
 does.
S4. If the student asks for the web address, paste it and add: "Turn on
 sharing first, or family can't open it."
S5. After an edit (E1), run S2, then republish to the same artifact so the
 link stays the same. Say: "Updated. Same link." Never create a second
 link for the same book unless asked.
S6. The link opens in any browser, including iPhone/iPad, with the
 page-turn working. Deleting the artifact stops the link for everyone.
S7. Link not available. Public links may not be available on free
 accounts. If publishing fails or isn't offered on the student's
 account, don't retry and don't explain plans. Say:

```
A public link isn't available on your account.
1. Get a PDF
2. Not now
```

## PDF Generation

*(Generated only on explicit request — see F1. HTML remains the default,
token-cheaper build output; produce the PDF export below only when the
student/user asks for one, then follow P1–P4.)*

P1. Static export: one flat page per book page, same order/content/design,
 no animation. D7 applies (photos never cropped).
P2. Page size: 127×190.5mm.
P3. Render each page as a fixed-pixel image (e.g. 480×720px = 127×190.5mm
 @96dpi) via screenshot, assemble into PDF with each image full-bleed at
 that exact physical page size. Don't use a PDF tool's native
 paged-HTML rendering (DPI-mismatch/centering risk).
P4. Fact uses the same fixed margin as HTML (L4).
