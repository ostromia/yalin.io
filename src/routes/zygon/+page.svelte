<script lang="ts">
	import CodeMirror from '$lib/CodeMirror.svelte';
	import { python as pythonLanguageSupport } from "@codemirror/lang-python";

	import Navigation from '$zygon/Navigation.svelte';
	import Headers from '$zygon/Headers.svelte';
	import J277Guide from '$zygon/J277Guide.svelte';
	import {  VPG_s } from '$zygon/stores';
	import { default as p2p } from '$zygon/transpiler/';

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

	// import { onMount } from 'svelte';
	// onMount(() => {
	// 	viewPastPaperPseudocode();
	// 	convertPseudocodeToPython();
	// });
</script>

<svelte:head>
	<title>Zygon</title>
</svelte:head>

<Navigation
	on:vPPP={viewPastPaperPseudocode}
	on:vPG={viewPseudocodeGuide}
	on:cPTP={convertPseudocodeToPython}
/>

<main style="position: absolute">
	<J277Guide/>
</main>

<main>
	<Headers/>
	<CodeMirror bind:this={pseudoEditor}/>
	<CodeMirror bind:this={pythonEditor} filetype={pythonLanguageSupport()}/>
</main>

<style lang="scss">
	main {
		height: calc(100vh - 2.5rem);
		padding: 0.5rem;
		box-sizing: border-box;

		display: grid;
		grid-template-rows: 1.5rem 1fr;
		grid-template-columns: 1fr 1fr;
		grid-template-areas: 'h0 h1' 'e0 e1';
		gap: 0.5rem;
	}
</style>
