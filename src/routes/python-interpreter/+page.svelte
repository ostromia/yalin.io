<script>
	import { onMount } from 'svelte';
	import Navigation from '$r/python-interpreter/Navigation.svelte';

	var pyodide;
	let editor;
	let wrapper;
	let terminal;

	function execute() {
		pyodide.runPython(`${editor.getValue()}`);
	}

	function toggle() {
		if (terminal.style.display != 'none') {
			terminal.style.display = 'none';
			wrapper.style.setProperty('grid-template-columns', '1fr');
		}
		else {
			terminal.style.display = 'block';
			wrapper.style.setProperty('grid-template-columns', '1fr 1fr');
		}
	}

	function save() {
	}

	onMount(async () => {
		console.log = function (message) {
			if (typeof message == "object") {
				terminal.value += JSON.stringify(message) + '\n';
			}
			else {
				terminal.value += message + '\n';
			}
		};

		const ace = await import('ace-builds/src-noconflict/ace');
		await import('ace-builds/src-noconflict/theme-dracula');
		await import('ace-builds/src-noconflict/mode-python');

		editor = ace.edit('editor');
		editor.session.setMode('ace/mode/python');
		editor.setTheme('ace/theme/dracula');
		editor.setFontSize('16px');
		editor.resize();

		terminal.value = 'initializing Python interpreter...';
		// @ts-ignore
		pyodide = await loadPyodide();
		terminal.value = 'Pyodide 0.21.3 [Python 3.10.2] [Clang 15.0.0]\n';
	});
</script>

<svelte:head>
	<script src="https://cdn.jsdelivr.net/pyodide/v0.21.3/full/pyodide.js"></script>
</svelte:head>

<Navigation on:ePC={execute} on:tPC={toggle} on:sPC={save}/>

<main bind:this={wrapper}>
	<div id="editor"></div>
    <textarea bind:this={terminal} id="terminal" readonly></textarea>
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
