<script>
	import "@fontsource/jetbrains-mono";
    import Header from "$articles/Header.svelte";
    import GammaFunction from "$r/articles/gamma-functions/GammaFunction.svelte";
    import LowerIncompleteGammaFunction from "$r/articles/gamma-functions/LowerIncompleteGammaFunction.svelte";
    import UpperIncompleteGammaFunction from "$r/articles/gamma-functions/UpperIncompleteGammaFunction.svelte";
    import RegularizedLowerIncompleteGammaFunction from "$r/articles/gamma-functions/RegularizedLowerIncompleteGammaFunction.svelte";
    import RegularizedUpperIncompleteGammaFunction from "$r/articles/gamma-functions/RegularizedUpperIncompleteGammaFunction.svelte";
    import Qplusp from "$r/articles/gamma-functions/Qplusp.svelte";
</script>

<main>
    <Header date={"18.04.2023"} title={"Gamma Functions"}/>

    <section>
        <h1>Gamma Function</h1>
        <GammaFunction/>
    </section>

    <section>
        <h1>Incomplete Gamma Function</h1>

        <div class="responsive-siblings">
            <div class="bluebox">
                <h2>Lower Incomplete Gamma Function</h2>
                <LowerIncompleteGammaFunction/>
            </div>

            <div class="bluebox">
                <h2>Upper Incomplete Gamma Function</h2>
                <UpperIncompleteGammaFunction/>
            </div>
        </div>
    </section>

    <section>
        <h1>Regularized Incomplete Gamma Function</h1>

        <div class="responsive-siblings">
            <div class="bluebox">
                <h2>Regularized Lower Incomplete Gamma Function</h2>
                <RegularizedLowerIncompleteGammaFunction/>
            </div>

            <div class="bluebox">
                <h2>Regularized Upper Incomplete Gamma Function</h2>
                <RegularizedUpperIncompleteGammaFunction/>
            </div>
        </div>

        <div class="bluebox">
            <Qplusp/>
        </div>
    </section>
</main>

<style lang="scss">
    $color_alpha: #1E1E1E;
    $color_beta: #3C3C3C;

    // resetting default values
    h1, h2 {
        margin: 0;
        font-weight: normal;
    }

    main {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        box-sizing: border-box;
    }

    h1, h2 {
        font-family: "Cambria";
    }
    h1 {
        font-size: 1.25rem
    }
    h2 {
        font-size: 1rem;
    }

    section {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        padding: 1rem;
        box-sizing: border-box;

        border-radius: 0.5rem;
        background-color: $color_alpha;
        color: white;
        box-shadow: rgba(0, 0, 0, 0.15) 4.4px 4.4px 3.3px;
    }

    .responsive-siblings {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }

    .responsive-siblings > div {
        flex: 1 1 auto;
    }

    .bluebox {
        padding: 1rem;
        box-sizing: border-box;
        border-radius: 0.5rem;
        background-color: $color_beta;
        color: white;
        box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 1.1px;
    }
</style>
