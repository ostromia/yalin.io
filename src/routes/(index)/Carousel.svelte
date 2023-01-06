<script lang="ts">
    const devicons = [
        'c',
        'python',
        'lua',
        'svelte',
        'javascript',
        'typescript',
        'html5',
        'css3',
        'sass',
        'flask',
        'sqlite'
    ];

    let innerWidth: number;
</script>

<svelte:window bind:innerWidth/>

<div id="devicon-container" style="--inner-width: {innerWidth}px">
    <div id="gradient-to-left"></div>
    <div id="gradient-to-right"></div>

  <div class="devicon-strip">
    {#each devicons as path}
        <div class="devicon-div">
            <img alt="" class="devicon" src="devicon/{path}-original.svg">
        </div>
    {/each}
  </div>

  <div class="devicon-strip">
    {#each devicons as path}
        <div class="devicon-div">
            <img alt="" class="devicon" src="devicon/{path}-original.svg">
        </div>
    {/each}
  </div>
</div>

<style lang="scss">
    $height: 10vh;
    $width: var(--inner-width);
    $n: 11;


    @mixin gradient-setup {
        height: 100%;
        width: calc($width / 2);
        position: absolute;
        z-index: 99;
    }

    #gradient-to-right {
        @include gradient-setup;
        background: linear-gradient(to right, $bc 0%, transparent 50%);
    }

    #gradient-to-left {
        @include gradient-setup;
        left: calc(50%);
        background: linear-gradient(to left, $bc 0%, transparent 50%);
    }


    #devicon-container {
        width: $width;
        position: relative;
        display: flex;
        overflow: hidden;
    }

    @-webkit-keyframes translate { 100% { transform: translateX(calc(-1 * $width)) } }
    @keyframes         translate { 100% { transform: translateX(calc(-1 * $width)) } }

    .devicon-strip {
        min-width: $width;

        display: flex;
        align-items: center;

        animation: translate 20s linear infinite;
        -webkit-animation: translate 20s linear infinite;
    }

    .devicon-div {
        height: $height;
        width: calc($width / $n);

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .devicon {
        height: 100%;
        width: 100%;
        padding: 0.5rem;
        box-sizing: border-box;
        object-fit: contain;
    }
</style>
