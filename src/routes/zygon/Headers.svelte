<script>
    import { showGuide } from '$zygon/stores';

    const python_logo = "assets/zygon/logos/python.svg";
    const ocr_logo = "assets/zygon/logos/ocr.svg";
</script>

<div>
    <img alt="" src="{ocr_logo}">
    <span>Pseudocode</span>
</div>

<div>
    <img alt="" src="{$showGuide ? ocr_logo : python_logo}">
    <span>{$showGuide ? 'Pseudocode Guide' : 'Python'}</span>
</div>

<style lang="scss">
    div {
        display: flex;
        align-items: center;
        height: 1rem;
        padding: 0.125rem;
        box-sizing: border-box;
        gap: 0.25rem;
    }

    img {
        height: inherit;
    }

    span {
        color: lightgrey;
        font-family: 'Albert Sans';

        font-size: 0.9rem;
        line-height: 0.9rem;
    }
</style>