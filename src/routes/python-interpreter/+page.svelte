<script>
	import { onMount } from 'svelte';
	import Navigation from '$r/python-interpreter/Navigation.svelte';

	var pyodide;
	let editor;
	let output;

	function execute() {
		pyodide.runPython(`${editor.getValue()}`);
		// output += pyodide.runPython('sys.stdout.getvalue()');
	}

	function toggle() {
	}

	function save() {
	}

	onMount(async () => {
		console.log = function (message) {
		let logger = document.getElementById('terminal');
		if (typeof message == 'object') {
			logger.value += (JSON && JSON.stringify ? JSON.stringify(message) : message);
		}
		else {
			logger.value += message;
		}
		logger.value += '\n';
		}

		const ace = await import('ace-builds/src-noconflict/ace');
		await import('ace-builds/src-noconflict/theme-dracula');
		await import('ace-builds/src-noconflict/mode-python');
		editor = ace.edit('editor');
		editor.session.setMode('ace/mode/python');
		editor.setTheme('ace/theme/dracula');
		editor.setFontSize('16px');
		editor.resize();

		output = 'initializing Python interpreter...';
		// @ts-ignore
		pyodide = await loadPyodide();
		// pyodide.runPython(`import io\nimport sys\nsys.stdout=io.StringIO()`);
		output = 'Pyodide 0.21.3 [Python 3.10.2] [Clang 15.0.0]\n';
	});
</script>

<svelte:head>
	<script src="https://cdn.jsdelivr.net/pyodide/v0.21.3/full/pyodide.js"></script>
</svelte:head>

<Navigation on:ePC={execute} on:tPC={toggle} on:sPC={save}/>

<main>
	<div id="editor"></div>
    <textarea id="terminal" bind:value={output} readonly></textarea>
</main>

<style>
	main {
		height: 95vh;
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 1fr 1fr;
		gap: 0.5rem;
		padding: 0.5rem;
		box-sizing: border-box;
	}

	#terminal {
		border: none;
		outline: none;
		resize: none;
		flex: 1;
		min-width: 25vw;
		background-color: #282a36;
		color: white;
	}
</style>
