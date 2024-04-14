<script>
    import Heading from "$index/Heading.svelte";
    import Articles from "$index/articles/Articles.svelte";

</script>

<div class="wrapper-articles">
    <Heading id="articles">Articles</Heading>
    <Articles/>
</div>

<style lang="scss">
    .wrapper-articles {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        box-sizing: border-box;
    }
</style>
