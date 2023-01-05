<script>
    const links = [
        { type: 'txt', id: 'projects', href: `/projects` },
        { type: 'txt', id: 'articles', href: `/articles` },
        { type: 'txt', id: 'gists', href: `https://gist.github.com/berkay-yalin` },
        { type: 'svg', id: 'github', src: 'devicon/github-original.svg', href: `https://github.com/berkay-yalin` },
    ];
</script>

<nav>
    <a class="nav-text" id="nav-index" href="/">~/berkay-yalin.io</a>
    {#each links as i}
        {#if i.type == 'txt'}
            <a class="nav-text" style="grid-area: {i.id}" href={i.href}>
                {i.id.charAt(0).toUpperCase() + i.id.slice(1)}
            </a>
        {:else if i.type == 'svg'}
            <a class="nav-image" style="grid-area: {i.id}" href={i.href}>
                <img alt="" src={i.src}>
            </a>
        {/if}
    {/each}
</nav>

<style lang="scss">
    nav {
        height: 5vh;
        width: 100%;

        background-color: $fc;

        padding: 0 1rem 0 1rem;
        box-sizing: border-box;

        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(4, min-content) auto min-content;
        grid-template-rows: 1fr;
        grid-template-areas: "index projects articles gists . github";
    }

    #nav-index {
        grid-area: index;
        padding-right: 1vw;
        font-size: 2.4vh;
    }

    .nav-text {
        white-space: nowrap;

        color: white;
        text-decoration: none;

        line-height: 5vh;
        font-size: 2vh;
        font-family: courier;
        font-weight: bold;
    }

    .nav-image {
        display: flex;
        justify-content: center;
        align-items: center;

        > img {
            height: 3vh;
            width: 3vh;
        }
    }
</style>
