<script lang="ts">
	import { base } from '$app/paths';
	import RepositoryCard from '$lib/RepositoryCard.svelte';

    const data = [
        {
            path: "berkay-yalin/promethium",
            description: "Library for calculating statistical distributions, written in pure Python with zero dependencies.",
            language: ["Python"]
        },
        {
            path: 'berkay-yalin/zygon',
            description: 'Transpile OCR GCSE & A-Level Pseudocode into Python',
            language: ['Svelte', 'TypeScript', 'JavaScript', 'HTML', 'Sass', 'CSS']
        },
        {
            path: 'berkay-yalin/yalin.io',
            description: 'Online Python Interpreter',
            language: ['Svelte', 'TypeScript', 'JavaScript', 'HTML', 'Sass', 'CSS']
        },
        {
            path: 'berkay-yalin/yalin.io',
            description: 'webpage & stuff',
            language: ['Svelte', 'TypeScript', 'JavaScript', 'HTML', 'Sass', 'CSS']
        },
        {
            path: "berkay-yalin/dotfiles",
            description: "trying to figure out how VimScript works",
            language: ["Lua", "Shell", "Vim Script", "PowerShell", "AutoHotkey"]
        }
	];
</script>

<main>
    <section>
        <RepositoryCard {...data[0]}>
            <div id="promethium-content">
                <div id="shields-container">
                    <img alt="PyPI - Version" src="https://img.shields.io/pypi/v/promethium.svg">
                    <img alt="PyPI - License" src="https://img.shields.io/pypi/l/promethium">
                    <img alt="PyPI - Python Version" src="https://img.shields.io/pypi/pyversions/promethium.svg">
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
    </section>

    <section>
        <RepositoryCard {...data[1]}>
            <a class="wrapper-screenshot" href="{base}/zygon">
                <img alt="" class="screenshot" src="assets/projects/zygon.png">
                <div class="click-me-text">Click Me!</div>
            </a>
        </RepositoryCard>
    </section>

    <section>
        <RepositoryCard {...data[2]}>
            <a class="wrapper-screenshot" href="{base}/python-interpreter">
                <img alt="" class="screenshot" src="assets/projects/python-interpreter.jpeg">
                <div class="click-me-text">Click Me!</div>
            </a>
        </RepositoryCard>
    </section>

    <section>
        <RepositoryCard {...data[3]}/>
    </section>

    <section>
        <RepositoryCard {...data[4]}/>
    </section>
</main>

<style lang="scss">
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
        background-color: $fc;
        flex: 1 1 30%;
    }

    section:hover {
        box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.3);
	}

    .wrapper-screenshot {
        position: relative;
        display: flex;
        justify-content: center;
    }

    .click-me-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        color: $link-color;
        text-decoration: underline;
        background-color: rgba(54, 69, 79, 0.9);

        padding: 0.25rem;
        box-sizing: border-box;
        border-radius: 0.25rem;
    }

	.screenshot {
        width: 50%;
        border: 1px grey solid;
        border-radius: 0.125rem;
        box-sizing: border-box;
    }

    #promethium-content {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        #shields-container {
            display: flex;
            box-sizing: border-box;
            gap: 0.5rem;
            flex-wrap: wrap;
        }

        a {
            color: $link-color;
        }
    }
</style>
