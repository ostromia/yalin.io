<script>
	import Navigation from '$lib/Navigation.svelte';
	import NavigationMobile from '$lib/NavigationMobile.svelte';

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

<!-- <style lang="scss">
    main {
		padding: 1rem;
		box-sizing: border-box;
	}
</style> -->
