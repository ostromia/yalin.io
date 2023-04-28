<script lang="ts">
	import CodeMirror from '$lib/CodeMirror.svelte';
	import { python as pythonLanguageSupport } from "@codemirror/lang-python";

	import { onMount } from 'svelte';
	import Navigation from '$r/python-interpreter/Navigation.svelte';

	let pyodide: any;
	let codemirror: CodeMirror;

	let wrapper: HTMLElement;
	let terminal: HTMLTextAreaElement;
	let shellTitle: HTMLElement;

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
		terminal.value = '';
	}

	function save() {
		let file = new Blob([codemirror.getText()]);
		let a = document.createElement('a');
		a.href = URL.createObjectURL(file);
		a.download = 'eric.py';
		a.click();
	}

	onMount(async () => {
		shellTitle.innerHTML = 'initializing Python interpreter...';
		// @ts-ignore
		pyodide = await loadPyodide();
		pyodide.runPython(`import io\nimport sys\nsys.stdout = io.StringIO()`);
		shellTitle.innerHTML = 'Pyodide 0.21.3 [Python 3.10.2] [Clang 15.0.0]\n';
	});
</script>

<svelte:head>
	<title>Python Interpreter</title>
	<script async src="https://cdn.jsdelivr.net/pyodide/v0.23.0/full/pyodide.js"></script>
</svelte:head>

<Navigation on:ePC={execute} on:tPC={toggle} on:cPC={clear} on:sPC={save}/>

<main bind:this={wrapper}>
	<CodeMirror bind:this={codemirror} filetype={pythonLanguageSupport()}/>
	<div id="shell">
		<span bind:this={shellTitle} id="shell-title"></span>
    	<textarea bind:this={terminal} id="terminal" readonly></textarea>
	</div>
</main>

<style lang="scss">
	main {
		height: calc(100vh - 30px);
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 1fr 1fr;
		gap: 0.5rem;
	}

	#shell {
		display: grid;
		grid-template-rows: min-content 1fr;
		font-family: Consolas, "Courier New", monospace;

		span {
			color: gray;
			background-color: #282a36;
			font-size: 14px;
		}
	}

	#terminal {
		border: none;
		outline: none;
		resize: none;
		display: flex;
		background-color: #282a36;
		color: white;
	}
</style>
