<script>
	import RepositoryCard from '$lib/RepositoryCard.svelte';

	const repositories = [
		{
			path: 'berkay-yalin/berkay-yalin.io',
			language: ['Svelte'],
			description: 'personal website',
			style: 'grid-column: 1, grid-row: 1'
		},
		{
			path: 'berkay-yalin/scientific-computing-with-python',
			description: 'my solution links to freeCodeCamp\'s "Scientific Computing with Python" course',
			language: ['Python'],
			style: 'grid-column: 2 / 4; grid-row: 1'
		},
		{
			path: 'mikeroyal/Windows-11-Guide',
			description: 'Windows 11 Guide. Though, most of the Tools, Programs, Resources will also work for Windows 10.',
			language: ['Shell'],
			style: 'grid-column: 1 / 3; grid-row: 2'
		},
		{
			path: 'berkay-yalin/python-probabilities',
			description: 'Library for accurate statistical calculations using Python.',
			language: ['Python'],
			style: 'grid-column: 1 / 3; grid-row: 3'
		},
		{
			path: 'berkay-yalin/svelte-github-repo-card',
			description: 'Svelte component to showcase a GitHub repository.',
			language: ['JavaScript'],
			style: 'grid-column: 3; grid-row: 2'
		},
		{
			username: 'berkay-yalin/dotfiles',
			description: 'trying to figure out how neovim works',
			language: ['Lua'],
			style: 'grid-column: 3; grid-row: 3',
		},
	];
</script>

<div id="repository-grid">
	{#each repositories as parameters}
		<RepositoryCard {...parameters}/>
	{/each}
</div>

<style lang="scss">
	#repository-grid {
		display: grid;
		grid-template-rows: repeat(3, min-content);
		grid-template-columns: 1fr 1fr 1fr;
		gap: 0.5rem;
	}
</style>
