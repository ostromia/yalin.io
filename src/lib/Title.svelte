<script lang="ts">
    export let text: string;
</script>

<span>{text}</span>

<style lang="scss">
$lh: 5vh;
span {
    line-height: $lh;
    text-align: center;
    font-family: 'cabin';
    font-size: $lh;
    color: white;
    z-index: 2;
}
</style>
