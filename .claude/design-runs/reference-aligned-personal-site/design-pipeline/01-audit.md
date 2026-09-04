# UX Audit — Personal Site Homepage
**Target**: `/` | **Persona**: Technical hiring manager / platform leader (backend-infrastructure-owner analogue) | **Date**: 2026-09-04 | **Source feedback**: “Similar structure and interaction to swkang73.github.io, with a different color palette.”

## Ground truth
The page introduces Fadhilla as an engineering leader and lets a hiring visitor evaluate positioning, career history, selected work, technical practice, education, and contact options. The primary task is to establish credibility quickly, then scan evidence before deciding whether to make contact; the archetype is a long-form portfolio/resume.

## Archetype check
`Long-form portfolio/resume` — Deviations: opening composition and section rhythm read as an editorial landing page rather than the requested immersive resume template.

## NN/g Heuristic findings

| # | Heuristic | Verdict | Evidence |
|---|-----------|---------|----------|
| H1 | Visibility of system status | N/A | The page has no asynchronous or state-changing operations. |
| H2 | Match with real world | PASS | `src/lib/content/profile.ts` uses recognizable role, company, education, and platform-language labels. |
| H3 | User control & freedom | PASS | `src/lib/components/SiteHeader.svelte:6-13` provides direct anchors and a return-to-top link. |
| H4 | Consistency & standards | MINOR ISSUE | `src/routes/+page.svelte:42-130` alternates several layout systems, so equivalent resume sections do not share a consistent visual grammar. |
| H5 | Error prevention | N/A | No destructive actions or input constraints exist. |
| H6 | Recognition over recall | PASS | Section labels remain visible in navigation and headings; no cross-section facts must be memorized. |
| H7 | Flexibility & efficiency | PASS | Anchor navigation lets scanning visitors skip directly to relevant evidence. |
| H8 | Aesthetic & minimalist | MAJOR ISSUE | `src/routes/+page.svelte:148-193` layers editorial split grids, system-map decoration, alternating bands, profile facts, tags, and four-column practice content without reproducing the reference’s simpler centered section cadence. |
| H9 | Error recovery | N/A | The page has no error-producing workflow. |
| H10 | Help & documentation | N/A | Resume content and contact actions are self-explanatory. |

## UX Law findings
- `[Jakob]` — The requested reference establishes an immersive hero followed by centered section intros and a vertical resume timeline; the current split-grid grammar does not match that learned pattern. | `src/routes/+page.svelte:25-130`
- `[Serial Position]` — The first viewport prioritizes a large name and abstract system map while the user’s requested portrait-led identity remains visually secondary. | `src/routes/+page.svelte:25-40`
- `[Aesthetic-Usability]` — The implementation is polished, but its visual language diverges enough from the supplied reference that it feels like a different design concept. | `src/routes/+page.svelte:147-193`

## Behavioral findings
- `[System 1]` — The eye is split between the oversized name, two equal-weight CTAs, map paths, and a small portrait, weakening immediate identity recognition. | `src/routes/+page.svelte:25-39`
- `[Choice overload]` — The page exposes About, Experience, Selected Work, Practice, Education, and three footer contacts without a strong active-section/navigation cue. | `src/lib/components/SiteHeader.svelte:5-14`
- Friction placement: low interaction friction, but high visual interpretation cost appears in the first viewport where recognition should be fastest.

## Accessibility findings (WCAG 2.2 AA)

| Criterion | Verdict | Evidence |
|-----------|---------|----------|
| `[1.1.1 Non-text Content]` | PASS | `src/routes/+page.svelte:37` gives the portrait meaningful alt text; `SystemMap.svelte:1-2` hides decoration from assistive technology. |
| `[1.3.1 Info and Relationships]` | PASS | Sections use labelled headings and semantic article/list structures. |
| `[1.4.10 Reflow]` | PASS | `src/routes/+page.svelte:191-193` collapses grids at tablet and mobile widths. |
| `[2.1.1 Keyboard]` | PASS | All interactions are native anchors. |
| `[2.4.1 Bypass Blocks]` | PASS | `src/routes/+layout.svelte` includes a skip link and main landmark. |
| `[2.4.7 Focus Visible]` | PASS | `src/app.css:56-60` defines a high-contrast focus outline. |

**Automated coverage**: `svelte-check` and ESLint cover static semantics; no browser-level axe coverage exists.

## Visual design findings
- `[Visual — Hierarchy]` — The portrait is only `8.5–13.5rem` within a larger system-map field, so the person is not the primary hero focal point. | `src/routes/+page.svelte:162-165`
- `[Visual — Gestalt: Proximity]` — The portrait overlays an unrelated system map, visually grouping identity with infrastructure decoration rather than the introduction. | `src/routes/+page.svelte:35-38`
- `[Visual — Alignment]` — Section headings alternate between split columns and full-width grids, while the reference consistently centers section introductions above content. | `src/routes/+page.svelte:42-130`
- `[Visual — Consistency]` — Pale-blue alternating bands dominate the page and create a product-marketing rhythm instead of the reference’s resume-section rhythm. | `src/routes/+page.svelte:166-185`
- `[Visual — Portrait]` — The square source asset prevents CSS `object-position` from meaningfully correcting face placement inside the circular mask. | `src/routes/+page.svelte:164`

## Forms findings
N/A — this page contains no form.

## IA findings
- `[IA — Labels]` — Navigation labels are scent-strong and map directly to page content. | `src/lib/components/SiteHeader.svelte:7-12`
- `[IA — Navigation]` — The navigation is not persistent and has no current-section signal, reducing orientation in a long page. | `src/lib/components/SiteHeader.svelte:5-14`

## Anti-patterns triggered
- Manifest gap: the repository has no local design-system catalog; audit applied existing CSS tokens and native web conventions.

## Severity summary

| Severity | Count | Top items |
|----------|-------|-----------|
| MAJOR | 2 | Reference interaction model is not reproduced; portrait is not the hero focal point. |
| MINOR | 3 | Section grammar varies; navigation lacks active context; portrait crop cannot be adjusted in CSS. |

## Next steps
- Run design ideation around the supplied reference’s immersive hero, centered intros, timeline, and persistent navigation.
