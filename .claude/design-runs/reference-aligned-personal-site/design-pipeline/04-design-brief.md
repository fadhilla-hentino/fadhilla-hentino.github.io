# Design Brief — Ocean Resume Homepage

**Date**: 2026-09-04
**Feature slug**: `reference-aligned-personal-site`
**Selected option**: Option B — Ocean Resume from `03-ideation.md`
**App / product / surface**: fadhilla.ai homepage
**Primary persona**: Technical hiring manager / platform leader
**Job-to-be-done**: Identify Fadhilla's current role and platform-engineering credibility, scan his career evidence, and decide whether to contact him.

---

## 1. Page archetype

**Archetype**: Long-form portfolio/resume.
**Deviations**: The page uses an evidence-led Selected Work section instead of percentage skill bars, statistical counters, or a generic project gallery. This preserves credible hiring evidence while following the reference's section rhythm.
**Closest existing page**: `https://swkang73.github.io/` is the explicit structural and interaction reference. `src/routes/+page.svelte` remains the content, accessibility, and component baseline.

**Design-system caveat**: No local design-system manifest exists. The brief therefore makes the palette, layout, interaction, and component rules explicit.

---

## 2. Screens required

| Screen | Archetype | Surface |
|---|---|---|
| Ocean Resume Homepage | Long-form portfolio/resume | Full page |
| Mobile Navigation | Anchored navigation | Header disclosure |

No modal, form, drawer, or data-loading screen is required.

---

## 3. State inventory

### Ocean Resume Homepage

| State | Trigger | Required behavior |
|---|---|---|
| Initial hero | Page load at `#top` | Full-height deep-ocean hero; Home is active; portrait, name, role, social links, and down-scroll cue are visible. |
| Section active | About, Experience, Work, Practice, Education, or Contact crosses the viewport observation line | Corresponding navigation link receives an active indicator and `aria-current="location"`. |
| Anchor navigation | User activates a header link or down-scroll cue | Page moves to the section; sticky-header offset leaves the section heading visible. |
| Portrait loaded | Image loads normally | Circular crop shows the face centered horizontally and vertically. |
| Portrait unavailable | Image fails to load | Ocean-colored circle with initials “FEH” remains visible; layout does not shift. |
| Reduced motion | `prefers-reduced-motion: reduce` | Anchor movement is immediate; no reveal or transition communicates information. |
| Narrow viewport | Width below 768 px | Navigation collapses behind a labelled menu button; hero and every content region become one column. |

### Mobile Navigation

| State | Trigger | Required behavior |
|---|---|---|
| Closed | Default below 768 px | Wordmark and “Open navigation” button remain visible; link list is hidden. |
| Open | User activates menu button | Link list appears below the header; button label becomes “Close navigation” and exposes `aria-expanded="true"`. |
| Link selected | User activates a navigation link | Menu closes and native anchor navigation continues. |
| Keyboard focus | User tabs through menu | Focus order follows DOM order and every link/button has the global visible focus ring. |

---

## 4. Visual system

Use flat colors only; no gradients or large shadows.

| Token | Value | Usage |
|---|---|---|
| Deep ocean | `#0b2633` | Hero, sticky header, contact finale |
| Ocean surface | `#123947` | Subtle hero system-map paths and dark-section dividers |
| Warm ivory | `#f7f2e8` | Primary content background |
| Paper | `#fffdf8` | Timeline cards and elevated content fields without shadow |
| Sea glass | `#dfeeee` | Resume and selected chapter backgrounds |
| Deep teal | `#0a6c66` | Links and actions on light surfaces |
| Mint | `#8cded2` | Hero eyebrow, active navigation rule, small dark-surface accents |
| Ink | `#13262d` | Primary text on light surfaces |
| Muted ink | `#556b73` | Supporting copy |
| Hairline | `#c6d7d7` | Rules, timeline lines, quiet boundaries |

Typography keeps the existing Georgia display face and system sans-serif body face. Major section introductions are centered and capped at 44rem. Body text remains between 50 and 75 characters per line.

---

## 5. Page structure and copy — verbatim

### Sticky navigation

- Wordmark: “Fadhilla.”
- Links: “Home”, “About”, “Resume”, “Selected Work”, “Practice”, “Education”, “Contact”.
- Mobile button: “Open navigation” / “Close navigation”.

### Hero

- Eyebrow: “Engineering Manager · Game Backend & Platform Engineering”
- Heading: “Fadhilla Eka Hentino”
- Statement: “Leading the teams and systems that help game developers build, deploy, and operate dependable backend services.”
- Role line: “Platform leadership · Reliable systems · AI-native workflows”
- Social links: “Email”, “LinkedIn”, “GitHub”
- Scroll cue: “Explore my work”
- Portrait alternative text: “Fadhilla Eka Hentino”
- Portrait fallback initials: “FEH”

The hero is at least one viewport high including the sticky header. The portrait is 176px on desktop and 144px on mobile, centered above the name. A low-opacity `SystemMap` spans behind the centered hero content and remains decorative.

### About

