<script lang="ts">
  export let text: string;
  export let style: string = '';

</script>

<span style={style}>{text}</span>

<style lang="scss">
  $lh: 5vh;
  span {
    line-height: $lh;
    text-align: center;
    font-family: 'cabin';
    font-size: calc($lh - 1.5vh);
    color: white;
    z-index: 2;
  }
</style>
