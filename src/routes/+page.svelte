<script lang="ts">
	import ImpactCard from '$lib/components/ImpactCard.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import SystemMap from '$lib/components/SystemMap.svelte';
	import { about, career, education, practices, profile, selectedWork } from '$lib/content/profile';
</script>

<svelte:head>
	<title>Fadhilla Eka Hentino — Engineering Manager</title>
	<meta name="description" content="Engineering Manager building dependable game backend and platform systems." />
	<meta property="og:title" content="Fadhilla Eka Hentino — Engineering Manager" />
	<meta
		property="og:description"
		content="Game backend platform engineering, reliable systems, and AI-native engineering workflows."
	/>
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary" />
</svelte:head>

<div id="top">
	<SiteHeader />

	<main id="main-content">
		<section class="hero" aria-labelledby="hero-heading">
			<div class="hero-copy">
				<p class="eyebrow">{profile.role}</p>
				<h1 id="hero-heading">{profile.name}</h1>
				<p class="hero-statement">{profile.intro}</p>
				<div class="actions">
					<a class="button button-primary" href="#experience">View experience <span aria-hidden="true">↓</span></a>
					<a class="button button-secondary" href="#contact">Start a conversation <span aria-hidden="true">↗</span></a>
				</div>
			</div>
			<div class="hero-art">
				<SystemMap />
				<img class="hero-portrait" src="/profile-portrait.webp" alt="Portrait of Fadhilla Eka Hentino" />
			</div>
			<a class="scroll-cue" href="#about">Scroll to explore <span aria-hidden="true">↓</span></a>
		</section>

		<section id="about" class="section about-section band" aria-labelledby="about-heading">
			<SectionHeading id="about-heading" eyebrow="About" title="Building systems that let teams move with confidence." />
			<div class="about-content">
				<p class="lead">{about.lead}</p>
				<div class="profile-details">
					<h3>Profile</h3>
					<dl>
						{#each about.details as [label, value] (label)}
							<div><dt>{label}</dt><dd>{value}</dd></div>
						{/each}
					</dl>
				</div>
			</div>
			<div class="about-actions">
				<a class="button button-primary" href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
				<a class="text-link" href={profile.links.linkedin} target="_blank" rel="noreferrer">View LinkedIn <span aria-hidden="true">↗</span></a>
			</div>
		</section>

		<section id="experience" class="section resume-section" aria-labelledby="experience-heading">
			<SectionHeading
				id="experience-heading"
				eyebrow="Resume"
				title="Work that compounds."
				copy="A career shaped by hands-on software delivery, platform thinking, and the responsibility of leading teams that operate what they build."
			/>
			<div class="timeline-wrap">
				<h3>Experience</h3>
				<div class="timeline">
					{#each career as item (item.company + item.role)}
						<article>
							<p class="period">{item.period}</p>
							<div>
								<h4>{item.role}</h4>
								<p class="company">{item.company}</p>
								<p>{item.summary}</p>
							</div>
						</article>
					{/each}
				</div>
			</div>
		</section>

		<section id="work" class="section work-section band" aria-labelledby="work-heading">
			<SectionHeading
				id="work-heading"
				eyebrow="Selected work"
				title="Evidence behind the approach."
				copy="A few confidentiality-safe examples of the systems questions I bring into engineering leadership."
			/>
			<div class="work-list">
				{#each selectedWork as impact (impact.title)}
					<ImpactCard {impact} />
				{/each}
			</div>
		</section>

		<section id="practice" class="section practice-section" aria-labelledby="practice-heading">
			<SectionHeading
				id="practice-heading"
				eyebrow="Technical practice"
				title="Depth where technology meets responsibility."
				copy="The tools evolve. The practice is making trade-offs legible, teams effective, and the systems they rely on dependable."
			/>
			<div class="practice-grid">
				{#each practices as practice (practice.title)}
					<article>
						<h3>{practice.title}</h3>
						<ul>
							{#each practice.details as detail (detail)}
								<li>{detail}</li>
							{/each}
						</ul>
					</article>
				{/each}
			</div>
		</section>

		<section class="section education-section band" aria-labelledby="education-heading">
			<SectionHeading id="education-heading" eyebrow="Education" title="Continued through practice." />
			<div class="education-list">
				{#each education as item (item.institution)}
					<article>
						<p class="period">{item.period}</p>
						<div><h3>{item.institution}</h3><p>{item.credential}</p></div>
					</article>
				{/each}
			</div>
		</section>
	</main>

	<footer id="contact" aria-labelledby="contact-heading">
		<div>
			<p class="eyebrow">Contact</p>
			<h2 id="contact-heading">Build the steady path.</h2>
			<p>{profile.availability}</p>
		</div>
		<div class="contact-actions">
			<a class="button button-primary" href={profile.links.email}>Email Fadhilla <span aria-hidden="true">↗</span></a>
			<a href={profile.links.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <span aria-hidden="true">↗</span></a>
			<a href={profile.links.github} target="_blank" rel="noreferrer">View GitHub <span aria-hidden="true">↗</span></a>
		</div>
	</footer>
</div>

<style>
	:global(main), :global(footer) { max-width: var(--max-width); padding-inline: var(--page-gutter); margin-inline: auto; }
	:global(main) { max-width: none; padding: 0; }
	:global(main > section) { padding-inline: max(var(--page-gutter), calc((100vw - var(--max-width)) / 2)); }
	.hero { position: relative; display: grid; grid-template-columns: minmax(0, 1fr) minmax(19rem, 0.82fr); align-items: center; gap: clamp(2.5rem, 8vw, 9rem); min-height: min(48rem, calc(100vh - 5rem)); max-width: var(--max-width); padding-block: var(--space-5) var(--space-6); margin: 0 auto; }
	.eyebrow { margin: 0 0 var(--space-2); color: var(--sea-blue-dark); font-size: 0.75rem; font-weight: 750; letter-spacing: 0.13em; text-transform: uppercase; }
	h1, h2 { font-family: Georgia, 'Times New Roman', serif; font-weight: 500; letter-spacing: -0.05em; }
	h1 { max-width: 8ch; margin: 0; font-size: clamp(3.7rem, 8vw, 7.4rem); line-height: 0.9; }
	.hero-statement { max-width: 36rem; margin: var(--space-3) 0 0; color: var(--muted-ink); font-size: clamp(1.1rem, 1.8vw, 1.35rem); line-height: 1.6; }
	.actions, .contact-actions, .about-actions { display: flex; flex-wrap: wrap; align-items: center; gap: var(--space-2); margin-top: var(--space-4); }
	.button { display: inline-flex; gap: 0.55rem; align-items: center; justify-content: center; padding: 0.8rem 1rem; font-size: 0.86rem; font-weight: 700; text-decoration: none; }
	.button-primary { color: var(--canvas); background: var(--sea-blue); border: 1px solid var(--sea-blue); }
	.button-primary:hover { color: var(--canvas); background: var(--sea-blue-dark); border-color: var(--sea-blue-dark); }
	.button-secondary { color: var(--sea-blue-dark); border: 1px solid var(--sea-blue); }
	.text-link { color: var(--sea-blue-dark); font-size: 0.88rem; font-weight: 700; }
	.hero-art { position: relative; padding: clamp(1rem, 4vw, 3rem) 0; }
	.hero-art::before { position: absolute; inset: 0 7% 0 0; z-index: -1; content: ''; background: var(--pale-blue); border: 1px solid var(--line); }
	.hero-portrait { position: absolute; top: 50%; left: 49%; width: clamp(8.5rem, 18vw, 13.5rem); aspect-ratio: 1; border: 0.6rem solid var(--canvas); border-radius: 50%; object-fit: cover; transform: translate(-50%, -50%); }
	.scroll-cue { position: absolute; bottom: 1.5rem; left: 0; color: var(--muted-ink); font-size: 0.78rem; font-weight: 700; text-decoration: none; }
	.section { padding-block: var(--space-6); border-top: 1px solid var(--line); scroll-margin-top: 1rem; }
	.band { background: var(--pale-blue); }
	.about-content { display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(16rem, 0.65fr); gap: clamp(3rem, 9vw, 10rem); margin-top: var(--space-5); }
	.lead { max-width: 42rem; margin: 0; font-family: Georgia, 'Times New Roman', serif; font-size: clamp(1.55rem, 3vw, 2.3rem); letter-spacing: -0.035em; line-height: 1.22; }
	.profile-details { border-top: 2px solid var(--sea-blue); }
	.profile-details h3, .timeline-wrap > h3 { margin: var(--space-2) 0 var(--space-3); font-size: 0.84rem; letter-spacing: 0.08em; text-transform: uppercase; }
	dl { margin: 0; } dl div { display: grid; grid-template-columns: 6.8rem minmax(0, 1fr); gap: var(--space-1); padding: 0.75rem 0; border-top: 1px solid var(--line); } dt { color: var(--muted-ink); font-size: 0.78rem; } dd { margin: 0; font-size: 0.9rem; font-weight: 650; line-height: 1.4; }
	.resume-section, .education-section { display: grid; grid-template-columns: minmax(13rem, 0.75fr) minmax(0, 1.25fr); gap: clamp(3rem, 10vw, 12rem); }
	.timeline-wrap { min-width: 0; } .timeline, .education-list { border-top: 1px solid var(--line); }
	.timeline article, .education-list article { display: grid; grid-template-columns: 7rem minmax(0, 1fr); gap: var(--space-2); padding: var(--space-3) 0; border-bottom: 1px solid var(--line); }
	.period { margin: 0; color: var(--sea-blue-dark); font-size: 0.74rem; font-weight: 750; letter-spacing: 0.08em; text-transform: uppercase; }
	.timeline h4, .education-list h3, .practice-grid h3 { margin: 0; font-size: 1.08rem; line-height: 1.35; }
	.company { margin: 0.3rem 0 0; color: var(--sea-blue-dark); font-size: 0.83rem; font-weight: 700; }
	.timeline h4 + .company + p, .education-list h3 + p { margin: 0.65rem 0 0; color: var(--muted-ink); line-height: 1.6; }
	.work-list { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: clamp(1.5rem, 4vw, 4rem); margin-top: var(--space-5); }
	.practice-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: var(--space-3); margin-top: var(--space-5); }
	.practice-grid article { padding-top: var(--space-2); border-top: 2px solid var(--sea-blue); }
	.practice-grid ul { display: grid; gap: 0.7rem; padding: 0; margin: var(--space-3) 0 0; color: var(--muted-ink); line-height: 1.45; list-style: none; }
	.practice-grid li::before { margin-right: 0.5rem; color: var(--sea-blue); content: '—'; }
	.education-section { align-items: start; }
	footer { display: flex; justify-content: space-between; gap: var(--space-4); padding-block: var(--space-5); border-top: 1px solid var(--line); scroll-margin-top: 1rem; }
	footer h2 { margin: 0; font-size: clamp(2.25rem, 5vw, 4.5rem); line-height: 1; }
	footer p:not(.eyebrow) { max-width: 34rem; margin: var(--space-3) 0 0; color: var(--muted-ink); line-height: 1.6; }
	.contact-actions { flex-direction: column; align-items: flex-start; min-width: max-content; margin: 0; }
	.contact-actions > a:not(.button) { color: var(--sea-blue-dark); font-size: 0.88rem; font-weight: 650; }
	@media (max-width: 62rem) { .work-list { grid-template-columns: 1fr; gap: 0; } .practice-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
	@media (max-width: 52rem) { .hero, .about-content, .resume-section, .education-section { grid-template-columns: 1fr; } .hero { min-height: auto; padding-block: var(--space-5) 6rem; } .scroll-cue { left: var(--page-gutter); } .hero-art { max-width: 38rem; } .about-content, .resume-section, .education-section { gap: var(--space-4); } }
	@media (max-width: 34rem) { .practice-grid { grid-template-columns: 1fr; } .timeline article, .education-list article { grid-template-columns: 1fr; gap: 0.5rem; } footer { flex-direction: column; } .contact-actions { min-width: 0; margin-top: var(--space-2); } }
</style>
