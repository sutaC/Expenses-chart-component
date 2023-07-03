<script lang="ts">
	import Chart from '$lib/components/chart.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { chartData } = data;
</script>

<header>
	<h1 class="small normal">My balance</h1>

	<p class="medium bold">$921.48</p>
</header>

<main>
	<section aria-labelledby="spending" class="spending">
		<h2 id="spending" class="medium">Spending - Last 7 days</h2>
		<Chart data={chartData} />
	</section>
	<section aria-labelledby="total" class="summary">
		<div>
			<h2 id="total" class="small normal light">Total this month</h2>
			<p class="big bold">$478.33</p>
		</div>
		<div class="small">
			<p class="bold">+2.4%</p>
			<p class="normal light">from last month</p>
		</div>
	</section>
</main>

<footer>
	Challenge by <a
		href="https://www.frontendmentor.io?ref=challenge"
		target="_blank"
		rel="noopener noreferrer">Frontend Mentor</a
	>. Coded by
	<a href="https://www.frontendmentor.io/profile/sutaC" target="_blank" rel="noopener noreferrer"
		>sutaC</a
	>.
</footer>

<!-- Styles -->
<style>
	/* Preset */
	@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap');

	:global(:root) {
		/* Colors */
		--clr-primary-red: hsl(10, 79%, 65%);
		--clr-primary-cyan: hsl(186, 34%, 60%);

		--clr-neutral-dBrown: hsl(25, 47%, 15%);
		--clr-neutral-mBrown: hsl(28, 10%, 53%);
		--clr-neutral-cream: hsl(27, 66%, 92%);
		--clr-neutral-orange: hsl(33, 100%, 98%);
	}

	:global(*) {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	:global(html) {
		font-size: 18px;
		font-family: 'DM Sans', sans-serif;
		color: var(--clr-neutral-dBrown);
	}

	:global(body) {
		min-height: 100vh;

		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 1rem;

		background-color: var(--clr-neutral-cream);
	}

	/* General classes */

	.small {
		font-size: 0.8rem;
	}
	.medium {
		font-size: 1.3rem;
	}
	.big {
		font-size: 1.7rem;
	}

	.normal {
		font-weight: normal;
	}
	.bold {
		font-weight: bold;
	}

	.light {
		color: var(--clr-neutral-mBrown);
	}

	/* Main */
	header,
	main {
		width: clamp(30%, 20rem, 90%);
		padding: 1.25rem 1rem;
		border-radius: 5px;
	}

	header {
		background-color: var(--clr-primary-red);
		color: var(--clr-neutral-orange);

		background-image: url(/images/logo.svg);
		background-repeat: no-repeat;
		background-position: right 1rem center;
	}

	main {
		background-color: var(--clr-neutral-orange);
	}

	section.spending {
		border-bottom: 1px solid var(--clr-neutral-mBrown);
		padding-bottom: 1rem;
		margin-bottom: 1rem;
	}
	section.spending > h2 {
		margin-bottom: 1rem;
	}

	section.summary {
		display: flex;
		justify-content: space-between;
		align-items: end;
	}
	section.summary > :last-of-type {
		text-align: right;
	}

	/* Footer */
	footer {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100vw;
		text-align: center;
		font-size: 0.7rem;
	}
</style>
