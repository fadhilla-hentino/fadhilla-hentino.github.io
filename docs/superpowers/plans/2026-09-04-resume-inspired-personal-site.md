# Resume-Inspired Personal Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restyle the SvelteKit homepage as a long-form, résumé-led portfolio using CV-backed, confidentiality-safe content.

**Architecture:** Keep the existing static SvelteKit route and global visual tokens. Move all revised résumé content into the typed `profile.ts` module, then let the route render a full-screen hero, about, résumé timeline, selected work, practice, education, and contact sections from that data. The decorative system map remains a non-interactive visual in the hero.

**Tech Stack:** SvelteKit 2, Svelte 5, TypeScript, CSS, ESLint, svelte-check, Vite.

**Spec:** `docs/superpowers/specs/2026-09-04-resume-inspired-personal-site-design.md`

## Global Constraints

- Preserve the warm-white canvas, deep ink text, sea-blue accents, pale-blue surfaces, hairline borders, and no gradients.
- Do not introduce a profile image, skill bars, numerical counters, icon clouds, excessive shadows, or runtime data dependencies.
- Keep the system map decorative, hidden from assistive technology, and unfocusable.
- Use CV facts only as local source material; do not add the CV to the repository or publish it.
- Keep work descriptions confidentiality-safe: no customer names, internal project names, or precise internal metrics.
- Ensure all interactive controls expose a visible keyboard focus state and no layout causes horizontal scrolling at 320 px, 768 px, or 1440 px.
- Do not create commits; repository integration remains under the user's control.

---

### Task 1: Add CV-backed homepage content

**Files:**
- Modify: `src/lib/content/profile.ts`
- Create: `src/lib/content/profile.test.ts`
- Modify: `package.json`

**Interfaces:**
- Produces `about`, `career`, `selectedWork`, `practices`, and `education` typed exports.
- `career` entries expose `company`, `role`, `period`, and `summary` strings.
- `selectedWork` entries continue to use the `Impact` interface consumed by `ImpactCard.svelte`.

- [ ] **Step 1: Add Vitest and a failing content contract test**

```ts
import { describe, expect, it } from 'vitest';
import { career, education, profile, selectedWork } from './profile';

describe('homepage profile content', () => {
	it('foregrounds the current Extend leadership role', () => {
		expect(profile.role).toContain('Engineering Manager');
		expect(career[0]).toMatchObject({ company: 'AccelByte', role: 'Engineering Manager II' });
	});

	it('keeps the résumé sections substantive', () => {
		expect(selectedWork).toHaveLength(3);
		expect(education).toHaveLength(2);
	});
});
```

- [ ] **Step 2: Verify the test fails because the new exports do not exist**

Run: `npm test -- --run src/lib/content/profile.test.ts`

Expected: FAIL with missing `career`, `education`, or `selectedWork` exports.

- [ ] **Step 3: Add the typed résumé data and test command**

```ts
export type CareerEntry = {
	company: string;
	role: string;
	period: string;
	summary: string;
};

export const career: CareerEntry[] = [
	{
		company: 'AccelByte',
		role: 'Engineering Manager II',
		period: '2023 — Present',
		summary: 'Leading the Extend platform team for game-developer backend services.'
	}
];
```

Add `"test": "vitest"` to `package.json` and replace prototype exports with the full, CV-backed data defined in the specification.

- [ ] **Step 4: Verify the content contract passes**

Run: `npm test -- --run src/lib/content/profile.test.ts`

Expected: PASS with two tests passing.

### Task 2: Adapt reusable components to résumé presentation

**Files:**
- Modify: `src/lib/components/SiteHeader.svelte`
- Modify: `src/lib/components/SectionHeading.svelte`
- Modify: `src/lib/components/ImpactCard.svelte`

**Interfaces:**
- `SiteHeader` links to `#about`, `#experience`, `#work`, `#practice`, and `#contact`.
- `SectionHeading` continues to accept `eyebrow`, `title`, and optional `copy`.
- `ImpactCard` continues to consume an `Impact` entry and renders context, engineering decision, outcome, and tags.

