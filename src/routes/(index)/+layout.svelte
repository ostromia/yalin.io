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
    main {
		padding: 1rem;
		box-sizing: border-box;
	}
</style>
