# Prototype QA — Ocean Resume Homepage

**Date**: 2026-09-04
**Feature slug**: `reference-aligned-personal-site`
**Code under review**: `src/routes/+page.svelte`, `src/lib/components/`, `src/app.css`, and static assets
**Brief referenced**: `04-design-brief.md`
**Mode**: Auto-fix

---

## Context and coverage

This repository has no local `.claude/context/design-system/` manifest. Token, component, and anti-pattern checks therefore use the approved design brief plus the prototype's own shared tokens; product-manifest-only checks are marked N/A rather than inferred.

Automated coverage includes Vitest component/content tests, `svelte-check`, ESLint, the production build, contrast calculations, metadata inspection, and exact browser viewport measurements. Headless Chrome measured `documentElement.scrollWidth === innerWidth` at 320, 768, and 1440 CSS pixels. Full-page captures at 320 and 1440 were visually reviewed for clipping, hierarchy, section order, and portrait crop.

## Summary

| Rubric | Pass | Fail | N/A |
|---|---:|---:|---:|
| A — Visual tokens | 4 | 0 | 1 |
| B — Shell layout | 4 | 0 | 2 |
| C — Page archetype | 1 | 0 | 7 |
| D — Button hierarchy | 1 | 0 | 5 |
| E — State coverage | 0 | 0 | 7 |
| F — Copy quality | 3 | 0 | 7 |
| G — Anti-patterns | 6 | 0 | 9 |
| H — Acceptance criteria | 11 | 0 | 0 |
| I — Accessibility | 9 | 0 | 4 |
| **Total** | **39** | **0** | **42** |

**Verdict**: Passes (0 open failures)

## A — Visual tokens

| ID | Result | Evidence |
|---|---|---|
| A1 | PASS | `src/app.css`, `static/favicon.svg`, and `src/routes/+layout.svelte` use only the approved ocean palette. |
| A2 | PASS | No `font-size` declaration uses pixel units. |
| A3 | N/A | No product spacing manifest exists; layout uses shared spacing tokens plus brief-specific responsive values. |
| A4 | PASS | Hero/header/practice/contact use deep ocean; content uses ivory, paper, and pale sea-glass surfaces. |
| A5 | PASS | Teal is reserved for actions, links, rules, and active states; mint is used on dark surfaces. |

## B — Shell layout

| ID | Result | Evidence |
|---|---|---|
| B1 | PASS | `--header-height` is shared by the sticky header and anchor offsets: 4.5rem desktop and 4rem mobile. |
| B2 | N/A | The approved marketing homepage has no sidebar. |
| B3 | PASS | Section backgrounds follow the brief's ivory, sea-glass, and deep-ocean chapter sequence. |
| B4 | PASS | `SiteHeader.svelte` derives active navigation from observed section IDs and applies `aria-current="location"`. |
| B5 | PASS | Shared `--page-gutter` and `--max-width` constrain the header, sections, and footer consistently. |
| B6 | N/A | This is the real SvelteKit implementation, not a disposable prototype wrapper. |

## C — Page archetype

| ID | Result | Evidence |
|---|---|---|
| C1 | N/A | A personal-site identity hero appropriately owns the semantic raw `h1`; no product page-title component exists. |
| C2 | N/A | Breadcrumb and right-slot conventions do not apply to a one-page personal site. |
| C3 | PASS | `+page.svelte` implements the brief's anchored long-form resume archetype and required section sequence. |
| C4 | N/A | Not a list-management page. |
| C5 | N/A | Not a form page. |
| C6 | N/A | Not a tabbed detail page. |
| C7 | N/A | No destructive confirmation flow. |
| C8 | N/A | No nested page. |

## D — Button hierarchy

| ID | Result | Evidence |
|---|---|---|
| D1 | PASS | About and Contact each expose one visually primary action with supporting text links. |
| D2 | N/A | No destructive action. |
| D3 | N/A | No destructive action. |
| D4 | N/A | No form cancel/back flow. |
| D5 | N/A | No asynchronous action. |
| D6 | N/A | No disabled button. |

## E — State coverage

| ID | Result | Evidence |
|---|---|---|
| E1 | N/A | Static-first page has no data-fetching surface. |
| E2 | N/A | No collection empty state. |
| E3 | N/A | No filtered collection. |
| E4 | N/A | No data-loading error state. |
| E5 | N/A | No mutation. |
| E6 | N/A | No permission-gated content. |
| E7 | N/A | No bulk-action surface. |

### Brief state inventory

| State | Result | Evidence |
|---|---|---|
| Initial hero | PASS | Deep-ocean first viewport includes portrait, role, name, positioning, social links, and scroll cue. |
| Section active | PASS | Intersection Observer updates `activeSection`; current link receives visual state and ARIA. |
| Anchor navigation | PASS | Native fragment links use shared sticky-header scroll offsets. |
| Portrait loaded | PASS | Circular image uses `object-fit: cover` and centered object position. |
| Portrait unavailable | PASS | Initials remain behind the image without layout shift. |
| Reduced motion | PASS | Global reduced-motion query disables smooth scrolling and transitions. |
| Narrow viewport | PASS | Header, hero, grids, timeline, evidence rows, and footer collapse responsively. |
| Mobile navigation closed | PASS | Hydrated mobile navigation starts closed with an “Open navigation” button. |
| Mobile navigation open | PASS | Button toggles the link list and updates its label and `aria-expanded`. |
| Mobile link selected | PASS | Link activation closes the menu before native fragment navigation. |
| Mobile keyboard focus | PASS | Button and links remain in DOM order and share visible focus treatment. |

