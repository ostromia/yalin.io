<svelte:head>
    <title>berkay-yalin.io</title>
</svelte:head>

<script>
    import Namespace from "$lib/Index/Namespace.svelte";
    import Carousel from "$lib/Index/Carousel.svelte";
    import Repositories from "$lib/Index/Repositories.svelte";
</script>

<Namespace/>
<div style="height: 1.5rem"></div>
<Carousel/>
<div style="height: 1.5rem"></div>
<Repositories/>
