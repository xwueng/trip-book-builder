TRIP BOOK RULES
(this file: trip_book_spec.md — attached to each student's Claude Project; tells
Claude how to build the student's own flip-through trip book. Separate from
instructions_spec.md, which covers the Instructor_Guide.html / Student_Handbook.html
class-facilitation guides.)

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
