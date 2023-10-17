<script>
	import RepositoryCard from '$lib/RepositoryCard.svelte';

	const repositories = [
		{
			path: 'berkay-yalin/berkay-yalin.io',
			language: ['Svelte'],
			description: 'webpage & stuff',
            style: "flex: max(200px, 100%/4);"
		},
		{
			path: 'berkay-yalin/promethium',
			description: 'Library for calculating statistical distributions, written in pure Python with zero dependencies.',
			language: ['Python'],
            style: "flex: max(400px, 100%/4);"
		},
		{
			path: 'berkay-yalin/dotfiles',
			description: 'trying to figure out how VimScript works',
			language: ['Lua'],
            style: "flex: max(200px, 100%/4);"
		},
		{
			path: 'berkay-yalin/scientific-computing-with-python',
			description: 'My solution links to freeCodeCamp\'s "Scientific Computing with Python" course.',
			language: ['Python'],
            style: "flex: max(500px, 100%/4);"
		},
		{
			path: 'berkay-yalin/zygon',
			description: 'Transpile OCR GCSE & A-Level Pseudocode into Python',
			language: ['TypeScript'],
            style: "flex: max(200px, 100%/4);"
		},
		{
			path: 'berkay-yalin/svelte-github-repo-card',
			description: 'Svelte component to showcase a GitHub repository.',
			language: ['JavaScript'],
            style: "flex: max(300px, 100%/4);"
		},
		{
			path: 'mikeroyal/Windows-11-Guide',
			description: 'Windows 11 Guide. Though, most of the Tools, Programs, Resources will also work for Windows 10.',
			language: ['PowerShell'],
            style: "flex: max(300px, 100%/4);"
		},
	];
</script>

<div id="wrapper">
	{#each repositories as parameters}
		<RepositoryCard {...parameters}/>
	{/each}
</div>

<style lang="scss">
	#wrapper {
        display: flex;
        flex-wrap: wrap;
		gap: 0.5rem;
	}
</style>
