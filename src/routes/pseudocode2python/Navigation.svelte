<script>
	import {createEventDispatcher} from 'svelte';
	import {VPG_s} from '$r/pseudocode2python/stores.js';
	const dispatch = createEventDispatcher();
</script>

<nav>
	<span>Online OCR Pseudocode to Python Transpiler</span>

	<button id="viewPastPaperPseudocode" on:click={()=>dispatch('vPPP')}>
		View Past Paper Pseudocode
	</button>

	<button id="viewPseudocodeGuide" on:click={()=>dispatch('vPG')}>
		{($VPG_s == false ? 'Show' : 'Hide') + ' Pseudocode Guide (J277)'}
	</button>

	<button id="convertPseudocodeToPython" on:click={()=>dispatch('cPTP')}>
		Convert Pseudocode to Python
	</button>

	<button id="executePythonCode" disabled>
		Execute Python Code
	</button>
</nav>

<style lang="scss">
	nav {
		height: 5vh;
		width: 100vw;

		background-color: $fc;

		align-items: center;

		padding-left: 1rem;
		padding-right: 0.5rem;
		box-sizing: border-box;

		display: grid;
		grid-template-columns: auto 1fr auto auto auto auto;
		grid-template-rows: 1fr;
		gap: 0.5rem;

		overflow-y: hidden;
		overflow-x: auto;
	}

	nav > span {
		max-height: 5vh;
		color: white;
		text-decoration: none;
		font-size: 2vh;
		font-family: 'cabin';
		font-weight: bold;
		cursor: default;
	}

	nav > button {
		height: 4vh;

		color: white;
		background: #333842;

		font-family: 'cabin';

		border: 1;
		border-radius: 4px;
		border-color: #282c34;
		box-sizing: border-box;

		white-space: nowrap;

		cursor: pointer;
	}

	#viewPastPaperPseudocode   { grid-column: 3 }
	#viewPseudocodeGuide       { grid-column: 4 }
	#convertPseudocodeToPython { grid-column: 5 }
	#executePythonCode         { grid-column: 6; color: grey }
</style>
