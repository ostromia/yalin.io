<script lang="ts">

  import {onMount} from 'svelte';
  let innerHeight: number;
  let innerWidth: number;

  onMount(() => {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    ctx.scale(1, 1);

    // Create our image
    let newImage = new Image();
    newImage.src = 'http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=berkay-yalin&theme=github_dark'
    // newImage.src = "https://github.com/berkay-yalin/berkay-yalin.io/blob/main/resources/Screenshot%202022-08-25%20185809.png"

    // When it loads
    newImage.onload = () => {
        // Draw the image onto the context
        // ctx.drawImage(newImage, 0, 0, 250, 208);
        ctx.drawImage(newImage, 0, 0, 1400, 400);
    }

    let canvas2 = document.getElementById('canvas');
    let ctx2 = canvas2.getContext('2d');

    let imgData = ctx2.getImageData(0, 0, 1400, 400);
    let dataI = imgData.data[1] = 0;

    for (let i = 0; i < dataI.length; i++) {
      imgData.data[i] = 255;
    }

    ctx2.putImageData(imgData, 0, 0);
  });








</script>


<div>
  <!-- <div> -->
    <canvas id="canvas" width="1400" height="400" ></canvas>
    <!-- <img alt="" src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=berkay-yalin&theme=github_dark"/> -->
  <!-- </div> -->
</div>

<style>
  div {
    height: 30vh;
    width: 50vw;

    border: 0;
    margin: 0;
    padding: 1rem 0.5rem 0.5rem 1rem;
    box-sizing: border-box;


    /* background-color: #1A1B27; */
  }

  div > canvas {
    /* height: 100%;
    width: 100%; */

    width : 100%;
    height : 100%;

    border: 1px solid white;
  }


  div > div {
    height: 100%;
    width: 100%;
    border: 0;
    margin: 0;
    padding: 0;

    background-color: #1A1B27;

    border-radius: 0.5rem;
  }
</style>
