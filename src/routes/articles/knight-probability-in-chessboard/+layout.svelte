<script lang="ts">
    import Header from "$articles/Header.svelte";
    import articlesJSON from "$articles/articles.json";
    const data = articlesJSON["leet-code-688-knight-probability-in-chessboard"];
</script>

<svelte:head>
    <title>{data.title}</title>

    <style>
        html {
            background-color: #2e323b;
        }
    </style>
</svelte:head>

<main>
    <Header date={data.date} title={data.title}/>
    <slot></slot>
</main>

<style lang="scss">
    main {
        padding: 1rem;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>
