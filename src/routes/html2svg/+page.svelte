<script>
	import { onMount } from 'svelte';
	import { documentToSVG, elementToSVG } from 'dom-to-svg'
	import Navigation from '$r/html2svg/Navigation.svelte';

	let editor;

	function clear() {
		editor.setValue('');
		convert();
	}

	function convert() {
		// let blob = new Blob([editor.getValue()], {type: "text/html; charset=utf-8"});
		// document.getElementById('output').src = URL.createObjectURL(blob);
		document.getElementById('output').srcdoc = editor.getValue();

		// console.log(document.getElementById('output').src);
		// console.log(JSON.stringify(document.getElementById('output'), null, 4))


		// let iframe = document.getElementById('output');
		// iframe.src = "data:text/html;charset=utf-8," + editor.getValue();

		// console.log(editor.getValue());

		// document.body.appendChild(iframe);


		// let iframe = document.getElementById('output').contentDocument
		// let frameWindow = open('url', 'outputHTML');
		// frameWindow.document.write(editor.getValue());
		// frameWindow.close()

		// let SVG = elementToSVG(window.frames.outputHTML.document.body);

		// let svg_iframe = document.getElementById('outputSVG');

		// const XML_S = new XMLSerializer();
		// const SVG_STR = XML_S.serializeToString(SVG);
		// svg_iframe.contentWindow.document.body.innerHTML = SVG_STR;
	}

	function save() {
		// const client_html = document.querySelector('#output').contentDocument;
		const SVG = documentToSVG(document.querySelector('#output').contentDocument);
		const XML = (new XMLSerializer()).serializeToString(SVG);

		let file = new Blob([XML], {type: 'image/svg+xml'});
		let a = document.createElement('a');
		a.href = URL.createObjectURL(file);
		a.download = 'output.svg';
		a.click();


		// console.log(document.getElementById('output'));
		// let file = new Blob([window.frames.outputSVG.docueent.body.outerHTML]);
		// let a = document.createElement('a');
		// let url = URL.createObjectURL(file);

		// a.href = url;
		// a.download = 'output.svg';
		// document.body.appendChild(a);
		// a.click();
	}



	onMount(async () => {
		const ace = await import('ace-builds/src-noconflict/ace');
		await import('ace-builds/src-noconflict/theme-dracula');
		await import('ace-builds/src-noconflict/mode-html');
		editor = ace.edit('editor');
		editor.setTheme('ace/theme/dracula');
		editor.setFontSize(14);
		editor.resize();



		const exampleHTML = `<head>
	<style>
		#circle {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 10rem;
			width: 10rem;
			border-radius: 50%;
			background-color: red;
			border: 1rem solid crimson;
		}
		#text {
			line-height: 3rem;
			font-size: 3rem;
			font-family: "papyrus";
		}
	</style>
</head>
<body>
	<div id="circle">
		<span id="text">SVG</span>
	</div>
</body>`;

		editor.setValue(exampleHTML, 1);
		convert();
	});
</script>

<svelte:head>
	<title>HTML to SVG Converter</title>
</svelte:head>

<Navigation on:clear={clear} on:convert={convert} on:save={save}/>


<main>
	<div id="editor"></div>
	<iframe id="output" title="output" name="output" src=''></iframe>
</main>

<style lang="scss">
	main {
		height: 95vh;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.5rem;
		padding: 0.5rem;
		box-sizing: border-box;
	}
	iframe {
		height: 100%;
		width: 100%;
		overflow: hidden;
		background-color: white;
		box-sizing: border-box;
	}
</style>
