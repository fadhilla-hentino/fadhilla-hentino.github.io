# Reference Match — Reference-Aligned Personal Site

**Date**: 2026-09-04
**Feature slug**: `reference-aligned-personal-site`
**Feature description**: Restyle the existing homepage to use the structure and interactions of Sunwoo Kang's long-form resume site while preserving Fadhilla's content and a distinct palette.
**Inferred archetype**: Long-form portfolio/resume

---

## Candidates evaluated

| Page | Path | Structural similarity | Why selected |
|---|---|---|---|
| Sunwoo Kang personal site | `https://swkang73.github.io/` | High | Explicit user reference with the target hero, navigation, centered intros, resume timeline, projects, and contact rhythm. |
| Current Fadhilla homepage | `src/routes/+page.svelte` | Medium | Contains the required content and components but uses a different editorial grid and band system. |

The repository contains only one application page, so no second internal page analogue exists.

---

## Best match

**Sunwoo Kang personal site** at `https://swkang73.github.io/`.

It is the explicit interaction and structural target. The current page remains the source of truth for Fadhilla's content, accessible markup, typed data, and palette tokens.

---

## Pattern extraction

### Sunwoo Kang personal site

**Source**: `https://swkang73.github.io/`

- Full-height identity-first hero with name, role summary, social actions, and a down-scroll affordance.
- Compact navigation anchored to Home, About, Resume, Projects, Activities, Statistics, and Contact.
- Centered eyebrow/title/introduction pattern before major content sections.
- About content pairs portrait/profile context with a concise capability summary and two direct actions.
- Resume uses a centered vertical spine with alternating chronology blocks.
- Content sections change background tone to create strong narrative chapters.
- Contact closes with a high-contrast section and direct connection details.

### Current Fadhilla homepage

**Source**: `src/routes/+page.svelte`

- Static SvelteKit route driven by typed content from `src/lib/content/profile.ts`.
- Accessible skip link, landmarks, semantic sections, native anchors, visible focus, and reduced-motion support.
- Warm-white, ink, sea-blue, and pale-blue token set with no gradients.
- Image-free system-map artwork currently competes with a small circular portrait.
- Resume and education use split-column layouts; selected work uses three narrative entries.

---

## Portable patterns for the new design

| Pattern | Source | Status | Recommendation |
|---|---|---|---|
| Full-height identity hero | External reference | Dominant | Follow, with Fadhilla's portrait as the focal point and no background photograph. |
| Compact anchored navigation | Both | Established | Follow; make it sticky and expose active/hover states. |
| Centered section introductions | External reference | Dominant | Follow across About, Resume, Work, Practice, Education, and Contact. |
| Vertical resume timeline | External reference | Dominant | Follow with a simplified responsive spine. |
| Alternating chapter backgrounds | Both | Established | Follow with a new ocean/ivory/slate palette. |
| Typed content and semantic markup | Current page | Dominant | Preserve. |
| Visible focus and reduced motion | Current page | Dominant | Preserve. |
| Portrait focal-point control | User feedback | Dominant | Recreate the asset from the portrait source with the face at exact circle center. |

---

## Divergences (need human decision)

- The reference uses a photographic full-bleed hero; the project constraint favors a lightweight, privacy-safe portrait and code-native background treatment.
- The reference includes skill percentages and statistics; Fadhilla's current evidence-led positioning avoids unverifiable counters.
- The reference includes many project/activity items; current content is intentionally curated to three impact narratives.

---

## What to take into design-brief

- Use the external reference as the structural and interaction model.
- Preserve the current route's typed data and accessibility behavior.
- Treat portrait alignment, sticky navigation, centered intros, vertical timeline, and high-contrast section chapters as acceptance criteria.

---

## Manifest gaps encountered

- No local design-system manifest is present; use existing CSS tokens and native Svelte components as the consistency baseline.
- The repository has only one route, so the reference set necessarily includes the user-supplied external page.
