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

        // padding: 1rem 0;
        // box-sizing: border-box;

        font-size: 1.25rem;
        color: white;
        font-family: "Albert Sans";
    }
</style>
