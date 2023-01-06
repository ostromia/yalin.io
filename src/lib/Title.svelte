<script lang="ts">
    export let text: string;
    export let style: string = '';
</script>

<div class="title" {style}>
    {text}
</div>

<style lang="scss">
    $lh: 1.5rem;
    .title {
        line-height: $lh;
        font-family: "cabin";
        font-size: $lh;
        color: white;
        z-index: 2;
    }
</style>
