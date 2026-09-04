## Goal
Create a reviewable SvelteKit HTML/CSS prototype of the personal-site homepage that realizes the quiet-authority, white-and-sea-blue direction without requiring any paid API or generated visual assets.

## Approach
Build the mockup directly as the first SvelteKit route rather than as a disposable static HTML file: the user can review it in a browser, learn the chosen stack, and retain the approved work as the production foundation. The design remains content-led and static-first, using CSS-drawn system-map artwork instead of a generated image so the visual language is distinctive, fast, accessible, and free to iterate.

## File Changes
- **Modify** [README.md](air-file://79qm2dt9ir132enppofg/Users/fadhilla/Documents/fadhil/fadhilla-ai-web/fadhilla-ai-web/README.md?type=file&root=%252F): replace the placeholder with the SvelteKit setup, preview, check, and build instructions.
- **Create** `package.json`, `svelte.config.js`, `vite.config.ts`, `tsconfig.json`, and `eslint.config.js`: establish a minimal SvelteKit + TypeScript toolchain and validation commands.
- **Create** `src/app.html`, `src/app.css`, and `src/routes/+layout.svelte`: provide document structure, global tokens, typography, accessibility defaults, and page shell.
- **Create** `src/lib/content/profile.ts`: centralize all prototype copy, impact cards, experience entries, skills, and external-link placeholders.
- **Create** `src/lib/components/SectionHeading.svelte`, `ImpactCard.svelte`, `SystemMap.svelte`, and `SiteHeader.svelte`: encapsulate the reusable visual patterns and CSS-only hero artwork.
- **Create** `src/routes/+page.svelte`: compose the complete responsive homepage mockup for review.
- **Create** `static/favicon.svg`: add a lightweight, original sea-blue/ink site mark.

## Implementation Steps
### Task 1: Set up the reviewable SvelteKit shell
1. Create the SvelteKit TypeScript project configuration and scripts for `dev`, `check`, `lint`, and production `build`.
2. Configure static-friendly application behavior with no authentication, APIs, data store, CMS, or runtime server dependency.
3. Document startup and validation commands in [README.md](air-file://79qm2dt9ir132enppofg/Users/fadhilla/Documents/fadhil/fadhilla-ai-web/fadhilla-ai-web/README.md?type=file&root=%252F).

### Task 2: Define the content and visual tokens
1. Add editable prototype content for Fadhilla’s backend-platform positioning, three anonymized impact stories, a concise experience timeline, technical-practice groups, and contact placeholders in `src/lib/content/profile.ts`.
2. Define the palette in `src/app.css`: warm white canvas, deep ink text, accessible deep sea-blue interaction color, pale-blue surfaces, hairline borders, and no gradients.
3. Establish an editorial typographic scale, readable line lengths, spacing tokens, visible focus styles, and reduced-motion behavior.

### Task 3: Build the homepage mockup
1. Implement `src/routes/+page.svelte` with a compact header, hero, selected-impact section, experience section, technical-practice section, and contact footer.
2. Make the hero’s core message “Building dependable systems for game developers,” with direct work/contact calls to action and no profile image.
3. Build `SystemMap.svelte` as an abstract, semantic decorative SVG/CSS composition of sea-blue paths and nodes; hide it from assistive technology so it does not create noise.
4. Render impact narratives through `ImpactCard.svelte` using a consistent context, engineering-decision, and outcome layout instead of skill percentages, counters, or generic gallery tiles.
5. Add internal anchor navigation and external-link placeholders with descriptive labels.

### Task 4: Make the mockup responsive and review-ready
1. Design desktop first with an asymmetric hero and editorial card layout, then collapse content to one clear column below tablet widths.
2. Confirm CTA targets, section anchor positions, headings, card wrapping, and system-map placement remain usable at 320 px, 768 px, and 1440 px widths.
3. Add page title, description, and social metadata that reflect backend-platform expertise.

### Task 5: Validate the prototype
1. Run Svelte type/accessibility checks, linting, and the production build.
2. Review the local page in a browser at desktop and mobile sizes; capture feedback on hierarchy, palette balance, and content specificity before expanding the site.
3. Keep the mockup assets and layout components production-quality so approved design work is not discarded.

## Acceptance Criteria
- The local route renders a complete personal-site homepage containing navigation, hero, three impact cards, experience, technical practice, and contact footer.
- The visual system uses a warm-white background, deep ink text, sea-blue accents, and pale-blue surfaces; no gradients, excessive shadows, skill bars, stat counters, or generic icon clouds are present.
- The hero communicates backend platform focus and exposes a work/contact action before the first scroll at a 1440 px viewport.
- The abstract system map is decorative only and does not add focusable items or screen-reader content.
- Content is sourced from one typed module; changing an impact item does not require editing page layout markup.
- The page remains free of horizontal scrolling at 320 px, 768 px, and 1440 px viewport widths.
- Keyboard navigation reaches all interactive controls in a visible focus state.
- `npm run check`, `npm run lint`, and `npm run build` finish without errors.

## Verification Steps
- Install declared dependencies, then run `npm run dev` and inspect the homepage locally.
- Run `npm run check`, `npm run lint`, and `npm run build`.
- Test at 320 px, 768 px, and 1440 px using browser responsive mode; verify no clipped content, overlap, or horizontal scrolling.
- Tab through navigation and calls to action; confirm focus visibility and link destinations.
- Temporarily enable reduced-motion preferences and confirm no information depends on animation.
- Review the three impact cards for confidentiality before replacing prototype copy with final statements.

## Risks & Mitigations
- **Design becomes a one-off artifact:** Building a separate raw HTML file would be discarded when SvelteKit starts. Mitigate by implementing the mockup in the actual SvelteKit route and components.
- **Sea blue becomes generic SaaS styling:** An overly saturated or overused accent will weaken the editorial feel. Mitigate by reserving sea blue for controls, rules, and the system map while keeping it below roughly 10% of the screen area.
- **Confidential information leaks through example copy:** Backend work can be identifiable even without product names. Mitigate by reviewing every impact statement for organization, system, and metric combinations before publication.
- **Decorative systems visual harms clarity:** Complex diagrams can imply technical depth without evidence. Mitigate by keeping the map subtle and treating impact cards as the primary proof.