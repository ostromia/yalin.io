<script lang="ts">
    export let id: string = "";
    export let style: string = "";
</script>

<div id={id} style={style}>
    <slot></slot>
</div>

<style lang="scss">
    div {
        width: 100%;
        display: flex;
        justify-content: center;

        font-size: 1.25rem;
        color: white;
        font-family: "Albert Sans";
    }
</style>
