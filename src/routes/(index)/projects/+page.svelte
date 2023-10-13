<script lang="ts">
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
		},
        {
            path: "berkay-yalin/promethium",
            description: "Library for calculating statistical distributions, written in pure Python with zero dependencies.",
            language: ["Python"],
            style: "background-color: transparent"
        }
	];
</script>

<main>
	<section>
        <a href="https://github.com/berkay-yalin/promethium">
            <Title text="Promethium" style="margin: 1rem 1rem 0 1rem"/>
            <RepositoryCard {...data[2]}>
                <div id="promethium-content">
                    <div id="shields-container">
                        <img alt="PyPI - Version" src="https://img.shields.io/pypi/v/promethium.svg">
                        <img alt="PyPI - Python Version" src="https://img.shields.io/pypi/pyversions/promethium.svg">
                        <img alt="PyPI - License" src="https://img.shields.io/pypi/l/promethium">
                    </div>

                    <div>
                        Documentation:
                        <a href="https://github.com/berkay-yalin/promethium#promethium-">
                            README.MD
                        </a>
                    </div>

                    <div>
                        Contributing:
                        <a href="https://github.com/berkay-yalin/promethium/blob/main/CONTRIBUTING.md">
                            CONTRIBUTING.MD
                        </a>
                    </div>
                </div>
            </RepositoryCard>

            <!-- temporary solution to make entire section clickable -->
            <div style="height: 100%"></div>
        </a>
	</section>

	<section>
        <a href="{base}/zygon">
            <Title text="Zygon🦑" style="margin: 1rem 1rem 0 1rem"/>
            <RepositoryCard {...data[0]}>
                <img alt="" class="screenshot" src="assets/projects/pseudocode2python.jpeg">
            </RepositoryCard>
        </a>
	</section>

	<section>
        <a href="{base}/python-interpreter">
            <Title text="Online Python Interpreter" style="margin: 1rem 1rem 0 1rem"/>
            <RepositoryCard {...data[1]}>
                <img alt="" class="screenshot" src="assets/projects/python-interpreter.jpeg">
            </RepositoryCard>
        </a>
	</section>
</main>

<style lang="scss">
	main {
		display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		gap: 1rem;
    }

	section {
        border-radius: 0.5rem;
        box-sizing: border-box;
        background-color: $fc;
        overflow: hidden;
    }

    section:hover {
        box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.3);
	}

    section > a {
        text-decoration: none;
	}

	.screenshot {
        border: 1px grey solid;
        border-radius: 0.125rem;
        margin: 1rem;
        box-sizing: border-box;
    }

    #promethium-content {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        #shields-container {
            display: flex;
            padding: 0.5rem 0;
            box-sizing: border-box;
            gap: 0.5rem;
        }

        a {
            color: rgb(88, 166, 255);
        }
    }

</style>
