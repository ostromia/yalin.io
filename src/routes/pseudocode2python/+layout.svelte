<svelte:head>
	<title>Pseudocode to Python Transpiler</title>

	<style>
		@font-face {
			font-family: 'cabin';
			src: url("fonts/Cabin-VariableFont_wdth,wght.ttf");
		}

		::-webkit-scrollbar             { height: 0.2rem; width: 0.2rem  }
		::-webkit-scrollbar-track       { background: rgb(206, 206, 206) }
		::-webkit-scrollbar-thumb       { background: rgb(136, 136, 136) }
		::-webkit-scrollbar-thumb:hover { background: rgb(85, 85, 85)    }
	</style>
</svelte:head>

<slot/>

<style lang="scss">
	:global(html) { background-color: $bc }
	:global(body) { margin: 0 !important }
</style>