- Eyebrow: “About”
- Heading: “Let me introduce myself.”
- Intro: “I am an engineering leader with more than a decade of experience building software products and platform capabilities. At AccelByte, I lead Extend: a platform that enables game developers to build, deploy, and scale their own backend services on shared infrastructure.”
- Column heading: “Profile”
- Profile labels: “Based in”, “Current focus”, “Working style”, “Exploring”
- Column heading: “Core practice”
- Core practice items: “Systems and platform design”, “Go and cloud-native delivery”, “Reliability and developer experience”, “AI-native engineering workflows”
- Primary action: “Start a Conversation”
- Secondary action: “View LinkedIn”

### Resume

- Eyebrow: “Resume”
- Heading: “More of my journey.”
- Intro: “From hands-on software delivery to leading the platform teams that operate what they build.”
- Subheading: “Work Experience”

Each career entry renders period, role, company, and the existing confidentiality-safe summary from the typed content module. Desktop uses a central vertical spine with the period and role content balanced around it; mobile places the spine on the left and stacks each entry.

### Selected Work

- Eyebrow: “Selected Work”
- Heading: “Evidence behind the approach.”
- Intro: “A few confidentiality-safe examples of the systems questions I bring into engineering leadership.”

Render the existing three impact narratives. Each item shows title, context, engineering decision, outcome, and tags. Items form a single vertical editorial list with generous separators, not three equal cards.

### Practice

- Eyebrow: “Practice”
- Heading: “Depth where technology meets responsibility.”
- Intro: “The tools evolve. The practice is making trade-offs legible, teams effective, and the systems they rely on dependable.”

Render the four existing practice groups in a two-column desktop grid and one-column mobile list inside a deep-ocean chapter. Text is ivory; small rules and bullets are mint.

### Education

- Eyebrow: “Education”
- Heading: “A foundation for continued practice.”

Render the existing two education entries using the same chronology visual language as Resume, without a second central spine.

### Contact

- Eyebrow: “Contact”
- Heading: “Let’s build the steady path.”
- Body: “Open to thoughtful conversations about platform engineering, reliable systems, and AI-native engineering workflows.”
- Primary action: “Email Fadhilla”
- Secondary links: “Connect on LinkedIn”, “View GitHub”
- Back-to-top link: “Back to top”

---

## 6. Interaction specification

- Header is sticky at the viewport top and uses a flat deep-ocean background in every scroll state.
- Desktop navigation is always visible. The active link uses mint text plus a 2px bottom rule; hover changes text to mint without moving layout.
- Mobile navigation uses a native button with `aria-controls` and `aria-expanded`; the link region opens below the header with no overlay or focus trap.
- Active-section state uses one client-side `IntersectionObserver`. The page remains fully usable if JavaScript is unavailable; only the active indicator and mobile disclosure enhancement are omitted.
- Anchor targets use a shared header-height-based `scroll-margin-top`, not a fixed 1rem offset.
- The scroll cue is a native link to `#about`. Its arrow may translate by at most 4px on hover; reduced motion removes the translation.
- No automatic carousel, scroll snapping, parallax, or mandatory reveal animation is included.

---

## 7. Portrait specification

- Source: the user-provided close portrait with the yellow jacket and mountain background.
- Output: metadata-free WebP, at least 320×320 pixels.
- Crop: square; center the midpoint of the face at exactly 50% horizontal and 50% vertical within the output image.
- Rendering: `object-fit: cover; object-position: 50% 50%`; circular mask; 4px ivory border on the deep-ocean hero.
- Validation: inspect at both 176px and 144px render sizes; eyes, chin, and hair must have comfortable breathing room and the face must not sit above the circle midpoint.

---

## 8. Acceptance criteria

1. The first viewport uses the deep-ocean palette and visibly contains the centered portrait, full name, current role, role line, social links, and About scroll cue.
2. The homepage order is Hero → About → Resume → Selected Work → Practice → Education → Contact.
3. Desktop navigation remains sticky and contains all seven section links; the visible section receives `aria-current="location"`.
4. Mobile navigation is closed by default, exposes an accurately labelled button, closes after link selection, and preserves keyboard focus order.
5. All major section introductions are centered above their content and use consistent eyebrow, heading, and intro spacing.
6. Resume uses a visible central chronology spine on desktop and a left-aligned spine with stacked content below 768px.
7. Selected Work is a vertical evidence list, not a three-column card gallery.
8. The portrait face is centered at the midpoint of the circular crop at both desktop and mobile sizes, with no visible GPS/camera metadata in the published asset.
9. The page uses only the specified ocean, ivory, sea-glass, teal, mint, ink, and hairline colors; it contains no gradients, skill bars, counters, large shadows, or icon cloud.
10. Anchor destinations remain visible below the sticky header at 320px, 768px, and 1440px widths, with no horizontal scrolling.
11. `npm test -- --run`, `npm run check`, `npm run lint`, and `npm run build` finish without errors.

---

## 9. Out of scope

- Copying the reference's background photograph, exact colors, fonts, source code, statistics, skill percentages, activities section, or project carousel.
- Adding new backend services, APIs, CMS content, authentication, analytics, or contact-form submission.
- Publishing the source CV or original metadata-bearing photos.
- Mandatory animations, parallax, scroll snapping, or JavaScript-dependent content.

---

## 10. Pipeline context

- Reference match: `00-reference-match.md`
- Audit: `01-audit.md`
- Ideation: `03-ideation.md`

**Next step**: Implement this brief in the existing SvelteKit route, then run prototype QA against the acceptance criteria.
