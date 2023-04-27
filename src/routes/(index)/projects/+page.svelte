<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import RepositoryCard from '$lib/RepositoryCard.svelte';
	import Title from '$index/projects/Title.svelte';

	const data = [
		{
			path: 'berkay-yalin/zygon',
			description: 'Transpile OCR GCSE & A-Level Pseudocode into Python',
			language: ['TypeScript', 'Svelte', 'JavaScript', 'HTML', 'Sass', 'CSS'],
		},
		{
			path: 'berkay-yalin/berkay-yalin.io',
			description: 'personal website',
			language: ['Svelte', 'TypeScript', 'Sass']
		}
	];
</script>

<main>
	<div>
		<Title text="Zygon🦑" style="margin: 1rem 1rem 0 1rem"/>
		<RepositoryCard {...data[0]}>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-missing-attribute -->
			<img on:click={() => goto(`${base}/zygon`)} src="assets/projects/pseudocode2python.jpeg">
		</RepositoryCard>
	</div>

	<div>
		<Title text="Online Python Interpreter" style="margin: 1rem 1rem 0 1rem"/>
		<RepositoryCard {...data[1]}>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-missing-attribute -->
			<img on:click={() => goto(`${base}/python-interpreter`)} src="assets/projects/python-interpreter.jpeg">
		</RepositoryCard>
	</div>
</main>

<style lang="scss">
	main {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;

		> div {
			border-radius: 0.5rem;
			box-sizing: border-box;
			background-color: $fc;
		}
	}

	img {
		margin-top: 5px;
		box-sizing: border-box;
		width: 100%;
		border: 1px lightgrey solid;
		border-radius: 0.125rem;
	}
</style>
