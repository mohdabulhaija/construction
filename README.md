# Bedside

Landing page and product mockup for a paediatric health guidance platform.

Audience: parents of children under sixteen. Business model: one annual fee per household, unlimited assessments, every child covered.

## What is here

`index.html` is a single self-contained page with no build step. Open it in a browser.

In order: the hero, a trust strip, the four age bands, the eight things parents can ask about, how it works, the four parts of a report, the worked example (intake form then sample report), pricing, and a safety footer.

## Voice rules the copy follows

- Calm, plain, declarative. Short sentences.
- No exclamation marks.
- No medical jargon unless it is explained in the same sentence.
- Never urgent or alarmed. Not commercial in tone.
- The report reflects the parent's own words back to them, and "when to worry" is written as thresholds, not vague symptoms.

## Design system

**Type.** Fraunces for display, with the SOFT and WONK axes turned up so headings read warm rather than clinical. Figtree for interface text and body copy. Both from Google Fonts with system fallbacks.

**The four report sections carry a fixed colour each.** Amber for what you told us, teal for what it likely means, blue for what to do now, rose for when to worry. The same four colours appear in the phone mockup, the explainer cards, and the report itself, so a parent learns where to look. The set was checked with the dataviz palette validator and passes the lightness, chroma, colour-vision separation, and contrast checks in both light and dark mode.

**Age bands use one hue, light to dark.** Age is ordinal, so the four bands step through a single violet ramp rather than taking four unrelated hues.

**Status colours are held separate** from both of those sets and never reused as a section colour. Amber means have the child seen the same day. Deep crimson means call an ambulance. Both always ship with an icon and a text label, so the meaning never rests on colour alone.

**Themes.** Light and dark are both defined through tokens. The hero and pricing panels stay deep indigo in both.

**Illustration.** The symptom icons, the child body map in the intake form, and the fever chart are hand-drawn inline SVG. No icon library and no chart library are loaded.

## Notes

The example child, parent, and every clinical detail are made up, and the page says so.

## Stakeholder brief

`brief.html` is a one-page product brief for sharing with stakeholders: overview, the problem, target audience, main value, competitive edge, business model, and messaging. It carries the same identity as the site and has print styles, so it exports cleanly to PDF from the browser.

Figures in it that are assumptions rather than research are listed explicitly at the end of the page.
