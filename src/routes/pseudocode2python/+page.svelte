<svelte:head>
	<title>Pseudocode to Python Transpiler</title>
</svelte:head>

<script>
	import {onMount} from 'svelte';

	import Navigation from '$r/pseudocode2python/Navigation.svelte';
	import Headers from '$r/pseudocode2python/Headers.svelte';
	import J277Guide from '$r/pseudocode2python/J277Guide.svelte';

	import {pastPaperPseudocode} from '$r/pseudocode2python/stores.js';
	import {VPG_s} from '$r/pseudocode2python/stores.js';

	import {p2p} from '$r/pseudocode2python/transpiler/p2p';

	let pseudoEditor;
	let pythonEditor;

	onMount(async () => {
		const ace = await import('ace-builds/src-noconflict/ace');
		await import('ace-builds/src-noconflict/theme-dracula');
		await import('ace-builds/src-noconflict/mode-python');

		pseudoEditor = ace.edit('pseudoEditor');
		pythonEditor = ace.edit('pythonEditor');

		[pseudoEditor, pythonEditor].forEach((i) => {
			i.setTheme('ace/theme/dracula');
			i.setFontSize(16);
			i.resize();
		});
	});

	function viewPastPaperPseudocode() {
		pseudoEditor.setValue($pastPaperPseudocode, 1);
	}

	function viewPseudocodeGuide() {
		VPG_s.update(i => i = i ? false : true);
	}

	function convertPseudocodeToPython() {
		const code = new p2p(pseudoEditor.getValue());

		if (code.error === '') {
			pythonEditor.session.setMode("ace/mode/python");
			pythonEditor.setValue(code.transpile(), 1);
		}
		else {
			pythonEditor.session.setMode("ace/mode/text");
			pythonEditor.setValue(code.message, 1);
			// pythonEditor.setValue(code.transpile() + '\n', 1);
		}
	}
</script>

<Navigation
	on:vPPP={viewPastPaperPseudocode}
	on:vPG={viewPseudocodeGuide}
	on:cPTP={convertPseudocodeToPython}
/>

<main>
	<Headers/>
	<div id="pseudoEditor"></div>
	<div id="pythonEditor"></div>
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
		grid-template-areas: "h0 h1" "e0 e1";
		gap: 0.5rem;
	}
</style>
