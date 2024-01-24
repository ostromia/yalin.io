<script lang="ts">
	import GithubGist from '$lib/GithubGist.svelte';
</script>

<div id="wrapper">
    <GithubGist style="" url="https://gist.github.com/berkay-yalin/e6f737f32db49f72f30dde1b8fdf03ce"/>
</div>

<style lang="scss">
    :global(html), :global(body) {
        height: 100%;
        width: 100%;
    }

    #wrapper {
        display: flex;
        flex-direction: column;
        height: calc(100% - 2rem);
    }
</style>
