<script>
	import Namespace from '$iindex/Namespace.svelte';
	import Carousel from '$iindex/Carousel.svelte';
	import Repositories from '$iindex/Repositories.svelte';
</script>

<main>
	<Namespace/>
	<div style="height: 1rem"></div>
	<Carousel/>
	<div style="height: 10vh"></div>
	<div style="height: 1rem"></div>
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
