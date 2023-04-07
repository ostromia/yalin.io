<script>
	import CodeMirror from '$lib/CodeMirror.svelte';
	import { python as pythonLanguageSupport } from "@codemirror/lang-python";

	import { onMount } from 'svelte';
	import Navigation from '$r/python-interpreter/Navigation.svelte';

	var pyodide;
	let codemirror;

	let wrapper;
	let terminal;

	function execute() {
		pyodide.runPython(`${codemirror.getText()}`);
		terminal.value += pyodide.runPython("sys.stdout.getvalue()") + '\n';
		pyodide.runPython("sys.stdout = io.StringIO()");
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

	function clear() {
		terminal.value = 'Pyodide 0.21.3 [Python 3.10.2] [Clang 15.0.0]\n';
	}

	function save() {
		let file = new Blob([codemirror.getValue()]);
		let a = document.createElement('a');
		a.href = URL.createObjectURL(file);
		a.download = 'eric.py';
		a.click();
	}

	onMount(async () => {
		terminal.value = 'initializing Python interpreter...';
		pyodide = await loadPyodide();
		pyodide.runPython(`import io\nimport sys\nsys.stdout = io.StringIO()`);
		terminal.value = 'Pyodide 0.21.3 [Python 3.10.2] [Clang 15.0.0]\n';
	});
</script>

<svelte:head>
	<title>Python Interpreter</title>
	<script src="https://cdn.jsdelivr.net/pyodide/v0.21.3/full/pyodide.js"></script>
</svelte:head>

<Navigation on:ePC={execute} on:tPC={toggle} on:cPC={clear} on:sPC={save}/>

<main bind:this={wrapper}>
	<CodeMirror bind:this={codemirror} filetype={pythonLanguageSupport()}/>
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
