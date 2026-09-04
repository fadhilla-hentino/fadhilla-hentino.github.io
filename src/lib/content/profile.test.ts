import { describe, expect, it } from 'vitest';
import { career, education, navigationItems, profile, selectedWork } from './profile';

describe('homepage profile content', () => {
	it('foregrounds the current Extend leadership role', () => {
		expect(profile.role).toContain('Engineering Manager');
		expect(career[0]).toMatchObject({ company: 'AccelByte', role: 'Engineering Manager II' });
	});

	it('keeps the résumé sections substantive', () => {
		expect(selectedWork).toHaveLength(3);
		expect(education).toHaveLength(2);
	});

	it('defines the approved page navigation in order', () => {
		expect(navigationItems.map(({ label }) => label)).toEqual([
			'Home',
			'About',
			'Resume',
			'Selected Work',
			'Practice',
			'Education',
			'Contact'
		]);
		expect(navigationItems.every(({ href, sectionId }) => href === `#${sectionId}`)).toBe(true);
	});
});