- [ ] **Step 1: Update header anchors and labels**

```svelte
<nav aria-label="Primary navigation">
	<a href="#about">About</a>
	<a href="#experience">Experience</a>
	<a href="#work">Selected work</a>
	<a href="#practice">Practice</a>
</nav>
```

- [ ] **Step 2: Tighten reusable presentation for the résumé rhythm**

Keep `SectionHeading` editorial and narrow. Update `ImpactCard` to use a text-first stacked layout with a thin sea-blue rule; retain each semantic narrative label and remove any decorative treatment that resembles a generic portfolio tile.

- [ ] **Step 3: Verify component type and accessibility checks**

Run: `npm run check`

Expected: PASS with zero errors and zero warnings.

### Task 3: Compose the long-form homepage

**Files:**
- Modify: `src/routes/+page.svelte`

**Interfaces:**
- Consumes the new `profile`, `about`, `career`, `selectedWork`, `practices`, and `education` exports.
- Keeps `SystemMap`, `SiteHeader`, `SectionHeading`, and `ImpactCard` as the route's visual building blocks.

- [ ] **Step 1: Write the page section order using stable keyed loops**

```svelte
<section id="experience" class="section resume-section" aria-labelledby="experience-heading">
	<SectionHeading eyebrow="Resume" title="Work that compounds." />
	<div class="timeline">
		{#each career as item (item.company + item.role)}
			<article>
				<p class="period">{item.period}</p>
				<div><h3>{item.role}</h3><p class="company">{item.company}</p><p>{item.summary}</p></div>
			</article>
		{/each}
	</div>
</section>
```

- [ ] **Step 2: Implement the sections in narrative order**

Render: a full-screen image-free hero; About with profile facts and practice areas; Experience; Selected Work using `ImpactCard`; Technical Practice; Education; Contact. Use `#work` for selected work and update hero calls to action to `#experience` and `#contact`.

- [ ] **Step 3: Add metadata matching the current role**

```svelte
<svelte:head>
	<title>Fadhilla Eka Hentino — Engineering Manager</title>
	<meta name="description" content="Engineering Manager building dependable game backend and platform systems." />
	<meta property="og:title" content="Fadhilla Eka Hentino — Engineering Manager" />
	<meta property="og:type" content="website" />
</svelte:head>
```

- [ ] **Step 4: Verify the route compiles and remains accessible**

Run: `npm run check`

Expected: PASS with zero errors and zero warnings.

### Task 4: Deliver responsive visual behavior and validate

**Files:**
- Modify: `src/routes/+page.svelte`
- Modify: `src/app.css`
- Modify: `README.md`

**Interfaces:**
- No new runtime interfaces; CSS applies to the route's named sections and existing global focus/reduced-motion rules.

- [ ] **Step 1: Apply the reference-inspired layout behavior**

Use a one-viewport hero with a compact top navigation, alternating neutral/pale-blue bands, and timeline rows with a fixed period column on desktop. At `max-width: 52rem`, collapse navigation and every grid/timeline to one column. Retain `min-width: 20rem` and ensure all wide content uses `minmax(0, 1fr)` or wrapping flex behavior.

- [ ] **Step 2: Preserve global accessibility and palette requirements**

Keep the existing `a:focus-visible` outline, `prefers-reduced-motion` override, warm-white background, and sea-blue selection style. Do not add gradients, shadows, progress bars, or counter elements.

- [ ] **Step 3: Update README content guidance**

State that CV-derived homepage facts are centralized in `src/lib/content/profile.ts` and must be reviewed for confidentiality before publishing.

- [ ] **Step 4: Run automated validation**

Run: `npm test -- --run && npm run check && npm run lint && npm run build`

Expected: all commands exit successfully with no errors or warnings.

- [ ] **Step 5: Run the local responsive smoke test**

Run: `npm run dev -- --host 127.0.0.1`

Check the hero, `#about`, `#experience`, `#work`, `#practice`, and `#contact` at 320 px, 768 px, and 1440 px. Confirm no horizontal scrollbar, all anchors land on visible section headings, and keyboard focus is visible on every header and contact link.
