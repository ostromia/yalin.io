<script lang="ts">
    import Heading from "$index/Heading.svelte";
    import Projects from "$index/projects/Projects.svelte";
</script>

<div class="wrapper-projects">
    <Heading id="projects">Projects</Heading>
    <Projects/>
</div>

<style lang="scss">
    .wrapper-projects {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        box-sizing: border-box;
    }
</style>
