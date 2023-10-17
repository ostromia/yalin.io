<script>
	import { base } from '$app/paths';
	import "@fontsource/jetbrains-mono";
    import Favicon from "$lib/Favicon.svelte";

    let state_ = false;
</script>


<nav>
    <button on:click={() => (state_ = !state_)}>
        <Favicon width="2rem"/>
    </button>

    {#if state_ == true}
        <a href="{base}/" on:click={() => (state_ = !state_)}>
            Home
        </a>

        <a href="{base}/projects" on:click={() => (state_ = !state_)}>
            Projects
        </a>

        <a href="{base}/articles" on:click={() => (state_ = !state_)}>
            Articles
        </a>

        <a href="https://gist.github.com/berkay-yalin" on:click={() => (state_ = !state_)}>
            Gists
        </a>

        <a href="https://github.com/berkay-yalin" on:click={() => (state_ = !state_)}>
            GitHub
        </a>
    {/if}
</nav>

<style lang="scss">
	nav {
		min-height: 2rem;
		background-color: $fc;
        box-sizing: border-box;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        align-items: center;
	}

    nav :last-child {
        padding-bottom: 1rem;
        box-sizing: border-box;
    }

    button {
        height: 2rem;
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
    }

    a {
        line-height: 1rem;
        font-size: 1rem;
        font-family: "JetBrains Mono";
        color: white;
        white-space: nowrap;
        text-decoration: none;
    }
</style>
