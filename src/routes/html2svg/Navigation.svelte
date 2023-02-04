<script>
	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();
</script>

<nav>
	<span>HTML to SVG Converter</span>

	<button on:click={() => dispatch('convert')}>
		Convert HTML to SVG
	</button>

	<button on:click={() => dispatch('save')}>
		Save SVG
	</button>
</nav>

<style lang="scss">
	nav {
		height: 5vh;
		background-color: $fc;
		overflow: hidden;
		align-items: center;
		display: grid;
		grid-template-columns: 1fr repeat(2, auto);
		gap: 0.5rem;
		padding: 0.5rem;
		box-sizing: border-box;
	}
	span {
		color: white;
		line-height: 1.2rem;
		text-decoration: none;
		white-space: nowrap;
		font-size: 1.2rem;
		font-family: 'Trebuchet MS';
		cursor: default;
	}
	button {
		height: 3vh;
		color: white;
		background: #333842;
		font-family: 'consolas';
		border: 1;
		border-radius: 4px;
		border-color: #282c34;
		box-sizing: border-box;
		white-space: nowrap;
		cursor: pointer;
	}
</style>
