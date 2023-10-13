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
            style: "background-color: transparent"
		},
		{
			path: 'berkay-yalin/berkay-yalin.io',
			description: 'webpage & stuff',
			language: ['Svelte', 'TypeScript', 'Sass'],
            style: "background-color: transparent"
		}
	];
</script>

<main>
	<div>
        <a href="{base}/zygon">
            <Title text="Zygon🦑" style="margin: 1rem 1rem 0 1rem"/>
            <RepositoryCard {...data[0]}>
                <img alt="" src="assets/projects/pseudocode2python.jpeg">
            </RepositoryCard>
        </a>
	</div>

	<div>
        <a href="{base}/python-interpreter">
            <Title text="Online Python Interpreter" style="margin: 1rem 1rem 0 1rem"/>
            <RepositoryCard {...data[1]}>
                <img alt="" src="assets/projects/python-interpreter.jpeg">
            </RepositoryCard>
        </a>
	</div>
</main>

<style lang="scss">
	main {
		display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		gap: 1rem;
    }

	div {
        border-radius: 0.5rem;
        box-sizing: border-box;
        background-color: $fc;
    }

    div:hover {
        box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.3);
	}

    a {
        text-decoration: none;
	}

	img {
        border: 1px grey solid;
        border-radius: 0.125rem;
        margin: 1rem;
        box-sizing: border-box;
    }
</style>
