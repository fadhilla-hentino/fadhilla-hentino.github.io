# Ocean Resume Redesign

## Goal

Redesign the personal-site homepage to follow the structure and interactions of the supplied long-form resume reference while preserving Fadhilla's content and using a distinct deep-ocean, ivory, sea-glass, teal, and mint palette.

## Structure

The page order is Hero, About, Resume, Selected Work, Practice, Education, and Contact. The hero is a full-height, identity-first composition with a centered circular portrait, name, role, professional focus line, social links, and a down-scroll cue. Major sections use centered introductions; Resume uses a vertical chronology; Selected Work uses a single editorial evidence list.

## Interaction

The flat deep-ocean header stays at the top of the viewport. Desktop shows all section anchors and identifies the visible section. Mobile uses an accessible disclosure button and closes the menu after a link is selected. Native anchors work without JavaScript; active-section indication is progressive enhancement. Every target offsets for the sticky header, and reduced motion disables smooth movement.

## Palette

- Deep ocean: `#0b2633`
- Ocean surface: `#123947`
- Warm ivory: `#f7f2e8`
- Paper: `#fffdf8`
- Sea glass: `#dfeeee`
- Deep teal: `#0a6c66`
- Mint: `#8cded2`
- Ink: `#13262d`
- Muted ink: `#556b73`
- Hairline: `#c6d7d7`

Colors are flat; the page uses no gradients or large shadows.

## Portrait

Regenerate the hero portrait from the supplied close photo as a metadata-free WebP of at least 320×320 pixels. The midpoint of the face must be positioned at 50% horizontal and 50% vertical within the square crop. Render it at 176px on desktop and 144px on mobile with a circular mask and ivory border.

## Content Boundaries

Keep current typed CV-backed content and confidentiality-safe summaries. Do not add the source CV, original photos, customer names, internal project names, private metrics, skill percentages, or statistical counters.

## Validation

- Verify the hero and portrait at desktop and mobile sizes.
- Verify sticky navigation, active section indication, mobile disclosure, anchor offsets, keyboard focus, and reduced motion.
- Verify no horizontal scrolling at 320px, 768px, and 1440px.
- Run `npm test -- --run`, `npm run check`, `npm run lint`, and `npm run build`.
