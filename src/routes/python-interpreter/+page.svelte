<script context="module" lang="ts">
	function isEmptyString(x: string): boolean {
		return /^\s*$/.test(x);
	}
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import Navigation from '$r/python-interpreter/Navigation.svelte';
	import CodeMirror from '$lib/CodeMirror.svelte';
	import { python as pythonLanguageSupport } from "@codemirror/lang-python";

	let pyodide: any;
	let codemirror: CodeMirror;

    interface Elements {
        wrapper: HTMLElement,
        terminal: HTMLTextAreaElement,
        shellTitle: HTMLElement
    }
    let elements: Elements = {};

	function file_new() {
		// if (!isEmptyString(editor.getText())) {
		// 	window.alert("Your changes will be lost if you don't save them.");
		// }
		codemirror.setText("");
	}

	function file_open(e: any) {
		// if (!isEmptyString(editor.getText())) {
		// 	window.alert("Your changes will be lost if you don't save them.");
		// }
		codemirror.setText(e.detail.text);
	}

	function save_text_as_file(text: string, fileName: string): void {
		let file = new Blob([ text ]);
		let a = document.createElement('a');
		a.href = URL.createObjectURL(file);
		a.download = fileName;
		a.click();
	}

	function file_save() {
	}

	function file_save_as() {
		save_text_as_file(codemirror.getText(), "untitled.py");
	}

	function edit_undo() {
		if (codemirror !== undefined) {
			codemirror.undo();
		}
	}

	function edit_redo() {
		if (codemirror !== undefined) {
			codemirror.redo();
		}
	}

	async function edit_cut() {
		if (codemirror !== undefined && codemirror.isRange()) {
			const range = codemirror.getRange();
			const selection = codemirror.getText(...range);

			await navigator.clipboard.writeText(selection);
			codemirror.setText("", ...range);
			codemirror.focus();
		}
	}

	async function edit_copy() {
		if (codemirror !== undefined && codemirror.isRange()) {
			const range = codemirror.getRange();
			const selection = codemirror.getText(...range);

			await navigator.clipboard.writeText(selection);
		}
	}

	async function edit_paste() {
		if (codemirror !== undefined) {
			codemirror.setText(
			await navigator.clipboard.readText(),
			...codemirror.getRange()
			);
		}
	}

    function view_toggle_terminal() {
		if (elements.terminal.style.display != 'none') {
			elements.terminal.style.display = 'none';
			elements.wrapper.style.setProperty('grid-template-columns', '1fr');
		}
		else {
			elements.terminal.style.display = 'block';
			elements.wrapper.style.setProperty('grid-template-columns', '1fr 1fr');
		}
    }

    function view_clear_terminal() {
		elements.terminal.value = '';
	}

    function view_split_tabs_horizontally() {
	    elements.wrapper.style.setProperty("grid-template-columns", "1fr");
	    elements.wrapper.style.setProperty("grid-template-rows", "1fr 1fr");
    }

    function view_split_tabs_vertically() {
	    elements.wrapper.style.setProperty("grid-template-columns", "1fr 1fr");
	    elements.wrapper.style.setProperty("grid-template-rows", "1fr");
    }

    function run() {
		pyodide.runPython(`${codemirror.getText()}`);
		elements.terminal.value += pyodide.runPython("sys.stdout.getvalue()") + '\n';
		pyodide.runPython("sys.stdout = io.StringIO()");
    }

	onMount(async () => {
		elements.shellTitle.innerHTML = 'initializing Python interpreter...';
		// @ts-ignore
		pyodide = await loadPyodide();
		pyodide.runPython(`import io\nimport sys\nsys.stdout = io.StringIO()`);
		elements.shellTitle.innerHTML = 'Pyodide 0.21.3 [Python 3.10.2] [Clang 15.0.0]\n';
	});
</script>

<svelte:head>
	<title>Python Interpreter</title>
	<script async src="https://cdn.jsdelivr.net/pyodide/v0.23.0/full/pyodide.js"></script>
    <style>
        html {
            background-color: #2e323b;
        }
    </style>
</svelte:head>

<Navigation
	on:file_new={file_new}
	on:file_open={file_open}
	on:file_save={file_save}
	on:file_save_as={file_save_as}

	on:edit_undo={edit_undo}
	on:edit_redo={edit_redo}
	on:edit_cut={edit_cut}
	on:edit_copy={edit_copy}
	on:edit_paste={edit_paste}

    on:view_toggle_terminal={view_toggle_terminal}
    on:view_clear_terminal={view_clear_terminal}
    on:view_split_tabs_horizontally={view_split_tabs_horizontally}
    on:view_split_tabs_vertically={view_split_tabs_vertically}

    on:run={run}
/>

<main bind:this={elements.wrapper}>
	<CodeMirror bind:this={codemirror} filetype={[pythonLanguageSupport()]}/>
	<div id="shell">
		<span bind:this={elements.shellTitle} id="shell-title"></span>
    	<textarea bind:this={elements.terminal} id="terminal" readonly></textarea>
	</div>
</main>

<style lang="scss">
	main {
		height: calc(100vh - 2rem);
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 1fr 1fr;
        gap: 0.25rem;
        padding: 0.25rem;
        box-sizing: border-box;
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
