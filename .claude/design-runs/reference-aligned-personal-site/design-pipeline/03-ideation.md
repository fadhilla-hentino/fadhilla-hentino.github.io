# Design Options — Personal Site Homepage
**Date**: 2026-09-04 | **Audit**: `.claude/design-runs/reference-aligned-personal-site/design-pipeline/01-audit.md` | **Persona**: Technical hiring manager / platform leader

## Problem statement
A technical hiring visitor needs to identify Fadhilla, understand his current platform-leadership scope, and scan credible evidence quickly. The current page contains the right material but its split editorial layout and small portrait do not reproduce the identity-first, centered, scroll-led experience of the supplied reference. Success means the reference relationship is obvious within seconds while the result remains recognizably Fadhilla's site.

## Success criteria
- First viewport centers Fadhilla's identity, role, portrait, contact paths, and scroll cue.
- Sticky anchor navigation and centered section introductions create an obvious long-page rhythm.
- Experience reads as a vertical chronology on desktop and a clear single column on mobile.
- Fadhilla's face is centered horizontally and vertically inside the portrait circle.
- The palette is distinct from the reference and passes WCAG AA contrast.

## Option A — Structural Tune-Up (Minimal)
**Summary**: Keep the current warm-white and sea-blue treatment and layout, but correct the portrait crop, strengthen identity hierarchy, make the existing header sticky, and center section introductions. Leave the current split experience layout and content density intact.
**Sketch**: Sticky light nav → current split hero with a larger centered portrait → centered section intros → current split experience list → existing three work narratives → practice grid → education → pale-blue contact.
**Frameworks**: `[Jakob]` adopts the reference's recognizable resume cadence; `[Serial Position]` puts identity first and contact last; `H4` unifies equivalent section headers.
**Fixes**: `[System 1]` identity hierarchy, `[Visual — Portrait]` focal point, `[IA — Navigation]` persistence, and part of `H4` section consistency.
**Leaves open**: `H8`, `[Jakob]`, and `[Visual — Alignment]`; the split experience layout and pale-blue banding still feel like the previous editorial design.
**Persona impact**: Primary — faster identity recognition with minimal novelty. Secondary — mobile visitors keep the current compact content. These effects are hypotheses; no persona walkthrough has validated them.
**Implementation surface**: `SiteHeader.svelte`, `SectionHeading.svelte`, `SystemMap.svelte`, `+page.svelte`, `app.css`, and regenerated `profile-portrait.webp`.
**Premortem**:
- Still feels unlike the reference — Evidence: feedback continues to call it “editorial.” Mitigation: measure hero and section geometry directly against the reference structure.
- Sticky header obscures anchors — Evidence: headings land under navigation. Mitigation: set consistent `scroll-margin-top`.
- Enlarged portrait loses quality — Evidence: visible softness on desktop. Mitigation: regenerate from the highest-resolution source photo.
**Reference class**: No reference class is available for prior redesigns in this product.
**Confidence**: medium

## Option B — Ocean Resume (Restructured)
**Summary**: Rebuild the presentation around the reference's actual structure: a deep-ocean full-height hero, centered circular portrait, name and role stack, social links, sticky flat-color nav, centered section intros, and a true vertical resume timeline. Use ivory content sections, deep-ocean chapters, and sea-glass surfaces; this original palette is a deliberate translation of the existing sea-blue identity, not a borrowed reference pattern.
**Sketch**: Deep-ocean hero with subtle CSS line field + centered portrait/name/roles/socials → sticky flat navy nav with active section and mobile toggle → ivory About with centered intro and two-column detail → sea-glass Resume with central spine → ivory Selected Work → navy Practice band → ivory Education → deep-ocean Contact.
**Frameworks**: `[System 1]` creates immediate identity recognition; `[Jakob]` follows the requested reference model; `[Peak-End]` gives hero and contact deliberate high-contrast moments; `H8` reduces competing layout grammars.
**Fixes**: `H4`, `H8`, `[Jakob]`, `[Serial Position]`, `[System 1]`, `[Visual — Hierarchy]`, `[Visual — Proximity]`, `[Visual — Alignment]`, `[Visual — Consistency]`, `[Visual — Portrait]`, and `[IA — Navigation]` through active section state.
**Leaves open**: it intentionally does not copy the reference's skill percentages, counters, background photography, or gallery interactions.
**Persona impact**: Primary — strongest scan path from identity to evidence to contact. Secondary — visitors who prefer dense résumé detail may need to scroll farther. These effects are hypotheses; no persona walkthrough has validated them.
**Implementation surface**: `SiteHeader.svelte`, `SectionHeading.svelte`, `ImpactCard.svelte`, `SystemMap.svelte`, `+page.svelte`, `app.css`, typed role/social presentation, and regenerated `profile-portrait.webp`.
**Premortem**:
- Dark hero overwhelms the quiet-authority tone — Evidence: portrait and role feel theatrical. Mitigation: use flat navy, generous whitespace, and no gradients or heavy motion.
- Similarity becomes imitation — Evidence: reviewers identify copied details rather than shared structure. Mitigation: retain original typography, system-map motif, evidence cards, copy, and palette.
- Timeline becomes too long — Evidence: visitors abandon before selected work. Mitigation: keep entries concise and use strong section landmarks.
- Active navigation becomes inaccurate — Evidence: the highlighted item does not match the visible section. Mitigation: use one IntersectionObserver with deterministic thresholds and a native-scrolling fallback.
**Reference class**: No reference class is available for prior redesigns in this product.
**Confidence**: medium

