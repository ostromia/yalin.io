<script>
	import Navigation from '$index/Navigation.svelte';
	import Namespace from '$index/Namespace.svelte';
	import Carousel from '$index/Carousel.svelte';
	import Repositories from '$index/Repositories.svelte';
</script>

<svelte:head>
	<title>berkay-yalin.io</title>
	<style>
		::-webkit-scrollbar {
			width: 0.5vw;
		}
		::-webkit-scrollbar-track {
			background: rgb(206, 206, 206);
		}
		::-webkit-scrollbar-thumb {
			background: rgb(136, 136, 136);
		}
		::-webkit-scrollbar-thumb:hover {
			background: rgb(85, 85, 85);
		}
	</style>
</svelte:head>

<Navigation/>
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
