import {onMount} from 'svelte';
let innerHeight: number;
let innerWidth: number;
onMount(() => {
  innerHeight = window.innerHeight;
  innerWidth = window.innerWidth;
  console.log(innerWidth);
  console.log(innerHeight);
});
