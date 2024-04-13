<script>
	import Navigation from '$r/(index)/Navigation.svelte';
	import NavigationMobile from '$r/(index)/NavigationMobile.svelte';

    let screenWidth;
</script>

<svelte:window bind:innerWidth={screenWidth}/>

{#if screenWidth > 600}
    <Navigation/>
{:else}
    <NavigationMobile/>
{/if}

<main>
    <slot></slot>
</main>

<style lang="scss">
    :global(html) {
        background-color: $bc;
    }

    main {
        // display: flex;
        // flex-direction: column;
        // align-items: center;
        // padding: 2rem;
        // box-sizing: border-box;
    }
</style>