## Option C — Resume Index (Re-imagined)
**Summary**: Keep native long-page scrolling and the established top navigation, but compress the homepage into a concise professional index. A centered hero leads to a one-screen career summary; detailed impact stories live in progressively disclosed native `details` sections instead of equally prominent chapters.
**Sketch**: Centered portrait hero → sticky top anchor nav → compact career index → expandable evidence entries → compact practice/education rows → contact finale.
**Frameworks**: `[Miller]` chunks the career into a small index; `[Hick]` reduces simultaneous detail; `[Serial Position]` keeps identity and contact memorable.
**Fixes**: `[System 1]` identity hierarchy, `[IA — Navigation]`, `[Visual — Alignment]`, and content density.
**Leaves open**: diverges from the reference's fully exposed conventional resume chronology and risks hiding evidence.
**Persona impact**: Primary — faster overview but additional action to inspect evidence. Secondary — mobile visitors receive a shorter page. These effects are hypotheses; no persona walkthrough has validated them.
**Implementation surface**: top navigation, route layout, native disclosure markup, `+page.svelte`, `app.css`, and regenerated portrait.
**Premortem**:
- Hiring visitors miss hidden evidence — Evidence: low disclosure-open rate. Mitigation: keep the strongest result visible in each summary.
- The page feels too sparse — Evidence: visitors cannot establish role depth. Mitigation: preserve company, role, period, and one outcome per entry.
- Native disclosures disrupt anchor navigation — Evidence: headings move unexpectedly when opened. Mitigation: anchor only stable section containers.
**Reference class**: No reference class is available for prior redesigns in this product.
**Confidence**: low

## Comparison

| Dimension | Option A | Option B | Option C |
|-----------|----------|----------|----------|
| MAJOR findings fixed | `[Visual — Portrait]`; partial `H8` | `H8`, `[Jakob]`, `[Visual — Hierarchy]` | `[Visual — Hierarchy]`; partial `H8` |
| Implementation cost | Low | Medium | High |
| Regression risk | Low | Medium | High |
| Primary persona benefit | Medium | High | Medium |
| Secondary persona benefit | Medium | Medium | High on mobile, uncertain on desktop |
| Premortem confidence | Medium | High | Low |

## Recommendation
**Option B — Ocean Resume** because it directly addresses the requested structural and interaction match while preserving an unmistakably different visual identity. It is right if close experiential similarity matters more than preserving the current composition; otherwise Option A is safer if minimizing change is the priority.

The final choice belongs to the user; this recommendation is design input.

## Adversarial review
**ux-skeptic**: Narrowed Option A so it is genuinely minimal; replaced unsupported reference-class claims; made persona impact explicitly hypothetical; reduced Option B confidence to medium; and made audit traceability exact.
**pattern-consistency**: Removed ungrounded side-rail, snap, drawer, and coral patterns; retained the established top navigation and native scrolling across options; justified the new palette as an intentional project-specific choice.

## Next steps
Human picks option → create design brief → engineering implements → design rationale.
