# Ocean Resume Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the personal-site homepage around the approved Ocean Resume structure, interactions, palette, and centered portrait crop.

**Architecture:** Preserve the static SvelteKit route and typed CV-backed content. Move navigation configuration into the content module, make `SiteHeader.svelte` the sole owner of mobile-menu and active-section state, and compose the long page from existing focused components. CSS remains code-native and static; JavaScript only enhances navigation orientation.

**Tech Stack:** SvelteKit 2, Svelte 5, TypeScript, CSS, Vitest, Testing Library, ESLint, svelte-check, Vite.

**Spec:** `docs/superpowers/specs/2026-09-04-ocean-resume-redesign.md`

## Global Constraints

- Use the exact palette defined in the approved design brief: deep ocean `#0b2633`, ocean surface `#123947`, warm ivory `#f7f2e8`, paper `#fffdf8`, sea glass `#dfeeee`, deep teal `#0a6c66`, mint `#8cded2`, ink `#13262d`, muted ink `#556b73`, and hairline `#c6d7d7`.
- Use flat colors only; no gradients, large shadows, skill bars, counters, icon clouds, carousels, parallax, or scroll snapping.
- Keep content static and usable without JavaScript; active navigation and mobile disclosure are progressive enhancements.
- Preserve visible focus, semantic landmarks, reduced-motion behavior, and 320px reflow.
- Do not add the source CV or metadata-bearing source photos to the repository.
- Do not commit changes unless the user explicitly requests a commit after implementation.

---

### Task 1: Lock navigation and content contracts

**Files:**
- Modify: `package.json`
- Modify: `src/lib/content/profile.ts`
- Modify: `src/lib/content/profile.test.ts`

**Interfaces:**
- Produces `NavigationItem = { href: string; label: string; sectionId: string }`.
- Produces `navigationItems: NavigationItem[]` ordered Home, About, Resume, Selected Work, Practice, Education, Contact.
- Existing `profile`, `about`, `career`, `selectedWork`, `practices`, and `education` exports remain compatible.

- [ ] **Step 1: Add the failing navigation contract test**

```ts
import { navigationItems } from './profile';

it('defines the approved page navigation in order', () => {
	expect(navigationItems.map(({ label }) => label)).toEqual([
		'Home', 'About', 'Resume', 'Selected Work', 'Practice', 'Education', 'Contact'
	]);
	expect(navigationItems.every(({ href, sectionId }) => href === `#${sectionId}`)).toBe(true);
});
```

- [ ] **Step 2: Run the test and confirm the missing export fails**

Run: `npm test -- --run src/lib/content/profile.test.ts`

Expected: FAIL because `navigationItems` is not exported.

- [ ] **Step 3: Implement the navigation data**

```ts
export type NavigationItem = {
	href: string;
	label: string;
	sectionId: string;
};

