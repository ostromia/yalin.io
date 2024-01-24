<!-- Gist.svelte -->
<script lang="ts">
    export let url:string = "";
    export let style:string = "";

    import { onMount } from "svelte";

    let frame: HTMLIFrameElement;
    onMount(() => {
        frame.srcdoc = `<script src='${url}.js'><${''}/script>`;
    });
</script>

<iframe src="about:blank" style="{style}" bind:this={frame} title="Gist"></iframe>

<style lang="scss">
    iframe {
        width: 100%;
        height: 100%;
        border: 0;
        margin: 0;
        padding: 0;
    }
</style>