## F — Copy quality

| ID | Result | Evidence |
|---|---|---|
| F1 | PASS | Hero title is “Fadhilla Eka Hentino,” matching the brief. |
| F2 | PASS | Interaction labels are explicit: “Open navigation,” “Close navigation,” “Explore my work,” and direct action labels. |
| F3 | N/A | No empty state. |
| F4 | N/A | No success toast. |
| F5 | N/A | No confirmation modal. |
| F6 | PASS | No generic placeholder, lorem ipsum, generic error, Submit, Confirm, or Yes/No copy remains. |
| F7 | N/A | No data table. |
| F8 | N/A | No form fields. |
| F9 | N/A | No form help text requirement. |
| F10 | N/A | No input placeholders. |

## G — Anti-patterns

| ID | Result | Evidence |
|---|---|---|
| G1 | N/A | No editing surface. |
| G2 | PASS | No surface presents multiple competing primary actions. |
| G3 | PASS | No confirmation modal exists. |
| G4 | N/A | No empty state. |
| G5 | N/A | No filter state. |
| G6 | N/A | No table. |
| G7 | N/A | No configuration authoring. |
| G8 | N/A | No nested page. |
| G9 | N/A | No disabled button. |
| G10 | N/A | No promote/publish action. |
| G11 | PASS | Essential profile, impact, and practice context is visible inline. |
| G12 | N/A | No operational table. |
| G13 | PASS | No modal exists. |
| G14 | PASS | No wizard exists. |
| G15 | PASS | No raw application error is rendered. |

Additional visual anti-pattern scan: PASS — no gradients, stat counters, skill bars, generic icon cloud, forced scroll snapping, chronology drawer, or large shadows.

## H — Brief acceptance criteria

| ID | Result | Evidence |
|---|---|---|
| H1 | PASS | The reviewed first viewport contains every required hero element on the deep-ocean surface. |
| H2 | PASS | DOM and visual order is Hero → About → Resume → Selected Work → Practice → Education → Contact. |
| H3 | PASS | Sticky desktop navigation has seven links and active-section semantics. |
| H4 | PASS | Mobile menu component tests verify default label, open state, close label, and close-on-selection. |
| H5 | PASS | Every major section uses the centered `SectionHeading` pattern. |
| H6 | PASS | Resume uses a centered desktop spine and a left-aligned mobile spine. |
| H7 | PASS | Selected Work renders as three stacked, full-width evidence rows. |
| H8 | PASS | Portrait face is centered in its circle at desktop/mobile; asset scan found no GPS, camera, Apple, iPhone, or EXIF text. |
| H9 | PASS | Palette scan is clean and prohibited visual treatments are absent. |
| H10 | PASS | Exact Chrome measurements at 320, 768, and 1440 report equal viewport and document scroll widths; anchor offsets use header height. |
| H11 | PASS | Tests, Svelte checks, lint, production build, and diff whitespace checks pass. |

## I — Accessibility

| ID | Result | Evidence |
|---|---|---|
| I1 | PASS | Menu control includes visible accessible text; decorative diagram and glyphs are hidden from assistive technology. |
| I2 | N/A | No form controls. |
| I3 | PASS | Calculated contrast: canvas/ink 14.02:1, canvas/muted 5.04:1, canvas/teal 5.62:1, ocean/ivory 14.05:1, ocean/mint 10.08:1. |
| I4 | PASS | Three-pixel teal or mint focus rings exceed 3:1 against their respective surfaces. |
| I5 | PASS | All interactions are native links/buttons; menu behavior is covered by interaction tests. |
| I6 | PASS | Mobile menu is inline, creates no focus trap, and navigation remains available without JavaScript. |
| I7 | PASS | Focus order matches header then document source order. |
| I8 | PASS | Global link/button focus-visible rules cover every interactive element. |
| I9 | PASS | Mobile menu links have 44px minimum height; remaining links are inline text targets or padded actions. |
| I10 | N/A | No form validation. |
| I11 | N/A | No form fields. |
| I12 | PASS | Menu button exposes `aria-controls` and current `aria-expanded`; active link exposes `aria-current`. |
| I13 | N/A | No status message or toast. |

Automated a11y coverage currently consists of Svelte diagnostics plus targeted DOM assertions; no axe or Lighthouse suite is configured. A future automated audit is recommended if the site gains forms, overlays, or dynamic data.

## Fixed during QA

| Item | Original finding | Fix | Verification |
|---|---|---|---|
| Progressive mobile navigation | Mobile links depended on hydration because CSS hid the list before enhancement. | Added an `enhanced` state so the static list remains usable without JavaScript and only collapses after hydration. | New component assertion plus existing open/close behavior tests pass. |
| Browser palette consistency | Theme metadata and favicon retained the previous palette. | Updated theme color and favicon fills/strokes to deep ocean, ivory, and mint. | Hex-color scan now contains only approved palette values. |

## Next steps

- [x] Fix all mechanical failures found during QA.
- [x] Re-run focused component and Svelte checks after fixes.
- [x] Verify exact 320, 768, and 1440 CSS-pixel widths in Chrome.
- [x] Review full-page desktop and mobile captures.
- [ ] Replace placeholder external destinations only when final public URLs are confirmed.
