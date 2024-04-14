<script>
    import "@fontsource/jetbrains-mono";
    import links from "$lib/links";
    import Favicon from "$lib/Favicon.svelte";

    let state = false;
</script>

<nav>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-missing-attribute -->
    <a class="wrapper-favicon" on:click={() => (state = !state)}>
        <Favicon width="1.5rem"/>
    </a>

    {#if state}
        <a class="nav-link" on:click={() => (state = !state)} href={links.index}>
            Home
        </a>

        <a class="nav-link" on:click={() => (state = !state)} href={links.projects}>
            Projects
        </a>

        <a class="nav-link" on:click={() => (state = !state)} href={links.articles}>
            Articles
        </a>

        <a class="nav-link" href={links.github} style="margin-bottom: 0.5rem">
            GitHub
        </a>
    {/if}
</nav>

<style lang="scss">
    * {
        font-family: "Albert Sans";
    }

    nav {
        min-height: 2rem;
        background-color: #21252b;
        display: flex;
        flex-direction: column;
        align-items: center;
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
        font-size: 0.8rem;
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
