# Resume-Inspired Personal Site Design

## Purpose

Rework the homepage into a long-form, résumé-led personal site inspired by the navigation and section rhythm of [Sunwoo Kang's personal site](https://swkang73.github.io/), while preserving Fadhilla's original quiet-authority visual system and using the supplied CV as the factual content source.

The result must communicate Fadhilla's current role and hiring signal in the first viewport, then let a visitor scan a credible engineering leadership narrative without exposing confidential delivery details.

## Information Architecture

1. **Hero:** A full-viewport introduction with compact anchored navigation, Fadhilla's name, the role line “Engineering Manager · Game Backend & Platform Engineering,” a concise positioning statement, direct LinkedIn/email actions, and a scroll cue. The existing decorative system map replaces the reference site's photographic background.
2. **About:** An introduction based on the CV summary, with a profile facts column and a practice-area column. Practice areas are descriptive lists, not proficiency percentages.
3. **Experience:** A chronological timeline led by AccelByte roles (Engineering Manager II, Lead Software Engineer, Software Engineer), followed by Core Chain, Anabatic, and the early internship. Entries use company, role, period, and a confidentiality-safe summary.
4. **Selected Work:** Three evidence-based summaries for Extend leadership, cloud/platform economics, and AI-native engineering workflows. These use the existing context/decision/outcome pattern rather than a project gallery or metrics.
5. **Technical Practice:** Concise groups for systems design, Go and cloud-native engineering, reliability and developer experience, and AI workflows.
6. **Education:** Master's and bachelor's education as a compact continuation of the timeline.
7. **Contact:** A direct final invitation, email, LinkedIn, and GitHub links.

## Visual Direction

- Retain the existing warm-white canvas, deep ink typography, sea-blue controls and rules, pale-blue surfaces, hairline borders, and no gradients.
- Borrow only the reference's interaction concept: a prominent intro, persistent section navigation on large screens, clear alternating content bands, and a scroll-led narrative.
- Use the systems map as a static, decorative hero composition; it remains hidden from assistive technology and creates no focus targets.
- Do not use profile images, skill bars, numerical counters, icon clouds, excessive shadows, or cards that disguise résumé content.
- Use serif display type for hierarchy and sans-serif body type for readable, editorial content.

## Responsive and Accessible Behavior

- Desktop shows the hero at approximately one viewport tall and places the anchored navigation at the top.
- Below tablet width, navigation wraps or collapses to a compact row and all multi-column content becomes one column without horizontal scrolling.
- Every anchor and external link has visible keyboard focus. Section anchors account for the header position.
- Reduced-motion settings disable nonessential scroll behavior; no information relies on motion.

## Content Boundaries

- CV information supplies roles, dates, technology domains, education, and positioning.
- Copy avoids customer names, project names, precise internal metrics, or combinations that could expose confidential platform work.
- The supplied CV remains a local reference only and is not copied into the repository or published as a downloadable asset.

## Validation

- `npm run check`, `npm run lint`, and `npm run build` must pass.
- Review the page at 320 px, 768 px, and 1440 px for hierarchy, clipping, and horizontal scrolling.
- Confirm that the first desktop viewport clearly identifies the current role, platform focus, and contact action.
