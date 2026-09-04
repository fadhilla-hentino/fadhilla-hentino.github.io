<script lang="ts">
	import type { Impact } from '$lib/content/profile';

	export let impact: Impact;
</script>

<article class="card">
	<div class="card-rule"></div>
	<h3>{impact.title}</h3>
	<div class="narrative">
		<div>
			<p class="label">Context</p>
			<p>{impact.context}</p>
		</div>
		<div>
			<p class="label">Engineering decision</p>
			<p>{impact.decision}</p>
		</div>
		<div>
			<p class="label">Outcome</p>
			<p>{impact.outcome}</p>
		</div>
	</div>
	<ul aria-label="Focus areas">
		{#each impact.tags as tag (tag)}
			<li>{tag}</li>
		{/each}
	</ul>
</article>

<style>
	.card {
		display: grid;
		grid-template-columns: minmax(13rem, 0.8fr) minmax(0, 1.4fr);
		gap: clamp(2rem, 6vw, 6rem);
		padding: clamp(2rem, 5vw, 4rem) 0;
		border-top: 1px solid var(--line);
	}

	.card-rule {
		width: 2.5rem;
		height: 2px;
		background: var(--sea-blue);
	}

	h3 {
		max-width: 20ch;
		margin: var(--space-3) 0 0;
		font-family: Georgia, 'Times New Roman', serif;
		font-size: clamp(1.5rem, 2.5vw, 2rem);
		font-weight: 500;
		letter-spacing: -0.025em;
		line-height: 1.15;
	}

	.narrative {
		display: grid;
		gap: var(--space-3);
	}

	p {
		margin: 0;
		color: var(--muted-ink);
		font-size: 0.96rem;
		line-height: 1.6;
	}

	p.label {
		margin-bottom: 0.35rem;
		color: var(--ink);
		font-size: 0.69rem;
		font-weight: 750;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}

	ul {
		grid-column: 2;
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		padding: 0;
		margin: var(--space-4) 0 0;
		list-style: none;
	}

	li {
		padding: 0.35rem 0.55rem;
		background: var(--pale-blue);
		border: 1px solid var(--line);
		color: var(--sea-blue-dark);
		font-size: 0.74rem;
	}

	@media (max-width: 48rem) {
		.card {
			grid-template-columns: 1fr;
			gap: var(--space-3);
		}

		ul {
			grid-column: 1;
			margin-top: 0;
		}
	}
</style>
