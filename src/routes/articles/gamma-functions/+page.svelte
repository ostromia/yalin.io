<script>
	import "@fontsource/jetbrains-mono";
    import GammaFunction from "$r/articles/gamma-functions/GammaFunction.svelte";
    import LowerIncompleteGammaFunction from "$r/articles/gamma-functions/LowerIncompleteGammaFunction.svelte";
    import UpperIncompleteGammaFunction from "$r/articles/gamma-functions/UpperIncompleteGammaFunction.svelte";
    import RegularizedLowerIncompleteGammaFunction from "$r/articles/gamma-functions/RegularizedLowerIncompleteGammaFunction.svelte";
    import RegularizedUpperIncompleteGammaFunction from "$r/articles/gamma-functions/RegularizedUpperIncompleteGammaFunction.svelte";
    import Qplusp from "$r/articles/gamma-functions/Qplusp.svelte";
</script>

<main>
    <section>
        <h1>Gamma Function</h1>
        <GammaFunction/>
    </section>

    <section>
        <h1>Incomplete Gamma Function</h1>

        <div>
            <div>
                <h2>Lower Incomplete Gamma Function</h2>
                <LowerIncompleteGammaFunction/>
            </div>

            <div>
                <h2>Upper Incomplete Gamma Function</h2>
                <UpperIncompleteGammaFunction/>
            </div>
        </div>
    </section>

    <section>
        <h1>Regularized Incomplete Gamma Function</h1>
        <Qplusp/>

        <div>
            <div>
                <h2>Regularized Lower Incomplete Gamma Function</h2>
                <RegularizedLowerIncompleteGammaFunction/>
            </div>

            <div>
                <h2>Regularized Upper Incomplete Gamma Function</h2>
                <RegularizedUpperIncompleteGammaFunction/>
            </div>
        </div>
    </section>
</main>

<style lang="scss">
    $color_alpha: #2c3656;
    $color_beta: #323d62;

    main {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    h1, h2 {
        margin: 0;
        font-family: "Cambria";
        font-weight: normal;
    }

    h1 {
        font-size: 26px;
    }

    h2 {
        font-size: 20px;
        padding-bottom: 0.8rem;
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

        min-width: fit-content;
    }

    section > div {
		display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		gap: 1rem;
    }

    section > div > div {
        padding: 1rem;
        box-sizing: border-box;
        border-radius: 0.5rem;
        background-color: $color_beta;
        color: white;
        box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 1.1px;
    }
</style>
