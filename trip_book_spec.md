# TRIP BOOK SPEC
Claude-only file (not user-facing) — build rules for a per-Project flip-book from photos. Distinct from instructions_spec.md (Instructor_Guide.html/Student_Handbook.html).

Output: 1 self-contained HTML, phone-friendly, real page-turn flip. No music unless asked. Not travel-only — any titled photo collection works (see Topic scope).

## Design
Cream bg+vignette; cream-white cards; teal headings; amber accent; dark ink. Serif (Palatino/Book Antiqua/Georgia) = title+place; sans-serif = body.
Cover/closing = double frame: outer amber border + inset gap + inner rule-color border (padding lives in inner). Same frame both pages.
Cover: kicker (teal, tracked caps — "A Trip Book" or topic-matched, e.g. "A Pet Book"; see Topic scope) → serif title (dark ink, NOT teal — teal reserved for accents) → SVG wave divider (teal path + amber dot each end; not bullet/hr) → dates line (muted, only if given, else omit line) → teal "Tap Next to begin" hint → postmark stamp top-right: dashed-amber outer circle, solid-teal inner circle, ringed-sun glyph, twin-peak mountain+ground line, place/subject name in tracked serif caps at bottom. Compute font-size to fit inner chord width at that y — don't assume; long names need smaller size/tracking.
Closing: same frame, no stamp; "The End" serif; route line of places joined by "·"; short teal closing line.
Fact callout: tinted box, left amber border, sentence only (no "Fact:" label), `margin-top:4px` fixed (never `auto`) — zero gap under note.
Nav bar: Back/Next OUTSIDE book, fixed to viewport bottom in page bg, below card (not overlapping). Reserve space in book's CSS + JS sizing calc; measure actual runtime gap at runtime, don't hardcode navbar height. Fixed-size chunky 3D-press buttons; counter centered between them (not stretched); counter blank on cover only. Counter lives in the HTML always — PDF capture step hides it via injected capture-only CSS, never remove from markup.

## Structure
cover → 1 page/photo (send order) → closing (+map iff Map rule yields ≥1 stop). Photo page: photo, place, date, note, fact-callout directly under note. No "Stop N" labels.

## Flip mechanic
- Hinge-curl, never flat rotate/spin. `transform-origin=left` ALWAYS, cover→closing. Right-anchor looks fine flipping forward, breaks flipping backward — test Back explicitly.
- z-index: turned=leaf index (low); unturned=LARGE_CONST−index (high). Never `total−index` for unturned — collides with turned range past a few pages, later pages flip from wrong side. Actively-turning leaf: z=9999 for full transition duration, drop to settled value only after transition-end timeout (not at flip-start).
- `maxTurn = leafCount−1` (last leaf never flips fwd). Guard `next()`/Next-disabled against `maxTurn`, not leaf count. Verify at midpoint + end: extra Next click at closing = no-op/disabled; extra Back click at cover = same.
- CSS transition 200–250ms (not 600+). Longer duration widens the ~90° edge-on near-invisible window → risks blank-frame capture by a fixed-timer external screenshotter. Verify settle time (incl. edge-on dip) <500ms via sampled leaf bbox width.
- Cross-browser: `-webkit-` prefix on perspective/transform-style/backface-visibility/transform, in CSS AND anywhere JS sets `.style.transform`. Safari/iOS needs prefix; Chromium doesn't (Chromium-only testing hides this bug). Also: `backface-visibility:hidden` alone is unreliable in ≥1 embedded renderer (flipped content bleeds through beside book). Pair with CSS-only fallback: toggle plain `visibility` on front `.content` AND on leaf's `::after` via the same `.flipped` class, `transition-delay` = half flip duration set on the BASE (non-flipped) rule too, so it's symmetric both directions. Verify: force-break backface-visibility, confirm no bleed regardless.

