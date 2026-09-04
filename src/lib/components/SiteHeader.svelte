<script lang="ts">
	import { onMount } from 'svelte';
	import { navigationItems, profile } from '$lib/content/profile';

	let menuOpen = false;
	let activeSection = 'top';
	let enhanced = false;

	onMount(() => {
		enhanced = true;
		if (!('IntersectionObserver' in window)) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((entry) => entry.isIntersecting)
					.sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

				if (visible) activeSection = visible.target.id;
			},
			{ rootMargin: '-20% 0px -65%', threshold: [0, 0.2, 0.5] }
		);

		navigationItems.forEach(({ sectionId }) => {
			const section = document.getElementById(sectionId);
			if (section) observer.observe(section);
		});

		return () => observer.disconnect();
	});
</script>

<header class="site-header" class:enhanced>
	<div class="header-inner">
		<button
			class="menu-button"
			type="button"
			aria-controls="primary-navigation"
			aria-expanded={menuOpen}
			onclick={() => (menuOpen = !menuOpen)}
		>
			<span>{menuOpen ? 'Close navigation' : 'Open navigation'}</span>
			<span class="menu-icon" aria-hidden="true">{menuOpen ? '×' : '≡'}</span>
		</button>

		<nav id="primary-navigation" class:menu-open={menuOpen} aria-label="Primary navigation">
			{#each navigationItems as item (item.sectionId)}
				<a
					href={item.href}
					aria-current={activeSection === item.sectionId ? 'location' : undefined}
					onclick={() => (menuOpen = false)}
				>{item.label}</a
				>
			{/each}
		</nav>
	</div>
</header>

<style>
	.site-header {
		position: sticky;
		top: 0;
		z-index: 20;
		min-height: var(--header-height);
		color: var(--canvas);
		background: var(--deep-ocean);
		border-bottom: 1px solid color-mix(in srgb, var(--mint) 22%, transparent);
	}

	.header-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
		max-width: var(--max-width);
		min-height: var(--header-height);
		padding-inline: var(--page-gutter);
		margin-inline: auto;
	}

	a {
		color: inherit;
		font-size: 0.76rem;
		font-weight: 700;
		letter-spacing: 0.02em;
		text-decoration: none;
	}

	nav {
		display: flex;
		align-items: stretch;
		gap: clamp(0.8rem, 2vw, 1.6rem);
		align-self: stretch;
	}

	nav a {
		position: relative;
		display: flex;
		align-items: center;
		white-space: nowrap;
	}

	nav a::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		height: 2px;
		content: '';
		background: var(--mint);
		transform: scaleX(0);
		transform-origin: center;
	}

	nav a[aria-current='location']::after {
		transform: scaleX(1);
	}

	.menu-button {
		display: none;
		align-items: center;
		gap: 0.5rem;
		padding: 0.55rem 0;
		color: var(--canvas);
		background: transparent;
		border: 0;
		font-size: 0.78rem;
		font-weight: 700;
		cursor: pointer;
	}

	.menu-icon {
		color: var(--mint);
		font-size: 1.25rem;
		line-height: 1;
	}

	a:focus-visible,
	button:focus-visible {
		outline-color: var(--mint);
	}

	@media (max-width: 48rem) {
		.header-inner {
			position: relative;
			flex-wrap: wrap;
			gap: 0;
		}

		.enhanced .menu-button {
			display: flex;
		}

		nav {
			display: flex;
			flex: 0 0 calc(100% + (2 * var(--page-gutter)));
			flex-direction: column;
			gap: 0;
			order: 3;
			align-self: auto;
			padding: 0.5rem var(--page-gutter) 1rem;
			margin-inline: calc(-1 * var(--page-gutter));
			background: var(--deep-ocean);
		}

		.enhanced nav {
			display: none;
		}

		.enhanced nav.menu-open {
			display: flex;
		}

		nav a {
			min-height: 2.75rem;
			border-top: 1px solid color-mix(in srgb, var(--mint) 16%, transparent);
		}

		nav a::after {
			right: auto;
			bottom: 0.4rem;
			width: 1.5rem;
		}
	}
</style>
