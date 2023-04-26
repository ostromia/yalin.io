<script>
	import { createEventDispatcher } from 'svelte';
	import "@fontsource/jetbrains-mono"
	import { VPG_s } from '$zygon/stores';
	const dispatch = createEventDispatcher();

	let screenX;
	const medialevel = [1115, 774];
</script>

<svelte:window bind:innerWidth={screenX}/>

<nav>
	<span>
		{
			'Zygon'
			+ (screenX > medialevel[0] ? ': Pseudocode to Python Transpiler ' : '')
			+ '🦑'
		}
	</span>

	<button on:click={() => dispatch('vPPP')}>
		{
			'View Past Paper'
			+ (screenX > medialevel[1] ? 'Pseudocode' : '')}
	</button>

	<button on:click={() => dispatch('vPG')}>
		{
			($VPG_s == false ? 'Show' : 'Hide')
			+ (screenX > medialevel[1] ? ' Pseudocode Guide (J277)' : ' Guide')
		}
	</button>

	<button on:click={() => dispatch('cPTP')}>
		{screenX > medialevel[1] ? "Transpile Pseudocode to Python" : "Transpile"}
	</button>
</nav>

<style lang="scss">
	nav {
		height: 5vh;

		background-color: $fc;

		align-items: center;

		padding: 0.5rem;
		box-sizing: border-box;

		display: grid;
		grid-template-columns: 1fr repeat(3, auto);
		gap: 0.5rem;

		overflow-y: hidden;
		overflow-x: auto;
	}

	span {
		color: white;
		text-decoration: none;
		white-space: nowrap;
		font-size: 1rem;
		line-height: 1rem;
		font-family: "JetBrains Mono";
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