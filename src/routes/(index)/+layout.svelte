<script>
	import Navigation from '$index/Navigation.svelte';
</script>

<svelte:head>
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
<div id="main-wrapper">
	<slot/>
</div>

<style lang="scss">
	:global(body) {
		overflow-x: hidden;
	}

	#main-wrapper {
		padding: 2rem;
		box-sizing: border-box;
	}
</style>
