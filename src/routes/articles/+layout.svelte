<script>
	import Navigation from '$r/(index)/Navigation.svelte';
	import NavigationMobile from '$r/(index)/NavigationMobile.svelte';

    let screenWidth;
</script>

<svelte:window bind:innerWidth={screenWidth}/>

<div id="wrapper-layout">
    <div id="wrapper-navigation">
        {#if screenWidth > 500}
            <Navigation/>
        {:else}
            <NavigationMobile/>
        {/if}
    </div>

    <div id="wrapper-slot">
        <slot></slot>
    </div>
</div>

<style lang="scss">
    :global(html), :global(body) {
        height: 100%;
        width: 100%;
    }

    #wrapper-layout {
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
    }
</style>
