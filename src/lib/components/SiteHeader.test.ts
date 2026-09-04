// @vitest-environment jsdom

import '@testing-library/jest-dom/vitest';
import { fireEvent, render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import SiteHeader from './SiteHeader.svelte';

describe('SiteHeader', () => {
	it('marks the navigation as enhanced after hydration', () => {
		render(SiteHeader);

		expect(screen.getByRole('banner')).toHaveClass('enhanced');
	});

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
