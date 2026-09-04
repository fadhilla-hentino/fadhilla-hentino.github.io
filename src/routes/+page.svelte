<script lang="ts">
	import { base } from '$app/paths';
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
	<meta property="og:description" content="Platform leadership, reliable systems, and AI-native engineering workflows." />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary" />
</svelte:head>

<SiteHeader />

<main id="main-content">
	<section id="top" class="hero" aria-labelledby="hero-heading">
		<div class="hero-map"><SystemMap /></div>
		<div class="hero-inner">
			<div class="portrait-frame">
				<span aria-hidden="true">FEH</span>
				<img src={`${base}/profile-portrait.webp`} alt="Fadhilla Eka Hentino" />
			</div>
			<p class="eyebrow">{profile.role}</p>
			<h1 id="hero-heading">{profile.name}</h1>
			<p class="hero-statement">{profile.intro}</p>
			<p class="focus-line">Platform leadership <i></i> Reliable systems <i></i> AI-native workflows</p>
			<nav class="social-links" aria-label="Professional links">
				<a href={profile.links.email}>Email</a>
				<a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
				<a href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
			</nav>
			<a class="scroll-cue" href="#about">Explore my work <span aria-hidden="true">↓</span></a>
		</div>
	</section>

	<section id="about" class="section about-section" aria-labelledby="about-heading">
		<div class="section-inner">
			<SectionHeading id="about-heading" eyebrow="About" title="Let me introduce myself." />
			<p class="about-lead">{about.lead}</p>

			<div class="about-grid">
				<article>
					<h3>Profile</h3>
					<dl>
						{#each about.details as [label, value] (label)}
							<div><dt>{label}</dt><dd>{value}</dd></div>
						{/each}
					</dl>
				</article>
				<article>
					<h3>Core practice</h3>
					<ul class="core-list">
						<li>Systems and platform design</li>
						<li>Go and cloud-native delivery</li>
						<li>Reliability and developer experience</li>
						<li>AI-native engineering workflows</li>
					</ul>
				</article>
			</div>

			<div class="about-actions">
				<a class="button button-primary" href="#contact">Start a Conversation</a>
				<a class="button button-secondary" href={profile.links.linkedin} target="_blank" rel="noreferrer">View LinkedIn</a>
			</div>
		</div>
	</section>

	<section id="experience" class="section resume-section" aria-labelledby="experience-heading">
		<div class="section-inner">
			<SectionHeading
				id="experience-heading"
				eyebrow="Resume"
				title="More of my journey."
				copy="From hands-on software delivery to leading the platform teams that operate what they build."
			/>
			<h3 class="section-subheading">Work Experience</h3>
			<div class="timeline">
				{#each career as item (item.company + item.role)}
					<article class="timeline-entry">
						<p class="period">{item.period}</p>
						<div class="timeline-marker" aria-hidden="true"></div>
						<div class="timeline-content">
							<h3>{item.role}</h3>
							<p class="company">{item.company}</p>
							<p>{item.summary}</p>
						</div>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<section id="work" class="section work-section" aria-labelledby="work-heading">
		<div class="section-inner">
			<SectionHeading
				id="work-heading"
				eyebrow="Selected Work"
				title="Evidence behind the approach."
				copy="A few confidentiality-safe examples of the systems questions I bring into engineering leadership."
			/>
			<div class="work-list">
				{#each selectedWork as impact (impact.title)}
					<ImpactCard {impact} />
				{/each}
			</div>
		</div>
	</section>

	<section id="practice" class="section practice-section dark-section" aria-labelledby="practice-heading">
		<div class="section-inner">
			<SectionHeading
				id="practice-heading"
				eyebrow="Practice"
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
		</div>
	</section>

	<section id="education" class="section education-section" aria-labelledby="education-heading">
		<div class="section-inner">
			<SectionHeading id="education-heading" eyebrow="Education" title="A foundation for continued practice." />
			<div class="education-list">
				{#each education as item (item.institution)}
					<article>
						<p class="period">{item.period}</p>
						<div><h3>{item.institution}</h3><p>{item.credential}</p></div>
					</article>
				{/each}
			</div>
		</div>
	</section>
</main>

<footer id="contact" aria-labelledby="contact-heading">
	<div class="footer-inner">
		<p class="eyebrow">Contact</p>
		<h2 id="contact-heading">Let’s build the steady path.</h2>
		<p>{profile.availability}</p>
		<div class="contact-actions">
			<a class="button button-light" href={profile.links.email}>Email Fadhilla</a>
			<a href={profile.links.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a>
			<a href={profile.links.github} target="_blank" rel="noreferrer">View GitHub ↗</a>
		</div>
		<a class="back-to-top" href="#top">Back to top ↑</a>
	</div>
</footer>

<style>
	.hero { position: relative; display: grid; place-items: center; min-height: calc(100svh - var(--header-height)); padding: clamp(4rem, 9vw, 7rem) var(--page-gutter); overflow: hidden; color: var(--canvas); background: var(--deep-ocean); scroll-margin-top: var(--header-height); }
	.hero-map { position: absolute; inset: 50% auto auto 50%; width: min(55rem, 80vw); color: var(--mint); opacity: 0.13; transform: translate(-50%, -50%) scale(1.25); }
	.hero-inner { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; width: min(100%, 58rem); text-align: center; }
	.portrait-frame { display: grid; place-items: center; width: 11rem; aspect-ratio: 1; margin-bottom: var(--space-3); overflow: hidden; color: var(--mint); background: var(--ocean-surface); border: 0.25rem solid var(--canvas); border-radius: 50%; font-family: Georgia, 'Times New Roman', serif; font-size: 2rem; font-weight: 700; }
	.portrait-frame > * { grid-area: 1 / 1; } .portrait-frame img { width: 100%; height: 100%; object-fit: cover; object-position: 50% 50%; }
	.eyebrow { margin: 0 0 var(--space-2); color: var(--sea-blue); font-size: 0.72rem; font-weight: 800; letter-spacing: 0.14em; line-height: 1.5; text-transform: uppercase; }
	.hero .eyebrow, footer .eyebrow { color: var(--mint); }
	h1, h2 { font-family: Georgia, 'Times New Roman', serif; font-weight: 500; letter-spacing: -0.05em; text-wrap: balance; }
	h1 { margin: 0; font-size: clamp(3.25rem, 8vw, 6.8rem); line-height: 0.92; }
	.hero-statement { max-width: 43rem; margin: var(--space-3) 0 0; color: color-mix(in srgb, var(--canvas) 78%, var(--mint)); font-size: clamp(1.05rem, 2vw, 1.3rem); line-height: 1.6; }
	.focus-line { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.65rem; margin: var(--space-3) 0 0; color: var(--mint); font-size: 0.76rem; font-weight: 750; letter-spacing: 0.08em; text-transform: uppercase; } .focus-line i { width: 0.2rem; height: 0.2rem; align-self: center; background: currentColor; border-radius: 50%; }
	.social-links { display: flex; gap: 1.5rem; margin-top: var(--space-4); } .social-links a { color: var(--canvas); font-size: 0.82rem; font-weight: 750; text-decoration-color: var(--mint); }
	.scroll-cue { display: inline-flex; flex-direction: column; align-items: center; gap: 0.45rem; margin-top: clamp(3rem, 7vh, 5rem); color: var(--mint); font-size: 0.7rem; font-weight: 800; letter-spacing: 0.12em; text-decoration: none; text-transform: uppercase; }
	.section { padding: clamp(5rem, 10vw, 8rem) var(--page-gutter); scroll-margin-top: calc(var(--header-height) + 1rem); } .section-inner, .footer-inner { width: min(100%, var(--max-width)); margin-inline: auto; }
	.about-section, .work-section, .education-section { background: var(--canvas); } .resume-section { background: var(--pale-blue); }
	.about-lead { max-width: 52rem; margin: var(--space-4) auto 0; color: var(--muted-ink); font-family: Georgia, 'Times New Roman', serif; font-size: clamp(1.35rem, 2.7vw, 2rem); line-height: 1.45; text-align: center; }
	.about-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: clamp(3rem, 8vw, 8rem); margin-top: var(--space-5); } .about-grid article { border-top: 2px solid var(--sea-blue); } .about-grid h3, .section-subheading { margin: var(--space-2) 0 var(--space-3); font-size: 0.78rem; letter-spacing: 0.13em; text-transform: uppercase; }
	dl { margin: 0; } dl div { display: grid; grid-template-columns: 7rem minmax(0, 1fr); gap: 1rem; padding: 0.85rem 0; border-top: 1px solid var(--line); } dt { color: var(--muted-ink); font-size: 0.78rem; } dd { margin: 0; font-size: 0.9rem; font-weight: 700; line-height: 1.45; }
	.core-list { padding: 0; margin: 0; list-style: none; } .core-list li { padding: 0.85rem 0; border-top: 1px solid var(--line); font-size: 0.9rem; font-weight: 700; } .core-list li::before { margin-right: 0.7rem; color: var(--sea-blue); content: '—'; }
	.about-actions { display: flex; flex-wrap: wrap; justify-content: center; gap: var(--space-2); margin-top: var(--space-5); }
	.button { display: inline-flex; justify-content: center; padding: 0.85rem 1.15rem; border: 1px solid transparent; font-size: 0.8rem; font-weight: 800; letter-spacing: 0.02em; text-decoration: none; } .button-primary { color: var(--paper); background: var(--sea-blue); border-color: var(--sea-blue); } .button-primary:hover { color: var(--paper); background: var(--deep-ocean); border-color: var(--deep-ocean); } .button-secondary { color: var(--sea-blue); border-color: var(--sea-blue); }
	.section-subheading { margin: var(--space-5) 0 0; text-align: center; }
	.timeline { position: relative; max-width: 58rem; margin: var(--space-4) auto 0; } .timeline::before { position: absolute; top: 0; bottom: 0; left: 50%; width: 1px; content: ''; background: var(--line); transform: translateX(-50%); }
	.timeline-entry { position: relative; display: grid; grid-template-columns: minmax(0, 1fr) 3rem minmax(0, 1fr); gap: 1.5rem; min-height: 9rem; padding-bottom: var(--space-4); } .timeline-entry:last-child { padding-bottom: 0; } .period { grid-column: 1; margin: 0; padding-top: 0.1rem; color: var(--sea-blue); font-size: 0.72rem; font-weight: 800; letter-spacing: 0.1em; text-align: right; text-transform: uppercase; } .timeline-marker { z-index: 1; grid-column: 2; justify-self: center; width: 0.75rem; height: 0.75rem; margin-top: 0.1rem; background: var(--sea-blue); border: 0.2rem solid var(--pale-blue); border-radius: 50%; outline: 1px solid var(--sea-blue); } .timeline-content { grid-column: 3; } .timeline-content h3, .education-list h3 { margin: 0; font-size: 1.2rem; line-height: 1.25; } .company { margin: 0.35rem 0 0; color: var(--sea-blue); font-size: 0.8rem; font-weight: 800; } .timeline-content > p:last-child { margin: var(--space-2) 0 0; color: var(--muted-ink); line-height: 1.65; }
	.work-list { margin-top: var(--space-5); border-bottom: 1px solid var(--line); }
	.dark-section { color: var(--canvas); background: var(--deep-ocean); } .dark-section :global(.section-heading p) { color: var(--mint); } .dark-section :global(.section-heading div) { color: color-mix(in srgb, var(--canvas) 72%, var(--mint)); }
	.practice-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1px; margin-top: var(--space-5); background: color-mix(in srgb, var(--mint) 22%, transparent); border: 1px solid color-mix(in srgb, var(--mint) 22%, transparent); } .practice-grid article { padding: clamp(1.5rem, 4vw, 3rem); background: var(--deep-ocean); } .practice-grid h3 { margin: 0; color: var(--mint); font-family: Georgia, 'Times New Roman', serif; font-size: 1.35rem; font-weight: 500; } .practice-grid ul { display: grid; gap: 0.8rem; padding: 0; margin: var(--space-3) 0 0; color: color-mix(in srgb, var(--canvas) 82%, var(--mint)); list-style: none; } .practice-grid li::before { margin-right: 0.6rem; color: var(--mint); content: '—'; }
	.education-list { max-width: 50rem; margin: var(--space-5) auto 0; border-top: 1px solid var(--line); } .education-list article { display: grid; grid-template-columns: 8rem minmax(0, 1fr); gap: var(--space-3); padding: var(--space-3) 0; border-bottom: 1px solid var(--line); } .education-list .period { text-align: left; } .education-list p:last-child { margin: 0.55rem 0 0; color: var(--muted-ink); }
	footer { padding: clamp(5rem, 10vw, 8rem) var(--page-gutter); color: var(--canvas); background: var(--deep-ocean); border-top: 1px solid color-mix(in srgb, var(--mint) 22%, transparent); scroll-margin-top: calc(var(--header-height) + 1rem); } .footer-inner { text-align: center; } footer h2 { max-width: 14ch; margin: 0 auto; font-size: clamp(2.7rem, 6vw, 5.2rem); line-height: 0.98; } footer p:not(.eyebrow) { max-width: 38rem; margin: var(--space-3) auto 0; color: color-mix(in srgb, var(--canvas) 76%, var(--mint)); line-height: 1.65; } .contact-actions { display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 1.5rem; margin-top: var(--space-4); } .contact-actions > a:not(.button) { color: var(--mint); font-size: 0.82rem; font-weight: 750; } .button-light { color: var(--deep-ocean); background: var(--mint); } .button-light:hover { color: var(--deep-ocean); background: var(--canvas); } .back-to-top { display: inline-block; margin-top: var(--space-5); color: var(--canvas); font-size: 0.72rem; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; }
	.hero :global(a:focus-visible), footer :global(a:focus-visible) { outline-color: var(--mint); }
	@media (max-width: 48rem) { .hero { min-height: calc(100svh - var(--header-height)); padding-block: 3.5rem; } .hero-map { width: 45rem; } .portrait-frame { width: 9rem; } .focus-line i { display: none; } .focus-line { flex-direction: column; gap: 0.3rem; } .about-grid, .practice-grid { grid-template-columns: 1fr; } .timeline::before { left: 0.35rem; } .timeline-entry { grid-template-columns: 1.5rem minmax(0, 1fr); gap: 1rem; min-height: 0; padding-bottom: var(--space-4); } .timeline-marker { grid-column: 1; grid-row: 1; justify-self: start; margin-left: 0; } .period, .timeline-content { grid-column: 2; text-align: left; } .period { grid-row: 1; } .timeline-content { grid-row: 2; margin-top: -0.5rem; } .education-list article { grid-template-columns: 1fr; gap: 0.5rem; } }
	@media (max-width: 25rem) { .social-links { gap: 1rem; } .contact-actions { flex-direction: column; } .button { width: 100%; } }
</style>