## Sizing
- Book fills whichever of vw/vh is the tighter constraint (not a fixed px cap). Verify at ≥2 viewport sizes — gap invisible at phone width only.
- Don't rely on CSS `aspect-ratio` alone — some embedded previews mis-resolve it combined w/ vh/vw. JS fallback: measure stage's actual rendered px on load+resize, set explicit inline w/h from that.
- Aspect ratio adaptive: `ratio = clamp(viewportW/H, floor=0.50, ceil≈0.62)`. Verify rendered book height stays ≥~85% of viewport height across phone/tablet/desktop shapes.
- Cover collision: reserve fixed top padding ≥ stamp height+margin (don't rely on vertical-centering alone to avoid stamp/title overlap on off-shape cards). Trailing hint: `margin-top:auto`. Verify stamp/title bboxes never intersect across shapes.
- Resize: `ResizeObserver` on stage (window `resize` alone misses panels that resize w/o firing it). Re-run sizing calc via short timeouts after load (hosting panel may keep settling) AND on `document.fonts.ready` (font-swap shifts navbar height).
- Nav-bar cushion: cap book at 88% of available space (not 92%) for measurement-discrepancy slack.

## DOM / export safety — critical
Each leaf = exactly ONE real DOM child (`.content`). Artifact PDF export renders JS-free static output AND paginates by DOM child count → 2 children/leaf = doubled alternating blank pages (confirmed real bug). Fix: "back of page" look = CSS `::after` pseudo-element (not a 2nd div) + `visibility` toggle via `.flipped` class w/ `transition-delay` (see Flip mechanic). Verify w/ JS fully disabled: every leaf still shows exactly one child, correct default-visible state.
`::after` is functional-only (no bg/shadow) — just gives the visibility-toggle something to switch against. Verify both: (a) force-broken backface-visibility → no bleed; (b) nothing card-shaped/shadowed appears left-of-spine after a flip.

## Memory (matters only >~dozen photos / >few MB)
Small book: embed all images as data-URI `src` directly, skip lazy-load. Large book: lazy-load via `data-src` → populate real `src` for current±2 leaves only, clear outside that window. Never permanent `will-change:transform` on `.leaf` (forces every leaf into its own GPU texture) — apply dynamically via JS to the mid-flip leaf only, clear on settle. Don't disable pinch-zoom to dodge memory crashes — doesn't fix root cause, removes a wanted feature (confirmed by testing). Keep total image payload small (resize/compress before embed). Zoom-triggered flash/reset on some devices is a known unresolved risk even w/ both fixes — don't claim fully solved.

## Positioning
book-wrap stays centered always, no compensating shift on any page (old rightward-shift-to-balance-a-blank-card was removed with the card it balanced — don't reintroduce the shift without reintroducing something to balance it against).

## Print / Save-as-PDF (`@media print` — kept as fallback; primary path is PDF generation below)
All leaves → `position:static`, opacity:1, `page-break-after:always` (last:`auto`), doc order. Hide navbar + fixed chrome. Fixed `@page` size/margin + fixed unit-safe max-width (e.g. `7.3in`, not vw/vh `clamp()`). Fixed print-safe font sizes, not inherited screen values. If lazy-loading active: `beforeprint` → force-populate all `src` from `data-src`; `afterprint` → restore lazy window. Clear any JS-set inline book sizing before print, restore after (inline style otherwise beats print CSS). Verify by actually printing: page order, images render, nothing overflows — page count alone insufficient.

## PDF generation (primary path — screenshot-through-pages, not `window.print()`)
`window.print()` fails inside Claude's sandboxed chat-preview iframe (`allow-modals` not set), no workaround from inside; only works once file is opened top-level outside preview, where native Ctrl+P/Quick-Look already covers it → in-page print button = redundant, removed.
Use Playwright+Chromium (real engine — older HTML→PDF tools mis-render flexbox/`aspect-ratio`/custom-props, tiny broken output is the tell).
1. **Detect pattern** first: single `.book`/`.book-wrap`, absolutely-positioned pages, Next/Back nav, `overflow:hidden` html/body, fixed-aspect card. Doesn't match (plain scrollable doc) → standard print-to-PDF suffices, skip rest.
2. **Page count** from DOM, not assumed: click Next once (counter blank on cover), parse "n/total" from counter, then Back to start before real capture loop.
3. **Step+verify**: click every leaf, wait > flip-transition duration each time. Sanity check: compare consecutive screenshot byte sizes — cover/closing should read smaller than photo pages; identical consecutive sizes flags a stuck click/wait.
4. **Crop to content**, never the full `.book-wrap`: measure actual bottom of visible content (last child in content frame, or its own `<svg>` if present, e.g. closing map) + small margin.
5. **Cover/closing special**: frame is `height:100%`-cascaded → cropping like a photo page cuts the border open. Temp inline-override `.content` height to fit content (top:0 holds, browser auto-drops `bottom` per CSS over-constraint resolution) → frame reflows via its own %/inset CSS → screenshot whole bordered card → restore height after. Capture-time-only overrides: hint `margin-top` (was `auto`) → fixed small value; map-wrap `flex` (was `1 1 auto`) → `none`+explicit height — otherwise flex filler pollutes the content-height measurement. Verify: frame border fully closed top+bottom in output.
6. **Image/text ratio**: capture-time-only injected CSS — shrink photo height-share, grow place-name/note/fact font sizes (fixed constants, uniform across any book; content-adaptive crop handles the rest).
7. **DPI**: `resolution=` sets both physical page size AND (text baked into pixels) legibility — not independently tunable. `DPI = text_px_height(captured, incl. device-scale-factor) * 72 / target_pt`, target_pt≈10–12. Re-derive per capture resolution, don't reuse a fixed number.
8. **Uniform page size**: pad every page to the tallest, fill with the book's own `--paper` CSS var read live at capture time — not hardcoded, not sampled from a rounded-corner pixel (leaks outer bg color).
9. **Hide interactive-only chrome**: `.counter{visibility:hidden}` via capture-step injected CSS only, never in the book's own CSS/markup (navbar already outside the card, so Back/Next auto-excluded from card screenshot).
10. **Verify**: final PDF page count == detected count. Spot-check ≥1 text-heavy page + the map/closing page directly from the ASSEMBLED PDF, not just intermediate PNGs. Before trusting any step as book-agnostic, confirm it's measured/read live (content-height, page count, bg color) vs. a constant tuned by eyeballing one book (font-size overrides / height% / DPI formula are fine as fixed constants; anything else shouldn't be hardcoded).

## Photo page sizing
Image height = % of card height (e.g. `height:38%`, `object-fit:cover`), NOT `vh`-based max-height — embedded previews compute vh inconsistently vs. card size, can squeeze text under navbar. Belt-and-suspenders: content area `overflow-y:auto` + bottom padding clearing navbar height, so unusually long text scrolls instead of hiding/overlapping. Verify fact-box vs. navbar bbox non-intersection across several card widths.

## Build trigger & content
- **Uploads**: build immediately on photo(s), even zero caption/text. Never wait for a description; never ask for title/dates/captions before the first build.
- **Notes**: treat every photo as "skip" by default → write note from what's visible, name place/subject, add fact. If the person later gives title/dates/captions (same message or follow-up) → use their words for that field, regenerate (see Edits). Never gate the first build on asking.
- **Dates**: show only if given/in metadata; else omit the line entirely, no placeholder. Missing = normal (exports strip GPS/date), not an error.
- **Edits**: plain-language request → apply, regenerate.

## Places/facts (read "place"→"subject" for non-travel — see Topic scope)
Identify each photo's place. Confident → state plainly. Guess → still write a fact + "confirm venue" badge on the photo's corner. Guessed/confirmed is ONE flag driving BOTH the photo badge AND the map-marker style from the same source — never set independently (drifted once: map showed guessed stops photo pages didn't badge, because map was rebuilt without touching the photo pages). Re-check both stay in sync on any edit to either.

## Map (place-based collections only — skip entirely for non-place topics, see Topic scope)
Include on closing page iff ≥1 photo has an identified place (confirmed OR guessed — don't require full confirmation first). Plot all identified stops together. Same place/city → 1 marker unless zoomed in enough to separate. Omit map entirely only if zero identified places. Re-evaluate every rebuild (new caption/upload/confirmation can add stops or flip guessed→confirmed). Multi-region/distant-country span → ask: one region-scale overview vs. closer per-region maps; don't silently choose.

**Sourcing**: never hand-draw coastline/lake/boundary shapes from memory — freehand beziers default to generic "blob," not real geography. Fetch real shape data (Natural Earth/similar via raw.githubusercontent.com) + real lat/lon per landmark → project via lat-corrected equirectangular (scale lon by `cos(mean lat)`). All markers from the same projection, never eyeballed. Never call a live map-tile/geocode API at runtime — book must stay single self-contained file, zero runtime external deps; fetch once at build time, bake to static SVG.

**Drawing**: cream/white land, blue water, green park patches, gray roads+white centerline, small illustrative touches (bridge/peak/building sketch, ferry line) where fitting. Markers: plain colored numbered circles (not pins), distinct color each (cycle a fixed palette if count > palette size), white number. No legend box — colored text label beside each marker IS the legend. Guessed stops: add dashed ring around marker (same color). Compass always. Scale bar at regional/city scale only (omit at country/multi-region scale). Route line (send order) only when it adds clarity (real walking/driving route) — skip for country-scale or mixed-mode tours where a straight line would misrepresent travel.

**Layout+verify**: true-coordinate collision w/ another marker/icon/text → offset marker to a clear spot + thin leader line (marker color) back to the true-coord dot. Same for label placement — don't assume a spot is clear. MANDATORY before presenting: run an actual geometric overlap check (e.g. shapely) across every placed element — land/water, markers, leaders, labels, compass, scale bar — zero unexpected overlaps, everything in-canvas. Fix+re-run if anything overlaps; never assert-fixed without re-verifying.

## Topic scope
Not travel-only — same format fits any titled photo collection with per-photo captions (pet's year, plant's growth, cooking project, art portfolio, renovation, baby milestones, etc.). "Place" → "subject" throughout. Place-specific elements (postmark place-name convention, confirm-venue badge, Map section) apply ONLY to place-based collections — for non-travel, replace the stamp's place-name with the collection's own subject (pet name / project theme), same fit-check; skip Map + place-badge entirely (nothing to plot/confirm). Everything else — design, flip mechanic, sizing, PDF pipeline — is topic-agnostic, unchanged.

## File naming
Never a generic filename like "trip_book" for output (HTML or PDF) — must distinguish multiple books without opening each. Derive from the cover title: lowercase, spaces→hyphens, strip punctuation (e.g. "San Francisco" → `san-francisco-trip-book.html`). Title alone would collide (2 same-breed pets, 2 trips to the same city on different dates) → append a distinguishing detail pulled from the same source as the title (year/nickname/season/occasion), not a generic counter like "(1)". HTML+PDF share one base name (`sf-trip-book.html`/`.pdf`). No title given upfront → derive one from the photos (place/subject/pet name/dish/theme) the same way the cover title is chosen, before naming the file.
