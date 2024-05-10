<script>
    import "@fontsource/albert-sans";
    import Favicon from "$lib/Favicon.svelte";
</script>

<nav>
    <a data-sveltekit-reload class="wrapper-favicon" href="/">
        <Favicon height="1rem" width="2rem" color="grey" colorhover="white"/>
    </a>

    <div></div>

    <a data-sveltekit-reload class="nav-link" href="/projects">
        Projects
    </a>

    <a data-sveltekit-reload class="nav-link" href="/articles">
        Articles
    </a>

    <a class="nav-link" href="https://github.com/berkay-yalin">
        GitHub
    </a>
</nav>

<style lang="scss">
    * {
        font-family: "Albert Sans";
    }

    nav {
        display: grid;
        grid-template-columns: min-content auto repeat(3, min-content);
        align-items: center;
        gap: 1rem;
        padding: 1.5rem;
        box-sizing: border-box;
    }

    .wrapper-favicon {
        height: 1rem;
        box-sizing: border-box;
    }

    .nav-link {
        color: grey;
        text-decoration: none;
        height: 1rem;
        box-sizing: border-box;
    }

    .nav-link:hover {
        cursor: pointer;
        color: white;
    }

    .wrapper-favicon, .nav-link {
        display: flex;
        align-items: center;
    }
</style>
