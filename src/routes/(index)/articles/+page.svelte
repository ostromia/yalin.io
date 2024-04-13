<script>
    import { base } from "$app/paths";

	import "@fontsource/jetbrains-mono";
	import "@fontsource/albert-sans";

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

<main>
    {#each sections as section}
        <div class="wrapper-section">
            <!-- <h2>{section.heading}</h2> -->
            <!-- <div>{section.description}</div> -->
            <ul>
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
            </ul>
        </div>
    {/each}
</main>

<style lang="scss">
    main {
        padding: 1rem;
        box-sizing: border-box;
    }

    $white-smoke: #f5f5f5;

    // resetting default margins
    h2, ul { margin: 0 }

    .wrapper-section {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-bottom: 1rem;
    }

    h2 {
        color: $white-smoke;
        font-size: 1.25rem;
        font-weight: normal;
		font-family: 'Albert Sans';
    }

    div {
        color: $white-smoke;
        font-size: 1rem;
		font-family: 'Albert Sans';
    }

    ul {
    padding: 0;
    list-style-type: none;
        > li {
            color: $white-smoke;
        }

        > :not(li:last-child) {
            margin-bottom: 1rem;
        }
    }

    .anchor-label, .anchor-character {
        color: lightblue;
        font-size: 1rem;
		font-family: 'Albert Sans';
        text-decoration: none;
    }

    .div-description {
        font-style: italic;
    }
</style>
