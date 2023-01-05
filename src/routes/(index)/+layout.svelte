<script>
    import Navigation from "./Navigation.svelte";

    let innerWidth = 0;
    let innerHeight = 0;
</script>

<svelte:head>
    <style>
        @font-face {
            font-family: "roboto";
            src: url("fonts/RobotoMono-VariableFont_wght.ttf");
        } /* Namespace.svelte */

        @font-face {
            font-family: "segoe";
            src: url("fonts/Segoe-UI.ttf");
        } /* Repositories.svelte */

        ::-webkit-scrollbar { width: 0.5vw }
        ::-webkit-scrollbar-track { background: rgb(206, 206, 206) }
        ::-webkit-scrollbar-thumb { background: rgb(136, 136, 136) }
        ::-webkit-scrollbar-thumb:hover { background: rgb(85, 85, 85) }
    </style>
</svelte:head>

<svelte:window bind:innerWidth="{innerWidth}" bind:innerHeight="{innerHeight}"/>

<Navigation/>

<div id="main-wrapper">
    <slot></slot>
</div>

<style lang="scss">
    :global(html) { background-color: $bc }

    :global(body) {
        margin: 0 !important;
        overflow-x: hidden;
    }

    #main-wrapper {
        padding: 2rem;
        box-sizing: border-box;
    }
</style>
