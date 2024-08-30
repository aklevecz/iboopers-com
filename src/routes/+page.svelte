<script>
//   import BooperTrophy from "$lib/components/booper-trophy.svelte";

</script>
<h1>iBoopers</h1>
<div style="margin-bottom:1rem;"></div>
<img class="smiler" src="/svgs/smiler.svg" alt="smiler" />
<p class="lg" style="text-align:center;">Are you ready to boop? Download the app and find your booper card</p>
<button onclick={() => {
    alert("Soon this will open the app store!")
}}>Download</button>
<div style="margin-bottom:2rem;"></div>
<p>
  Season 1 will be happening in Los Angeles CA. The winner will receive the first booper trophy and eternal bragging rights
</p>
<p>Questions? Comments? Concerns? feel free to contact Ariel at any time!</p>
{#await import("$lib/components/booper-trophy.svelte") then Module}
	<Module.default />
{/await}
<!-- <BooperTrophy/> -->
<p>
  ariel@yaytso.art<br/>
  <img src="/svgs/yaytso-logo-svg.svg" alt="yaytso"><br/> 
  2684 Lacy St. #109<br/>
  Los Angeles, 90031
</p>

<style>
  * {
    max-width: 400px;
  }
  .smiler {
    width: 200px;
    height: 200px;
  }
</style>
