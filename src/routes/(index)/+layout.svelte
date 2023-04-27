<script>
	import Navigation from '$r/(index)/Navigation.svelte';
</script>

<Navigation/>
<main><slot/></main>

<style lang="scss">
	main {
		position: fixed;
		inset: 2rem 0 0 0;
		overflow-y: auto;
		overflow-x: hidden;
		padding: 2rem;
		box-sizing: border-box;
	}
</style>
