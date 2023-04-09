<script>
	import Namespace from '$index/Namespace.svelte';
	import Carousel from '$index/Carousel.svelte';
	import Repositories from '$index/Repositories.svelte';
</script>

<svelte:head>
	<title>berkay-yalin.io</title>
</svelte:head>

<main>
	<Namespace/>
	<div style="height: 1.5rem"></div>
	<Carousel/>
	<div style="height: 1.5rem"></div>
	<Repositories/>
</main>

<style lang="scss">
	:global(body) {
		overflow-x: hidden;
	}
	main {
		padding: 2rem;
		box-sizing: border-box;
	}
</style>
