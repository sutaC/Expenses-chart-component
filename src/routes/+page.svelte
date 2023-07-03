<script>
	import Chart from '$lib/components/chart.svelte';
</script>

<header>
	<h1>My balance</h1>

	<p>$921.48</p>
</header>

<main>
	<section>
		<h2>Spending - Last 7 days</h2>
		<Chart data={[]} />
	</section>
	<section>
		<div class="total">
			<h2>Total this month</h2>
			<p>$478.33</p>
		</div>
		<div class="comparison">
			<p>+2.4%</p>
			<p>from last month</p>
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
