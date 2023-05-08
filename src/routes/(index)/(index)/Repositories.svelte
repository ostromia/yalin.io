<script>
	import RepositoryCard from '$lib/RepositoryCard.svelte';

	const repositories = [
		{
			path: 'berkay-yalin/berkay-yalin.io',
			language: ['Svelte'],
			description: 'webpage & stuff',
			style: 'grid-column: 1, grid-row: 1'
		},
		{
			path: 'berkay-yalin/zygon',
			description: 'Transpile OCR GCSE & A-Level Pseudocode into Python',
			language: ['TypeScript'],
			style: 'grid-column: 2 / 4; grid-row: 1'
		},
		{
			path: 'berkay-yalin/dotfiles',
			description: 'trying to figure out how VimScript works',
			language: ['Lua'],
			style: 'grid-column: 4; grid-row: 1'
		},
		{
			path: 'berkay-yalin/promethium',
			description: 'Library for calculating statistical distributions, written in pure Python with zero dependencies.',
			language: ['Python'],
			style: 'grid-column: 1 / 2; grid-row: 2'
		},
		{
			path: 'berkay-yalin/svelte-github-repo-card',
			description: 'Svelte component to showcase a GitHub repository.',
			language: ['JavaScript'],
			style: 'grid-column: 2; grid-row: 2'
		},
		{
			path: 'mikeroyal/Windows-11-Guide',
			description: 'Windows 11 Guide. Though, most of the Tools, Programs, Resources will also work for Windows 10.',
			language: ['PowerShell'],
			style: 'grid-column: 3 / 5; grid-row: 2'
		},
		{
			path: 'berkay-yalin/scientific-computing-with-python',
			description: 'My solution links to freeCodeCamp\'s "Scientific Computing with Python" course.',
			language: ['Python'],
			style: 'grid-column: 1 / 4; grid-row: 3'
		}
	];
</script>

<div id="repository-grid">
	{#each repositories as parameters}
		<RepositoryCard {...parameters}/>
	{/each}

	<div id="placeholder"></div>
</div>

<style lang="scss">
	#repository-grid {
		display: grid;
		grid-template-rows: repeat(4, min-content);
		grid-template-columns: 1fr 1fr 1fr;
		gap: 0.5rem;
	}

	#placeholder {
		height: 100%;
		border-radius: 0.5rem;
		box-sizing: border-box;
		background-color: $fc;
	}
</style>
