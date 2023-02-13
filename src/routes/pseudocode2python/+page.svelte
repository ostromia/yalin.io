<script>
	import Navigation from '$r/pseudocode2python/Navigation.svelte';
	import Headers from '$r/pseudocode2python/Headers.svelte';
	import J277Guide from '$r/pseudocode2python/J277Guide.svelte';
	import Ace from '$lib/Ace.svelte';

	import transpiler from '$r/pseudocode2python/transpiler/transpiler';
	import validator from '$r/pseudocode2python/transpiler/validator';

	import { pastPaperPseudocode, VPG_s } from '$r/pseudocode2python/stores.js';


	let pseudoEditor;
	let pythonEditor;


	function viewPastPaperPseudocode() {
		pseudoEditor.set($pastPaperPseudocode);
	}

	function viewPseudocodeGuide() {
		VPG_s.update(i => !i);
	}

	function convertPseudocodeToPython() {
		const PSEUDOARRAY = pseudoEditor.get()
			.split('\n')
			.map((i) => [false, i.search(/\S|$/), i.trim()]);

		const ERROR = validator(PSEUDOARRAY);

		if (ERROR == '') {
			pythonEditor.mode('python');
			const PYTHONTEXT = transpiler(PSEUDOARRAY)
				.filter((i) => i[2] != 'REMOVED')
				.map((i) => ' '.repeat(i[1]) + i[2])
				.join('\n');
			pythonEditor.set(PYTHONTEXT);
		} else {
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
