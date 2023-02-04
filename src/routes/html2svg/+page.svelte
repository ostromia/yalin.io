<script>
	import {onMount} from 'svelte';
	import {documentToSVG, elementToSVG, inlineResources} from 'dom-to-svg';
	import Navigation from '$r/html2svg/Navigation.svelte';

	let editor;

	function html2svg(HTML) {
		let output = elementToSVG(HTML);
		// await inlineResources(output.documentElement);
		const SVG_XML = new XMLSerializer();
		const XML = SVG_XML.serializeToString(output);

		return XML;


	}



	function convert() {
		let frameWindow = open('url', 'output');
		// frameWindow.document.write(editor.getValue());

		let output = elementToSVG(window.frames.output.document.body);
		// await inlineResources(output.documentElement);
		const SVG_XML = new XMLSerializer();
		const SVG_STR = SVG_XML.serializeToString(output);
		console.log(SVG_STR);
		frameWindow.document.write(
			`<body` + SVG_STR + `</body>`
		);



		// window2.document.write(SVG_STR);

		// editor.setValue(SVG_STR);


		// const parser = new DOMParser();
		// const xmlserializer = new XMLSerializer();

		// const outputDOM = parser.parseFromString(editor.getValue(), "text/html");
		// // const XML_STR = xmlserializer.serializeToString(HTML_DOM);

		// // console.log(XML_STR);
		// // console.log('end');

		// const outputSVG = elementToSVG(outputDOM.body);

		// console.log(outputSVG);


	}

	function save() {
		let file = new Blob([window.frames.output.document.body.outerHTML]);
		let a = document.createElement('a');
		let url = URL.createObjectURL(file);

		a.href = url;
		a.download = 'output.svg';
		document.body.appendChild(a);
		a.click();


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
</body>
`;

		editor.setValue(exampleHTML, 1);
	});
</script>

<svelte:head>
	<title>HTML to SVG Converter</title>
</svelte:head>

<Navigation on:convert={convert} on:save={save}/>

<main>
	<div id="editor"></div>
	<iframe id="output" title="output" name="output"></iframe>
</main>
<iframe id="frameHTML" style="display:none" title="output" name="frameHTML"></iframe>


<style lang="scss">
	main {
		height: 95vh;
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
	iframe {
		height: 100%;
		width: 100%;
		// overflow: hidden;
		background-color: white;
		box-sizing: border-box;
	}
</style>
