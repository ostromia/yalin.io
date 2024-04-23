<script>
    import "@fontsource/albert-sans";
    import Heading from "$index/Heading.svelte";
    import articlesJSON from "$articles/articles.json";
</script>

<div class="wrapper-articles">
    <Heading id="articles">Articles</Heading>

    <main>
        <ul>
            {#each Object.values(articlesJSON).reverse() as {url, title, date, description}}
                <li>
                    <a data-sveltekit-reload class="anchor-label" href={url}>
                        {title} ⧉
                    </a>

                    <div class="div-description">
                        {description}
                    </div>
                </li>
            {/each}
        </ul>
    </main>
</div>

<style lang="scss">
    @import "./src/styles/styles.scss";

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
        color: $link-color;
        font-size: 1rem;
        font-family: 'Albert Sans';
        text-decoration: none;
    }

    .div-description {
        color: rgb(139, 148, 158);
    }
</style>
