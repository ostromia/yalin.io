<script lang="ts">
    export let text: string;
    export let style: string = '';
</script>

<div class="title" style={style}>
    {text}
</div>

<style lang="scss">
    $lh: 5vh;
    .title {
        line-height: $lh;
        font-family: 'cabin';
        font-size: $lh;
        color: white;
        z-index: 2;
        white-space: nowrap;
    }
</style>
