<script>
    import "@fontsource/albert-sans";
    import links from "$lib/links";
    import Favicon from "$lib/Favicon.svelte";
</script>

<nav>
    <a class="wrapper-favicon" href={links.index}>
        <Favicon height="1rem" width="2rem" color="grey" colorhover="white"/>
    </a>

    <div></div>

    <a class="nav-link" href={links.projects}>
        Projects
    </a>

    <a class="nav-link" href={links.articles}>
        Articles
    </a>

    <a class="nav-link" href={links.github}>
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
        padding: 1rem;
        box-sizing: border-box;
    }

    .wrapper-favicon {
        height: 2rem;
        box-sizing: border-box;
    }

    .nav-link {
        color: grey;
        text-decoration: none;
        height: 1.5rem;
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
