<script lang="ts">
	import { base } from '$app/paths';
    import Heading from "$index/Heading.svelte";
    // import Carousel from "$index/projects/Carousel.svelte";
	import RepositoryCard from '$index/projects/RepositoryCard.svelte';

    const data = [
        {
            path: "berkay-yalin/promethium",
            description: "Library for calculating statistical distributions, written in pure Python with zero dependencies.",
            language: ["Python"]
        },
        {
            path: 'berkay-yalin/zygon',
            description: 'Transpile OCR GCSE & A-Level Pseudocode into Python',
            language: ['Svelte']
        },
        {
            path: 'berkay-yalin/yalin.io',
            description: 'Online Python Interpreter',
            language: ['Svelte']
        },
        {
            path: 'berkay-yalin/yalin.io',
            description: 'webpage & stuff',
            language: ['Svelte', 'TypeScript', 'JavaScript', 'HTML', 'Sass', 'CSS']
        },
        {
            path: "berkay-yalin/dotfiles",
            description: "trying to figure out how VimScript works",
            language: ["Lua", "Shell", "AutoHotkey", "Vim Script", "PowerShell"]
        }
	];
</script>

<div class="wrapper-projects">
    <Heading>Projects</Heading>

    <main>
        <section>
            <RepositoryCard {...data[0]}/>
        </section>

        <section>
            <RepositoryCard {...data[1]}>
                <a data-sveltekit-preload-data="off" class="visit-website-link" href="{base}/zygon">
                    Visit Zygon ⧉
                </a>
            </RepositoryCard>
        </section>

        <section>
            <RepositoryCard {...data[2]}>
                <a data-sveltekit-preload-data="off" class="visit-website-link" href="{base}/python-interpreter">
                    Visit Python Interpreter ⧉
                </a>
            </RepositoryCard>
        </section>

        <!-- <Carousel/> -->

        <Heading>Other Repositories</Heading>

        <section>
            <RepositoryCard {...data[3]}/>
        </section>

        <section>
            <RepositoryCard {...data[4]}/>
        </section>
    </main>
</div>

<style lang="scss">
    @use "sass:map";
    @import "./src/styles/styles.scss";
    @import "./src/styles/onedark.scss";

    .wrapper-projects {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        box-sizing: border-box;
    }

    $link-color: rgb(88, 166, 255);

	main {
        display: flex;
        gap: 0.6rem;
        flex-wrap: wrap;
        gap: 1rem;
    }

	section {
        border-radius: 0.5rem;
        box-sizing: border-box;
        background-color: map.get($onedark, "bg_d");
        flex: 1 1 30%;
    }

    section:hover {
        box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.3);
	}

    .visit-website-link {
        color: $link-color;
        margin: auto;
        text-decoration: none;
    }


</style>
