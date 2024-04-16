<script>
	import Navigation from '$lib/Navigation.svelte';
</script>

<svelte:head>
    <title>yalin.io</title>

    <style>
        html {
            background-color: black;
        }
    </style>
</svelte:head>

<Navigation/>

<slot></slot>
