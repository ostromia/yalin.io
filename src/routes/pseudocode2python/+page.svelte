<script lang="ts">
	import CodeMirror from '$lib/CodeMirror.svelte';
	import { python as pythonLanguageSupport } from "@codemirror/lang-python";

	import Navigation from '$r/pseudocode2python/Navigation.svelte';
	import Headers from '$r/pseudocode2python/Headers.svelte';
	import J277Guide from '$r/pseudocode2python/J277Guide.svelte';
	import { pastPaperPseudocode, VPG_s } from '$r/pseudocode2python/stores';

	import transpiler from '$r/pseudocode2python/transpiler/transpiler';
	import validator from '$r/pseudocode2python/transpiler/validator';
	import parser from '$r/pseudocode2python/transpiler/parser';

	let pseudoEditor: CodeMirror;
	let pythonEditor: CodeMirror;

	function viewPastPaperPseudocode() {
		pseudoEditor.setText(String(pastPaperPseudocode));
	}

	function viewPseudocodeGuide() {
		VPG_s.update(i => !i);
	}

	function convertPseudocodeToPython() {
		const PSEUDOARRAY = parser.toArray(pseudoEditor.getText());
		const ERROR = validator(PSEUDOARRAY);
		if (ERROR === '') {
			pythonEditor.setSyntax(pythonLanguageSupport());
			const PYTHONARRAY = transpiler(PSEUDOARRAY);
			pythonEditor.setText(parser.toString(PYTHONARRAY));
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
