<svelte:head>
    <title>berkay-yalin.io</title>
</svelte:head>

<script>
    import Namespace from "$lib/index/Namespace.svelte";
    import Carousel from "$lib/index/Carousel.svelte";
    import Repositories from "$lib/index/Repositories.svelte";
</script>

<Namespace/>
<div style="height: 1.5rem"></div>
<Carousel/>
<div style="height: 1.5rem"></div>
<Repositories/>
