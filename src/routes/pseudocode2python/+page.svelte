<script>
	import { onMount } from 'svelte';

	import Navigation from '$r/pseudocode2python/Navigation.svelte';
	import Headers from '$r/pseudocode2python/Headers.svelte';
	import J277Guide from '$r/pseudocode2python/J277Guide.svelte';

	import { pastPaperPseudocode } from '$r/pseudocode2python/stores.js';
	import { VPG_s } from '$r/pseudocode2python/stores.js';

	import { transpiler } from '$r/pseudocode2python/transpiler/p2p_transpiler';
	import { validator } from '$r/pseudocode2python/transpiler/p2p_validator';

	let pseudoEditor;
	let pythonEditor;

	onMount(async () => {
		const ace = await import('ace-builds/src-noconflict/ace');
		await import('ace-builds/src-noconflict/theme-dracula');
		await import('ace-builds/src-noconflict/mode-python');
		pseudoEditor = ace.edit('pseudoEditor');
		pythonEditor = ace.edit('pythonEditor');
		pseudoEditor.setTheme('ace/theme/dracula');
		pythonEditor.setTheme('ace/theme/dracula');
		pseudoEditor.setFontSize(16);
		pythonEditor.setFontSize(16);
		pseudoEditor.resize();
		pythonEditor.resize();
	});

	function viewPastPaperPseudocode() {
		pseudoEditor.setValue($pastPaperPseudocode, 1);
	}

	function viewPseudocodeGuide() {
		VPG_s.update((i) => (i = i ? false : true));
	}

	function convertPseudocodeToPython() {
		const PSEUDOARRAY = pseudoEditor
			.getValue()
			.split('\n')
			.map((i) => [false, i.search(/\S|$/), i.trim()]);

		const ERROR = validator(PSEUDOARRAY);

		if (ERROR == '') {
			pythonEditor.session.setMode('ace/mode/python');
			const PYTHONTEXT = transpiler(PSEUDOARRAY)
				.filter((i) => i[2] != 'REMOVED')
				.map((i) => ' '.repeat(i[1]) + i[2])
				.join('\n');
			pythonEditor.setValue(PYTHONTEXT, 1);
		} else {
			pythonEditor.session.setMode('ace/mode/text');
			pythonEditor.setValue(ERROR, 1);
		}
	}
</script>

<svelte:head>
	<title>Pseudocode to Python Transpiler</title>
</svelte:head>

<Navigation on:vPPP={viewPastPaperPseudocode} on:vPG={viewPseudocodeGuide} on:cPTP={convertPseudocodeToPython}/>

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
		grid-template-areas: 'h0 h1' 'e0 e1';
		gap: 0.5rem;
	}
</style>