export const navigationItems: NavigationItem[] = [
	{ href: '#top', label: 'Home', sectionId: 'top' },
	{ href: '#about', label: 'About', sectionId: 'about' },
	{ href: '#experience', label: 'Resume', sectionId: 'experience' },
	{ href: '#work', label: 'Selected Work', sectionId: 'work' },
	{ href: '#practice', label: 'Practice', sectionId: 'practice' },
	{ href: '#education', label: 'Education', sectionId: 'education' },
	{ href: '#contact', label: 'Contact', sectionId: 'contact' }
];
```

- [ ] **Step 4: Run the content test and confirm it passes**

Run: `npm test -- --run src/lib/content/profile.test.ts`

Expected: PASS.

### Task 2: Build accessible sticky navigation

**Files:**
- Modify: `package.json`
- Modify: `src/lib/components/SiteHeader.svelte`
- Create: `src/lib/components/SiteHeader.test.ts`

**Interfaces:**
- Consumes `navigationItems` from `$lib/content/profile`.
- Maintains `menuOpen: boolean` and `activeSection: string` locally.
- Exposes native anchor links and one mobile button with `aria-controls="primary-navigation"` and bound `aria-expanded`.

- [ ] **Step 1: Add component-test dependencies and the failing mobile-menu test**

Add `@testing-library/svelte`, `@testing-library/jest-dom`, and `jsdom` as development dependencies, then create:

```ts
// @vitest-environment jsdom
import '@testing-library/jest-dom/vitest';
import { fireEvent, render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import SiteHeader from './SiteHeader.svelte';

describe('SiteHeader', () => {
	it('opens and closes the mobile navigation', async () => {
		render(SiteHeader);
		const button = screen.getByRole('button', { name: 'Open navigation' });
		expect(button).toHaveAttribute('aria-expanded', 'false');
		await fireEvent.click(button);
		expect(screen.getByRole('button', { name: 'Close navigation' })).toHaveAttribute('aria-expanded', 'true');
		await fireEvent.click(screen.getByRole('link', { name: 'About' }));
		expect(screen.getByRole('button', { name: 'Open navigation' })).toHaveAttribute('aria-expanded', 'false');
	});
});
```

- [ ] **Step 2: Run the component test and confirm the missing button fails**

Run: `npm test -- --run src/lib/components/SiteHeader.test.ts`

Expected: FAIL because the current header has no navigation button.

- [ ] **Step 3: Implement mobile and active-section state**

```svelte
<script lang="ts">
	import { onMount } from 'svelte';
	import { navigationItems, profile } from '$lib/content/profile';

	let menuOpen = false;
	let activeSection = 'top';

	onMount(() => {
		if (!('IntersectionObserver' in window)) return;
		const observer = new IntersectionObserver((entries) => {
			const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (visible) activeSection = visible.target.id;
		}, { rootMargin: '-25% 0px -60%', threshold: [0, 0.2, 0.5] });
		navigationItems.forEach(({ sectionId }) => {
			const section = document.getElementById(sectionId);
			if (section) observer.observe(section);
		});
		return () => observer.disconnect();
	});
</script>
```

Render the approved wordmark, seven links, and labelled mobile button. Close the menu on link selection. Set `aria-current="location"` only when `activeSection === sectionId`.

- [ ] **Step 4: Run component tests and static checks**

Run: `npm test -- --run src/lib/components/SiteHeader.test.ts && npm run check`

Expected: PASS with zero Svelte errors or warnings.

### Task 3: Recompose the Ocean Resume homepage

**Files:**
- Modify: `src/routes/+page.svelte`
- Modify: `src/lib/components/ImpactCard.svelte`
- Modify: `src/lib/components/SectionHeading.svelte`
- Modify: `src/lib/components/SystemMap.svelte`

**Interfaces:**
- `SectionHeading` keeps `id`, `eyebrow`, `title`, and optional `copy` props and renders a centered introduction.
- `ImpactCard` keeps the `impact: Impact` prop and renders one full-width evidence row.
- `SystemMap` remains `aria-hidden="true"` and accepts no props.

- [ ] **Step 1: Reorder and label the page sections**

```svelte
<section id="top" class="hero" aria-labelledby="hero-heading">…</section>
<section id="about" class="section about-section" aria-labelledby="about-heading">…</section>
<section id="experience" class="section resume-section" aria-labelledby="experience-heading">…</section>
<section id="work" class="section work-section" aria-labelledby="work-heading">…</section>
<section id="practice" class="section practice-section dark-section" aria-labelledby="practice-heading">…</section>
<section id="education" class="section education-section" aria-labelledby="education-heading">…</section>
<footer id="contact" aria-labelledby="contact-heading">…</footer>
```

- [ ] **Step 2: Build the approved centered hero**

Render portrait fallback initials behind the portrait, a centered `176px` circular image, profile name, role, focus line “Platform leadership · Reliable systems · AI-native workflows”, Email/LinkedIn/GitHub links, the decorative system map, and “Explore my work” link to `#about`.

- [ ] **Step 3: Build centered introductions and reference-aligned content**

Use consistent `SectionHeading` instances for About, Resume, Selected Work, Practice, and Education. Render About as Profile/Core Practice columns, Resume with a central desktop timeline spine, Selected Work as a vertical list, Practice as a dark two-column chapter, and Education as compact chronology rows.

- [ ] **Step 4: Implement portrait fallback without JavaScript dependency**

```svelte
<div class="portrait-frame">
	<span aria-hidden="true">FEH</span>
	<img src="/profile-portrait.webp" alt="Fadhilla Eka Hentino" />
</div>
```

Position the fallback and image in the same grid cell so the initials remain behind a successfully loaded image and appear naturally if the image cannot render.

- [ ] **Step 5: Run static checks**

Run: `npm run check && npm run lint`

Expected: both commands pass without errors or warnings.

### Task 4: Apply the Ocean Resume palette and responsive behavior

**Files:**
- Modify: `src/app.css`
- Modify: `src/routes/+page.svelte`
- Modify: `src/lib/components/SiteHeader.svelte`

**Interfaces:**
- Global tokens expose `--deep-ocean`, `--ocean-surface`, `--canvas`, `--paper`, `--pale-blue`, `--sea-blue`, `--mint`, `--ink`, `--muted-ink`, `--line`, and `--header-height`.
- Every section uses `scroll-margin-top: calc(var(--header-height) + 1rem)`.

- [ ] **Step 1: Replace global color tokens**

```css
:root {
	--deep-ocean: #0b2633;
	--ocean-surface: #123947;
	--canvas: #f7f2e8;
	--paper: #fffdf8;
	--pale-blue: #dfeeee;
	--sea-blue: #0a6c66;
	--mint: #8cded2;
	--ink: #13262d;
	--muted-ink: #556b73;
	--line: #c6d7d7;
	--header-height: 4.5rem;
}
```

- [ ] **Step 2: Implement desktop composition**

Use a deep-ocean hero of at least `calc(100svh - var(--header-height))`, centered content, restrained system-map background, centered section headings, alternating ivory/sea-glass chapters, a central timeline spine, full-width impact rows, and a deep-ocean Practice/Contact treatment.

- [ ] **Step 3: Implement mobile composition**

At `max-width: 48rem`, set `--header-height: 4rem`, use the disclosure navigation, render the portrait at `144px`, move the timeline spine to the left, stack About/Practice/Footer content, and keep every element within `min-width: 0` containers.

- [ ] **Step 4: Verify static quality**

Run: `npm run check && npm run lint && npm run build && git diff --check`

Expected: all commands exit successfully with no warnings or whitespace errors.

### Task 5: Recenter and validate the portrait asset

**Files:**
- Modify: `static/profile-portrait.webp`

**Interfaces:**
- The route continues to consume `/profile-portrait.webp`.
- Output is a square metadata-free WebP of at least 320×320 pixels.

- [ ] **Step 1: Recreate the crop from the close portrait source**

Use `cwebp` to crop the source around the face midpoint, output at `400×400`, and omit metadata. Adjust the crop origin after visual inspection so the face midpoint—not the image midpoint—lands at `(200, 200)`.

- [ ] **Step 2: Verify metadata and dimensions**

Run: `file static/profile-portrait.webp && strings -a static/profile-portrait.webp | rg -i 'gps|iphone|apple|exif'`

Expected: `file` reports `400x400`; `rg` returns no matches.

- [ ] **Step 3: Inspect desktop and mobile rendering**

Run the app and inspect the crop at `176px` and `144px`. Confirm the face is centered horizontally and vertically, and that hair, eyes, and chin have comfortable breathing room.

- [ ] **Step 4: Run the complete verification suite**

Run: `npm test -- --run && npm run check && npm run lint && npm run build`

Expected: all tests and validation commands pass without errors.
