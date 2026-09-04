<div class="system-map" aria-hidden="true">
	<svg viewBox="0 0 610 430" role="presentation" focusable="false">
		<path class="route route-main" d="M29 310 C99 310 106 230 178 230 S244 112 320 112 S391 199 462 199 S527 102 584 102" />
		<path class="route" d="M29 310 C99 310 114 356 201 356 S274 294 361 294 S431 366 584 366" />
		<path class="route" d="M178 230 C235 230 244 294 361 294" />
		<path class="route dashed" d="M320 112 C386 112 410 63 462 63 S526 102 584 102" />
		<path class="route dashed" d="M201 356 C224 394 329 398 361 294" />
		<circle class="node large" cx="29" cy="310" r="10" />
		<circle class="node" cx="178" cy="230" r="7" />
		<circle class="node" cx="320" cy="112" r="7" />
		<circle class="node" cx="462" cy="199" r="7" />
		<circle class="node" cx="201" cy="356" r="7" />
		<circle class="node" cx="361" cy="294" r="7" />
		<circle class="node" cx="584" cy="102" r="7" />
		<circle class="node" cx="584" cy="366" r="7" />
		<circle class="node quiet" cx="462" cy="63" r="5" />
	</svg>
</div>

<style>
	.system-map {
		width: min(100%, 38rem);
		margin-inline: auto;
		color: var(--sea-blue);
	}

	svg {
		display: block;
		width: 100%;
		height: auto;
		overflow: visible;
	}

	.route {
		fill: none;
		stroke: currentColor;
		stroke-linecap: round;
		stroke-width: 1.35;
		opacity: 0.5;
	}

	.route-main {
		stroke-width: 2.2;
		opacity: 0.8;
	}

	.dashed {
		stroke-dasharray: 3 8;
	}

	.node {
		fill: var(--canvas);
		stroke: currentColor;
		stroke-width: 2.5;
	}

	.node.large {
		fill: currentColor;
	}

	.node.quiet {
		opacity: 0.55;
	}
</style>
