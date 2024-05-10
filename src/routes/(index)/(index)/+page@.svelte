<script lang="ts">
    import { Canvas } from '@threlte/core'
    import Navigation from '$lib/Navigation.svelte';
    import Scene from './Scene.svelte';
</script>

<svelte:head>
    <title>yalin.io</title>

    <style>
        html {
            background-color: #111111;
        }
    </style>
</svelte:head>

<div class="wrapper-navigation">
    <Navigation/>
</div>

<div class="wrapper-canvas">
    <Canvas>
        <Scene/>
    </Canvas>
</div>

<style>
    :global(html), :global(body) {
        height: 100%;
        width: 100%;
    }

    .wrapper-canvas {
        position: fixed;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
    }

    .wrapper-navigation {
        position: fixed;
        z-index: 99;
        width: 100%;
    }
</style>
