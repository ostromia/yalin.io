<script>
	import { onMount } from 'svelte';

	export let id;
	let editor;

	export function set(data, position = 1) {
		editor.setValue(data, position);
	}
	export function get() {
		return editor.getValue();
	}
	export function mode(language) {
		editor.session.setMode('ace/mode/' + language);
	}

	onMount(async () => {
		const ace = await import('ace-builds/src-noconflict/ace');
		await import('ace-builds/src-noconflict/theme-dracula');
		await import('ace-builds/src-noconflict/mode-python');
		editor = ace.edit(id);
		editor.setTheme('ace/theme/dracula');
		editor.setFontSize('16px');
		editor.resize();
	});
</script>

<div {id}></div>
