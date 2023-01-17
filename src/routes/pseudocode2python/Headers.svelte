<script>
	import {VPG_s} from '$r/pseudocode2python/stores.js';

	import python_logo from '$lib/devicons/python.svg';
	import ocr_logo from '$lib/ocr-logo.svg';
</script>

<div class="heading-wrapper">
	<img alt="" class="logo" src={ocr_logo}>
	<span class="text">Pseudocode</span>
</div>

<div class="heading-wrapper">
	<img alt="" class="logo" src={$VPG_s ? ocr_logo : python_logo}>
	<span class="text">{$VPG_s ? 'Pseudocode Guide' : 'Python'}</span>
</div>

<style lang="scss">
	.heading-wrapper {
		width: 100%;

		display: flex;
		align-content: center;

		align-items: center;
	}

	.logo {
		height: 3vh;
	}

	.text {
		font-size: 2vh;
		font-family: "Trebuchet MS";
		color: white;
		margin-left: 0.5vw;
	}
</style>
