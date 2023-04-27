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
			description: 'webpage & stuff',
			language: ['Svelte', 'TypeScript', 'Sass']
		}
	];
</script>

<main>
	<div>
		<Title text="Zygon🦑" style="margin: 1rem 1rem 0 1rem"/>
		<RepositoryCard {...data[0]}>
			<div class="image-container">
				<a href="{base}/zygon">
					<img alt="" src="assets/projects/pseudocode2python.jpeg">
				</a>
			</div>
		</RepositoryCard>
	</div>

	<div>
		<Title text="Online Python Interpreter" style="margin: 1rem 1rem 0 1rem"/>
		<RepositoryCard {...data[1]}>
			<div class="image-container">
				<a href="{base}/python-interpreter">
					<img alt="" src="assets/projects/python-interpreter.jpeg">
				</a>
			</div>
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

	.image-container {
		width: 100%;
		padding: 1rem;
		box-sizing: border-box;
		display: flex;
		justify-content: center;

		a {
			width: 95%;
			padding: 0;
			border: 0;
			cursor: pointer;
		}

		img {
			height: 100%;
			width: 100%;
			// border-radius: 0.125rem;
			border: 1px lightgrey solid;
			border-radius: 0.125rem;
			cursor: pointer;
		}

		img:hover {
			transform: scale(1.1);
			transition: top ease 0.5s;
			border-color: lightblue;
		}
	}
</style>
