<script>
	export let style = '';
</script>

<div id="gradient"></div>

<div style={style} id="wrapper">
	<p>j</p>
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
	}
</style>
