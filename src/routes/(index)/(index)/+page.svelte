<script>
    import Favicon from "$lib/Favicon.svelte";
    import Heading from "$index/Heading.svelte";
	import Carousel from '$index/(index)/Carousel.svelte';
    import Footing from "$index/(index)/Footing.svelte";
	import Projects from '$r/(index)/projects/Projects.svelte';
    import Articles from "$r/(index)/articles/Articles.svelte";
</script>

<main>
    <div class="wrapper-favicon">
        <Favicon height={60 * 0.5} width={100 * 0.5}/>
    </div>

    <Heading style="padding-top: 1rem; box-sizing: border-box">Projects</Heading>
    <Projects/>

    <Heading style="padding-top: 1rem; box-sizing: border-box">Articles</Heading>
    <Articles/>

    <div style="padding: 1rem 0; box-sizing: border-box">
        <Carousel/>
    </div>

    <Footing/>
</main>

<style lang="scss">
	main {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        padding: 1rem;
        box-sizing: border-box;
	}

    .wrapper-favicon {
        width: 100%;
        display: flex;
        justify-content: center;
    }
</style>
