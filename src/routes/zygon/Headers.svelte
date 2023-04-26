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
		height: 3vh;
		min-height: 1.5rem;
		align-items: center;
		display: flex;
		align-content: center;
	}

	img {
		height: 1.5rem;
	}

	span {
		font-size: 1rem;
		line-height: 1rem;

		font-family: 'Trebuchet MS';
		color: white;
		margin-left: 0.25rem;
	}
</style>
