<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
</script>

<nav>
	<img alt="" src="favicon.ico">
	<button on:click={() => dispatch('ePC')}>Execute Python Code</button>
	<button on:click={() => dispatch('tPC')}>Toggle Terminal</button>
	<button on:click={() => dispatch('cPC')}>Clear Terminal</button>
	<button on:click={() => dispatch('sPC')}>Save Python Code</button>
</nav>

<style lang="scss">
	nav {
		height: 30px;
		padding: 0 0.5rem;
		box-sizing: border-box;
		display: flex;
		align-content: center;
		align-items: center;
		background-color: $fc;
	}

	img {
		height: 26px;
		width: 26px;
		filter: invert(1);
		margin-right: 0.5ch;
		// box-sizing: border-box;
	}

	button {
		border: 0;
		padding: 2px 1ch;
		background-color: transparent;

		color: white;
		border-radius: 2px;
		opacity: 0.9;
	}

	button:hover {
		background-color: rgba(220,220,220, 0.125);
	}
</style>
