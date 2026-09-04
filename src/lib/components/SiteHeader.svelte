<script lang="ts">
	import { profile } from '$lib/content/profile';
</script>

<header class="site-header">
	<a class="wordmark" href="#top" aria-label="{profile.name}, home">{profile.name}<span>.</span></a>
	<nav aria-label="Primary navigation">
		<a href="#about">About</a>
		<a href="#experience">Experience</a>
		<a href="#work">Selected work</a>
		<a href="#practice">Practice</a>
	</nav>
	<a class="contact-link" href="#contact">Start a conversation <span aria-hidden="true">↗</span></a>
</header>

<style>
	.site-header {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		align-items: center;
		gap: var(--space-2);
		max-width: var(--max-width);
		padding: 1.5rem var(--page-gutter);
		margin: 0 auto;
		border-bottom: 1px solid var(--line);
	}

	a {
		font-size: 0.83rem;
		font-weight: 650;
		text-decoration: none;
	}

	.wordmark {
		font-family: Georgia, 'Times New Roman', serif;
		font-size: 1.25rem;
		font-weight: 600;
		letter-spacing: -0.04em;
	}

	.wordmark span {
		color: var(--sea-blue);
	}

	nav {
		display: flex;
		gap: clamp(0.75rem, 2vw, 1.5rem);
	}

	nav a {
		color: var(--muted-ink);
	}

	.contact-link {
		justify-self: end;
		color: var(--sea-blue-dark);
	}

	@media (max-width: 48rem) {
		.site-header {
			grid-template-columns: 1fr auto;
		}

		nav {
			grid-column: 1 / -1;
			grid-row: 2;
			flex-wrap: wrap;
		}
	}

	@media (max-width: 25rem) {
		.contact-link {
			font-size: 0.75rem;
		}
	}
</style>
