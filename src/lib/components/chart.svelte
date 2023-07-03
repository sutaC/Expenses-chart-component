<script lang="ts">
	export let data: Array<Collumn>;

	interface Collumn {
		day: String;
		amount: Number;
	}
</script>

<div class="chart">
	{#each data as col}
		<div class="collumn">
			<div class="data" style="--_data-height: {col.amount}%;">
				<div class="hint">${col.amount}</div>
			</div>
			<p class="heading">{col.day}</p>
		</div>
	{/each}
</div>

<style>
	.chart {
		display: flex;
		justify-content: center;
		gap: clamp(3%, 1rem, 4%);
	}

	.collumn {
		display: flex;
		flex-direction: column;
		justify-content: end;
		gap: 1rem;

		flex: 1;
		min-height: 12rem;
		margin-top: 5%;
	}

	.data {
		--_data-height: 100%;

		background-color: var(--clr-primary-red);
		height: var(--_data-height);
		border-radius: 3px;
	}
	.collumn:nth-child(3) > .data {
		background-color: var(--clr-primary-cyan);
	}

	.heading {
		color: var(--clr-neutral-mBrown);
		font-size: 0.8rem;
		text-align: center;
	}

	/* Hint */
	.hint {
		display: none;
		position: absolute;

		top: -1rem;
		left: 50%;
		translate: -50% -50%;

		background-color: var(--clr-neutral-dBrown);
		color: var(--clr-neutral-orange);

		font-size: 0.8rem;
		font-weight: bold;

		padding: 0.25em;

		border-radius: 3px;
	}
	.data:hover {
		cursor: pointer;
		opacity: 0.8;
		position: relative;
	}
	.data:hover > .hint {
		display: block;
	}
</style>
