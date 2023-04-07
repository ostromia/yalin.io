<script lang="ts">
	import CodeMirror from '$lib/CodeMirror.svelte';
	import { python as pythonLanguageSupport } from "@codemirror/lang-python";

	import Navigation from '$r/pseudocode2python/Navigation.svelte';
	import Headers from '$r/pseudocode2python/Headers.svelte';
	import J277Guide from '$r/pseudocode2python/J277Guide.svelte';
	import {  VPG_s } from '$r/pseudocode2python/stores';

	import { default as p2p } from '$r/pseudocode2python/transpiler/';

	let pseudoEditor: CodeMirror;
	let pythonEditor: CodeMirror;

	function viewPastPaperPseudocode() {
		pseudoEditor.setText(p2p.pastPaperPseudocode);
	}

	function viewPseudocodeGuide() {
		VPG_s.update(i => !i);
	}

	function convertPseudocodeToPython() {
		const PSEUDOARRAY = p2p.toArray(pseudoEditor.getText());
		const ERROR = p2p.validator(PSEUDOARRAY);
		if (ERROR === '') {
			pythonEditor.setSyntax(pythonLanguageSupport());
			const PYTHONARRAY = p2p.transpiler(PSEUDOARRAY);
			pythonEditor.setText(p2p.toString(PYTHONARRAY));
		}
		else {
			pythonEditor.setSyntax([]);
			pythonEditor.setText(ERROR);
		}
	}
</script>


<Navigation on:vPPP={viewPastPaperPseudocode} on:vPG={viewPseudocodeGuide} on:cPTP={convertPseudocodeToPython}/>

<main>
	<Headers/>
	<CodeMirror bind:this={pseudoEditor}/>
	<CodeMirror bind:this={pythonEditor} filetype={pythonLanguageSupport()}/>
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
