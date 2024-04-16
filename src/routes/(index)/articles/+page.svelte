<script>
    import { base } from "$app/paths";
    import "@fontsource/albert-sans";
    import Heading from "$index/Heading.svelte";

    const sections = [
        {
            heading: "Articles",
            description: "Articles I've written on topics that interest me:",
            list: [
                {
                    url: `${base}/articles/knight-probability-in-chessboard`,
                    label: "Leet Code 688. Knight probability in chessboard",
                    description: "A much more efficient solution to Leet Code question 688 using recursion and the Law of Total Probability"
                },
            ]
        },
        {
            heading: "Resources",
            description: "Useful resources I've collected from around the internet:",
            list: [
                {
                    url: `${base}/articles/gamma-functions`,
                    label: "Gamma Functions",
                    description: "Definitions of the gamma functions"
                },
                {
                    url: `https://gist.github.com/berkay-yalin/e6f737f32db49f72f30dde1b8fdf03ce`,
                    label: 'Vim Indentation',
                    description: "All .vimrc configurations relating to indentation"
                },
            ]
        }
    ];
</script>

<div class="wrapper-articles">
    <Heading id="articles">Articles</Heading>

    <main>
        <ul>
            {#each sections as section}
                {#each section.list as { url, label, description }}
                    <li>
                        <a class="anchor-label" href={url}>
                            {label}
                        </a>

                        <a class="anchor-character" href={url}>
                            ⧉
                        </a>

                        <div class="div-description">
                            {description}
                        </div>
                    </li>
                {/each}
            {/each}
        </ul>
    </main>
</div>

<style lang="scss">
    .wrapper-articles {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        box-sizing: border-box;
    }

    // reset default styles
    ul, li {
        margin:0;
        padding: 0;
        text-indent: 0;
        list-style-type: none;
    }

    $white-smoke: #f5f5f5;

    main {
        display: flex;
        flex-direction: column;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        > li {
            color: $white-smoke;

            > div {
                color: $white-smoke;
                font-size: 1rem;
                font-family: 'Albert Sans';
            }
        }
    }

    .anchor-label, .anchor-character {
        color: lightblue;
        font-size: 1rem;
        font-family: 'Albert Sans';
        text-decoration: none;
    }

    .div-description {
        color: rgb(139, 148, 158);
    }
</style>
