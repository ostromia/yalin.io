<script lang="ts">
  export let text: string;
  export let src: string;
  export let style: string = '';
</script>

<div style={style} class="heading-wrapper">
  <img alt="" class="logo" src={src}>
  <span class="text">{text}</span>
</div>

<style>
  .heading-wrapper {
    width: 100%;

    display: flex;
    align-content: center;

    align-items: center;
  }

  .logo {
    height: 3vh;
  }

  .text {
    font-size: 2vh;
    font-family: 'cabin';
    color: white;
    margin-left: 0.5vw;
  }
</style>
