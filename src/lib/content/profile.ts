export type Impact = {
	title: string;
	context: string;
	decision: string;
	outcome: string;
	tags: string[];
};

export type CareerEntry = {
	company: string;
	role: string;
	period: string;
	summary: string;
};

export type Practice = {
	title: string;
	details: string[];
};

export type EducationEntry = {
	institution: string;
	credential: string;
	period: string;
};

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

export const profile = {
	name: 'Fadhilla Eka Hentino',
	role: 'Engineering Manager · Game Backend & Platform Engineering',
	intro:
		'Leading the teams and systems that help game developers build, deploy, and operate dependable backend services.',
	availability: 'Open to thoughtful conversations about platform engineering, reliable systems, and AI-native engineering workflows.',
	links: {
		email: 'mailto:fadhilfcr@gmail.com',
		linkedin: 'https://www.linkedin.com/in/fadhilla-eka-hentino',
		github: 'https://github.com/fadhilla'
	}
} as const;

export const about = {
	lead:
		'I am an engineering leader with more than a decade of experience building software products and platform capabilities. At AccelByte, I lead Extend: a platform that enables game developers to build, deploy, and scale their own backend services on shared infrastructure.',
	details: [
		['Based in', 'Yogyakarta, Indonesia'],
		['Current focus', 'Platform engineering for game developers'],
		['Working style', 'Transparent, ownership-led, and customer-aware'],
		['Exploring', 'AI-native engineering workflows']
	]
} as const;

export const career: CareerEntry[] = [
	{
		company: 'AccelByte',
		role: 'Engineering Manager II',
		period: '2023 — Present',
		summary:
			'Leading a cross-functional backend, SRE, and QA team building Extend: a platform for game developers to build, deploy, monitor, and scale custom backend services.'
	},
	{
		company: 'AccelByte',
		role: 'Lead Software Engineer',
		period: '2019 — 2023',
		summary:
			'Led client, performance, core, and platform teams; shaped high-performance services, architecture practice, hiring, and efficient cloud delivery.'
	},
	{
		company: 'AccelByte',
		role: 'Software Engineer, Go',
		period: '2018 — 2019',
		summary:
			'Built game-industry account and social services using Go, React, Redis, and AWS cloud technologies.'
	},
	{
		company: 'Core Chain',
		role: 'Backend Developer',
		period: '2017 — 2018',
		summary:
			'Built microservice-based backend services for financial workflows with Go, Java, Kotlin, Redis, MongoDB, and distributed-system integrations.'
	},
	{
		company: 'Anabatic Technologies',
		role: 'Software Developer Technical Lead',
		period: '2013 — 2017',
		summary:
			'Led analysis, design, delivery, and maintenance of client-facing product capabilities while partnering closely with product owners.'
	},
	{
		company: 'PT Citra Sari Makmur',
		role: 'Junior Technician Intern',
		period: '2012',
		summary: 'Built an early foundation in network operations, maintenance, and installation across connectivity systems.'
	}
];

export const selectedWork: Impact[] = [
	{
		title: 'Making Extend a practical platform for game teams',
		context: 'Game studios need a clear path from custom service code to a managed, scalable backend without rebuilding platform foundations.',
		decision: 'Lead the Extend roadmap, architecture reviews, and cross-team delivery around explicit service lifecycles and developer-focused platform boundaries.',
		outcome: 'A more repeatable way for teams to extend game backends while keeping operational responsibility legible.',
		tags: ['Platform strategy', 'Game backend', 'Engineering leadership']
	},
	{
		title: 'Balancing scale, cost, and developer experience',
		context: 'A platform grows only when its customer value and operating economics can grow together.',
		decision: 'Bring cloud cost, performance, observability, API ergonomics, and production readiness into the same engineering conversations.',
		outcome: 'Teams can make scalability decisions with clearer trade-offs rather than treating efficiency as a late-stage concern.',
		tags: ['Cloud economics', 'Reliability', 'Developer experience']
	},
	{
		title: 'Applying AI where engineering work actually happens',
		context: 'AI tooling changes delivery workflows only when it is introduced with clear ownership, useful boundaries, and honest evaluation.',
		decision: 'Explore LLM-assisted automation and agentic workflows as improvements to planning, implementation, and operations—not as isolated demos.',
		outcome: 'A grounded path for teams to increase delivery velocity while keeping engineering judgment accountable.',
		tags: ['AI workflows', 'LLM systems', 'Team effectiveness']
	}
];

export const practices: Practice[] = [
	{
		title: 'Systems and platforms',
		details: ['Systems design', 'Game backend services', 'Service lifecycle design', 'Multi-tenant platform thinking']
	},
	{
		title: 'Cloud-native delivery',
		details: ['Go engineering', 'Kubernetes', 'AWS foundations', 'Cost-aware architecture']
	},
	{
		title: 'Reliable engineering',
		details: ['Observability practice', 'Production readiness', 'Developer experience', 'Cross-functional leadership']
	},
	{
		title: 'AI-native workflows',
		details: ['LLM integration', 'Agent workflows', 'Engineering automation', 'Practical evaluation']
	}
];

export const education: EducationEntry[] = [
	{
		institution: 'BINUS University Graduate Program',
		credential: 'Master’s degree, Management Information Systems',
		period: '2020 — 2022'
	},
	{
		institution: 'Universitas Mercu Buana',
		credential: 'Bachelor’s degree, Information Systems',
		period: '2014 — 2018'
	}
];
