<script>
  const DEVICONS = [
    {name: 'cDevicon', path: 'devicon/-original.svg'},
    {name: 'pythonDevicon', path: 'devicon/-original.svg'}
]
    // {name: '', path: 'devicon/-original.svg'};
    // {name: '', path: 'devicon/-original.svg'};
    // {name: '', path: 'devicon/-original.svg'};
    // {name: '', path: 'devicon/-original.svg'};
    // {name: '', path: 'devicon/-original.svg'};
    // {name: '', path: 'devicon/-original.svg'};
// ];
</script>



<div id="deviconContainer">
	{#each DEVICONS as {name, path}, i}
    <div id={name}>
      <img alt="" src={path}>
    </div>
	{/each}
</div>







<!-- <div id="deviconContainer">

  <div id="cDevicon" >
    <img alt="" src="devicon/c-original.svg">
  </div>

  <div id="pythonDevicon">
    <img alt="" src="devicon/python-original.svg">
  </div>

  <div id="javascriptDevicon">
    <img alt="" src="devicon/javascript-original.svg">
  </div>

  <div id="html5Devicon">
    <img alt="" src="devicon/html5-original.svg">
  </div>

  <div id="css3Devicon">
    <img alt="" src="devicon/css3-original.svg">
  </div>

  <div id="svelteDevicon">
    <img alt="" src="devicon/svelte-original.svg">
  </div>

  <div id="flaskDevicon">
    <img alt="" src="devicon/flask-original.svg">
  </div>

  <div id="sqliteDevicon">
    <img alt="" src="devicon/sqlite-original.svg">
  </div>
</div> -->



<style>
  :root {
    --k: calc(2.5s);
  }

  #deviconContainer {
    position: absolute;
    height: 10vh;
    width: 50vw;

    box-sizing: border-box;
    margin: 0;
    padding: 0;
    overflow: hidden;

    display: flex;
    align-items: center;

    border-radius: 6px;
    border: 0.15rem solid white;
  }

  #deviconContainer > div {
    height: 8vh; width: 8vh;
    padding: 0; margin: 0; border: 0;

    position: absolute;
    left: -8vh;

    animation: cloud 20s linear infinite;
  }

  #cDevicon {
    animation-delay: 0s !important;
  }

  #pythonDevicon {
    animation-delay: calc(1 * var(--k)) !important;
  }

  #javascriptDevicon {
    animation-delay: calc(2 * var(--k)) !important;
  }

  #html5Devicon {
    animation-delay: calc(3 * var(--k)) !important;
  }

  #css3Devicon {
    animation-delay: calc(4 * var(--k)) !important;
  }

  #svelteDevicon {
    animation-delay: calc(5 * var(--k)) !important;
  }

  #flaskDevicon {
    animation-delay: calc(6 * var(--k)) !important;
  }

  #sqliteDevicon {
    animation-delay: calc(7 * var(--k)) !important;
  }






  @keyframes cloud {
    to {
      transform: translateX( calc(50vw + 8vh) );
    }
  }



  /* #cDevicon { background-image: url('devicon/c-original.svg') } */
  /* #pythonDevicon { background-image: url('devicon/python-original.svg') }
  #javascriptDevicon { background-image: url('devicon/javascript-original.svg') }
  #htmlDevicon { background-image: url('devicon/html5-original.svg') }
  #cssDevicon { background-image: url('devicon/css3-original.svg') }
  #svelteDevicon { background-image: url('devicon/svelte-original.svg') }
  #flaskDevicon { background-image: url('devicon/flask-original.svg') } */
</style>
