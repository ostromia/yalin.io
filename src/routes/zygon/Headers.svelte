<script>
	import { VPG_s } from '$zygon/stores';

	import python_logo from '$lib/devicons/python.svg';
	const ocr_logo = 'assets/pseudocode2python/ocr-logo.svg';
</script>

<div>
	<img alt="" src={ocr_logo}>
	<span>Pseudocode</span>
</div>

<div>
	<img alt="" src={$VPG_s ? ocr_logo : python_logo}>
	<span>{$VPG_s ? 'Pseudocode Guide' : 'Python'}</span>
</div>

<style lang="scss">
	div {
		width: 100%;

		display: flex;
		align-content: center;

		align-items: center;
	}

	img {
		height: 3vh;
	}

	span {
		font-size: 2vh;
		font-family: 'Trebuchet MS';
		color: white;
		margin-left: 0.5vw;
	}
</style>
