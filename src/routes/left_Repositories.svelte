<script lang="ts">
  import RepositoryCard from "./left_RepositoryCards.svelte";

  const ghr1 = {username: "berkay-yalin", repository: "berkay-yalin.io", description: "personal portfolio website", language: "JavaScript", column: '1', row: '1'}
  const ghr2 = {username: "berkay-yalin", repository: "scientific-computing-with-python", description: "my solution links to freeCodeCamp's \"Scientific Computing with Python\" course", language: "Python", column: '2 / 4', row: '1'}
  const ghr3 = {username: "mikeroyal", repository: "Windows-11-Guide", description: "Windows 11 Guide. Though, most of the Tools, Programs, Resources will also work for Windows 10.", language: "Shell", column: '1 / 3', row: '2'}
  const ghr4 = {username: "berkay-yalin", repository: "fx-CG50", description: "scripting functions available on a Casio fx-CG50 calculator in python", language: "Python", column: '1 / 3', row: '3'}
  const ghr5 = {username: "berkay-yalin", repository: "svelte-github-repo-card", description: "Svelte component to showcase a GitHub repository.", language: "JavaScript", column: '3', row: '2 / 4'}
</script>

<div id="repository-grid">
  <RepositoryCard {...ghr1}/>
  <RepositoryCard {...ghr2}/>
  <RepositoryCard {...ghr3}/>
  <RepositoryCard {...ghr4}/>
  <RepositoryCard {...ghr5}/>
</div>

<style lang="scss">
  #repository-grid {
    min-height: 55vh;

    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.5rem;
  }
</style>
