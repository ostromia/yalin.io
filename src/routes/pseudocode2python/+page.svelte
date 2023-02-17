<script lang="ts">
	import Navigation from '$r/pseudocode2python/Navigation.svelte';
	import Headers from '$r/pseudocode2python/Headers.svelte';
	import J277Guide from '$r/pseudocode2python/J277Guide.svelte';
	import Ace from '$lib/Ace.svelte';

	import transpiler from '$r/pseudocode2python/transpiler/transpiler';
	import validator from '$r/pseudocode2python/transpiler/validator';
	import parser from '$r/pseudocode2python/transpiler/parser';

	import { pastPaperPseudocode, VPG_s } from '$r/pseudocode2python/stores';


	let pseudoEditor: Ace;
	let pythonEditor: Ace;


	function viewPastPaperPseudocode() {
		pseudoEditor.set($pastPaperPseudocode);
	}

	function viewPseudocodeGuide() {
		VPG_s.update(i => !i);
	}

	function convertPseudocodeToPython() {
		const PSEUDOARRAY = parser.toArray(pseudoEditor.get());
		const ERROR = validator(PSEUDOARRAY);
		if (ERROR === '') {
			pythonEditor.mode('python');
			const PYTHONARRAY = transpiler(PSEUDOARRAY);
			pythonEditor.set(parser.toString(PYTHONARRAY));
		}
		else {
			pythonEditor.mode('text');
			pythonEditor.set(ERROR);
		}
	}
</script>

<svelte:head>
	<title>Pseudocode to Python Transpiler</title>
</svelte:head>

<Navigation on:vPPP={viewPastPaperPseudocode} on:vPG={viewPseudocodeGuide} on:cPTP={convertPseudocodeToPython}/>

<main>
	<Headers/>
	<Ace bind:this={pseudoEditor} id='0'/>
	<Ace bind:this={pythonEditor} id='1'/>
	<J277Guide/>
</main>

<style lang="scss">
	main {
		height: 95vh;

		padding: 0.5rem;
		box-sizing: border-box;

		display: grid;
		grid-template-rows: auto 1fr;
		grid-template-columns: 1fr 1fr;
		grid-template-areas: 'h0 h1' 'e0 e1';
		gap: 0.5rem;
	}
</style>
