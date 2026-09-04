<script lang="ts">
	export let eyebrow: string;
	export let title: string;
	export let copy: string | undefined = undefined;
	export let id: string | undefined = undefined;
</script>

<header class="section-heading">
	<p>{eyebrow}</p>
	<h2 {id}>{title}</h2>
	{#if copy}
		<div>{copy}</div>
	{/if}
</header>

<style>
	.section-heading {
		max-width: 44rem;
	}

	p {
		margin: 0 0 var(--space-2);
		color: var(--sea-blue-dark);
		font-size: 0.75rem;
		font-weight: 750;
		letter-spacing: 0.13em;
		text-transform: uppercase;
	}

	h2 {
		max-width: 13ch;
		margin: 0;
		font-family: Georgia, 'Times New Roman', serif;
		font-size: clamp(2rem, 4vw, 3.4rem);
		font-weight: 500;
		letter-spacing: -0.04em;
		line-height: 1.05;
	}

	div {
		margin-top: var(--space-3);
		color: var(--muted-ink);
		font-size: 1.05rem;
		line-height: 1.7;
	}
</style>
