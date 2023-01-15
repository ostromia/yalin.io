<script lang="ts">
  import {onMount} from 'svelte';

  import Navigation from './Navigation.svelte';
  import Heading from './Heading.svelte';
  import J277Guide from './J277Guide.svelte';

  import {pastPaperPseudocode} from './stores.js';
  import {VPG_s} from './stores.js';

  import {p2p} from './p2p';

  let pseudoEditor: any;
  let pythonEditor: any;

  onMount(() => {
    function ace_init(editor: any) {
      editor.setTheme('ace/theme/dracula');
      editor.setFontSize(16);
      editor.resize();
    }
    // @ts-ignore
    pseudoEditor = ace.edit("pseudoEditor");
    ace_init(pseudoEditor);
    // @ts-ignore
    pythonEditor = ace.edit("pythonEditor");
    ace_init(pythonEditor);
    pythonEditor.setReadOnly(true);
  });

  function viewPastPaperPseudocode() {
    pseudoEditor.setValue($pastPaperPseudocode, 1);
  }

  function viewPseudocodeGuide() {
    VPG_s.update(i => i = i ? false : true);
  }

  function convertPseudocodeToPython() {
    const code = new p2p(pseudoEditor.getValue());
    if (code.validate() === '') {
      pythonEditor.session.setMode("ace/mode/python");
      pythonEditor.setValue(code.transpile().join('\n') + '\n', 1);
    }
    else {
      pythonEditor.session.setMode("ace/mode/text");
      pythonEditor.setValue(code.transpile() + '\n', 1);
    }
  }
</script>

<Navigation
  on:vPPP={viewPastPaperPseudocode}
  on:vPG={viewPseudocodeGuide}
  on:cPTP={convertPseudocodeToPython}
/>

<main>
  <Heading
    style="grid-column: 1; grid-row: 1"
    text="Pseudocode"
    src="ocr-logo.svg"
  />

  <Heading
    style="grid-column: 2; grid-row: 1"
    text={$VPG_s ? 'Python' : 'Pseudocode Guide'}
    src={$VPG_s ? 'devicon/python-original.svg' : 'ocr-logo.svg'}
  />

  <div id="pseudoEditor"></div>
  <div id="pythonEditor"></div>
  <J277Guide/>
</main>

<style lang="scss">
  main {
    height: 95vh;
    width: 100vw;

    padding: 0.5rem;
    box-sizing: border-box;

    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  }

  #pseudoEditor { grid-column: 1; grid-row: 2 }
  #pythonEditor { grid-column: 2; grid-row: 2 }
</style>
