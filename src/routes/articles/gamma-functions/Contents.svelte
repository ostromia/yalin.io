<script>
	export let style = '';
	import "@fontsource/sedgwick-ave-display"
	import "@fontsource/albert-sans"
</script>

<div id="gradient"></div>

<div style={style} id="wrapper">
	<div id="header">Gamma Function</div>
	<ul>
		<li><a href="#gamma-function">Gamma Function</a></li>
		<li><a href="#incomplete-gamma-function">Incomplete Gamma Functions</a></li>
		<li><a href="#regularized-incomplete-gamma-function">Regularized Incomplete Gamma Functions</a></li>
	</ul>
</div>

<style lang="scss">
	$color_background: #242C46;
	$color_contents: #20283F;
	$color_alpha: #2C3656;
	$color_beta: #323D62;

	#gradient {
		position: absolute;
	}

	@keyframes translate {
		100% {
			transform: translateX(-200px);
		}
	}

	#wrapper {
		background-color: $color_contents;
		box-shadow: 0.5rem 0 10px 0.5rem $color_contents;
		padding: 2rem 0;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}


	#header {
		width: 100%;
		font-size: 300%;
		font-family: "Sedgwick Ave Display";
		color: $color_beta;
		text-align: center;
		vertical-align: middle;
	}

	ul {
		margin: 0
	}

	li {
		line-height: 2rem;
		color: white;
		font-family: "Albert Sans";
		padding: 0.25rem 0;
		box-sizing: border-box;
	}

	a {
		color: inherit;
		text-decoration: none;
	}
</style>
