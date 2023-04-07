<script>
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';
	import "@fontsource/albert-sans";
	import Title from '$lib/Title.svelte';

	const repositoryIcon = 'M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z';
	const images = [
		{
			id: 'image_p2p',
			url: `${base}/pseudocode2python`,
			src: 'assets/projects/pseudocode2python.jpeg',
		},
		{
			id: 'image_pi',
			url: `${base}/python-interpreter`,
			src: 'assets/projects/python-interpreter.jpeg',
		},
	];
	const languages = [
		{ name: 'HTML', color: '#e34c26' },
		{ name: 'Svelte', color: '#ff3e00' },
		{ name: 'JavaScript', color: '#f1e05a' },
		{ name: 'TypeScript', color: '#3178c6' },
		{ name: 'CSS', color: '#563d7c' },
		{ name: 'Sass', color: '#a53b70' },
	];
	const data = {
		html_url: 'https://github.com/berkay-yalin/berkay-yalin.io',
		name: 'berkay.yalin.io',
		description: 'personal portfolio website',
		language: 'JavaScript',
	};
</script>

<div id="project-container">
	<div>
		<div id="title">
			<svg height="16" width="16" viewBox="0 0 16 16" version="1.1">
				<path fill-rule="evenodd" d={repositoryIcon} />
			</svg>
			<a href={data.html_url}>{data.name}</a>
		</div>

		<div id="languages">
			{#each languages as { name, color }}
				<div>
					<div
						class="language-icon"
						id="{name.toLowerCase()}-icon"
						style="background-color:{color}"
					/>
					<div class="language-text">{name}</div>
				</div>
			{/each}
		</div>

		<div id="image_container">
			<Title text="Pseudocde to Python Transpiler"/>
			<Title text="Online Python Interpreter"/>

			<p>Convert OCR regulated pseudocode into Python</p>
			<p>Simplistic IDE to write Python code in the browser</p>

			{#each images as { id, url, src }}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<img alt="" {id} on:click={() => goto(url)} {src}>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	$background-color: rgb(33, 37, 43);
	$color: rgb(139, 148, 158);
	$link-color: rgb(88, 166, 255);

	#project-container {
		width: 100%;

		> div {
			padding: 1rem;
			border-radius: 0.5rem;
			box-sizing: border-box;

			background-color: $background-color;

			font-size: 16px;
			font-family: 'Albert Sans';
			color: $color;
			text-decoration: none;
		}
	}

	#title {
		min-height: 2rem;

		display: flex;
		align-items: center;

		> svg {
			fill: $color;
		}

		> a {
			color: $link-color;
			text-decoration: none;
		}
	}

	#title > a {
		margin: 0 0 3px 5px;
	}

	$l_lh: 14px;

	#languages {
		min-height: 2rem;
		width: 100%;

		display: flex;
		align-items: center;
		justify-content: start;
		flex-wrap: wrap;

		> div {
			min-height: $l_lh;
			display: flex;
			align-items: center;
			margin-bottom: 0.5rem;
		}
	}

	.language-icon {
		height: $l_lh;
		width: $l_lh;
		border-radius: 100%;
	}

	.language-text {
		font-weight: bold;
		line-height: $l_lh;
		font-size: $l_lh;
	}

	#languages > div {
		margin-right: 15px;
	}
	.language-text {
		padding-left: 5px;
	}

	#image_container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-areas:
			't1 t2'
			'p1 p2'
			'i1 i2';
		grid-column-gap: 1rem;
		margin-top: 1rem;

		p {
			line-height: 16px;
			margin-top: 0.5rem !important;
		}

		img {
			height: 100%;
			width: 100%;
			object-fit: contain;
			display: block;
			border: 2px solid white;
			box-sizing: border-box;
			cursor: pointer;
		}
	}
</style>
