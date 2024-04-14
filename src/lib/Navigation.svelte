<script>
    import "@fontsource/albert-sans";
    import links from "$lib/links";
    import Favicon from "$lib/Favicon.svelte";
</script>

<nav>
    <a class="wrapper-favicon" href={links.index}>
        <Favicon width="1.5rem"/>
    </a>

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
        height: 2rem;
        background-color: #21252b;
    }

    .wrapper-favicon {
        height: 2rem;
        padding: 0 1rem;
        box-sizing: border-box;
    }

    .nav-link {
        color: white;
        text-decoration: none;
        height: 1.5rem;
        // font-size: 0.8rem;
        border-radius: 0.25rem;
        padding: 0.25rem 0.5rem;
        box-sizing: border-box;
    }

    .nav-link:hover {
        cursor: pointer;
        background-color: rgba(128, 128, 128, 0.2);
    }

    nav, .wrapper-favicon, .nav-link {
        display: flex;
        align-items: center;
    }
</style>
