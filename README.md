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

## UAE launch pricing

`pricing-uae.html` benchmarks the launch price against global comparables and UAE consultation costs, and recommends AED 399 per household per year, with a founding price of AED 299.

It also flags a structural problem with the original model: unlimited paediatrician calls cost more than the subscription at UAE clinician rates. The recommendation meters the calls (one included, AED 99 after) and keeps the written assessments unlimited.

The brief has been updated to match.

## Pitch deck

`deck.html` is a 13-slide pitch deck at 1280x720 (16:9). `Bedside-Pitch-Deck.pdf` is the rendered PDF.

To regenerate the PDF after editing the deck:

```
npm i playwright
node tools-render-pdf.js "$PWD/deck.html" "$PWD/Bedside-Pitch-Deck.pdf"
```

The deck uses a fixed light palette rather than the site's light/dark tokens, because a PDF has one visual world. Slide size is set with `@page { size: 1280px 720px }` and rendered with `preferCSSPageSize`.

## Social kit

`social-kit.html` holds the launch social samples: Reel and TikTok scripts with shot lists, two Instagram carousels, a single post, LinkedIn, an X thread, and Arabic versions, plus visual previews of the card designs.

The kit deliberately rejects the standard playbook for this category (alarm hooks, "the mistake most parents make", tribal splits). A brand promising not to raise a parent's temperature cannot market by raising it. Hooks are built on recognition instead: the parent sees their own eleven-at-night described accurately.

Two gates before anything is posted, both noted in the kit: a paediatrician signs off every clinical line, and UAE health-marketing rules (DHA / DoH) are checked first.

## Arabic campaign posts

`campaign-ar/` holds five Instagram artboards at 1080x1350, designed Arabic-first: RTL, Eastern Arabic numerals, IBM Plex Sans Arabic, and hand-drawn SVG illustration on each.

Acute illness, running as a sequence:

1. `01-recognition.png` - the 11pm question, over a night scene. No product.
2. `02-thresholds.png` - four things to check, one icon each. The saveable one.
3. `03-offer.png` - why parents wait, and the AED 399 answer.

Developmental screening:

4. `04-development.png` - "wait and see is not a plan", with a joint-attention drawing.
5. `05-screening-report.png` - the screening report on a phone.

`posts-ar.html` is the source; `render.js` writes all five PNGs.

### Two things that are deliberate

**Direction is set on `.post`, not on the document.** An earlier version put `dir="rtl"` on `<html>`, so the posts silently lost RTL when embedded in a gallery page. Keeping direction on the artboard makes each one self-contained.

**The screening report's fourth section is not "when to worry".** For acute illness that framing is right: there are thresholds, and crossing one means act. Developmental concern has no such line, and "when to worry" would push parents toward exactly the anxiety the product exists to reduce. The fourth section is "what this does not mean" instead.

Screening is not diagnosis, and every asset says so. Autism diagnosis needs a multidisciplinary team; a screener only answers whether specialist assessment is worth starting now. The point of the product here is to displace "wait and see", which delays intervention during the years when it helps most.
