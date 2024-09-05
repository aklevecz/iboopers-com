<script>
</script>

<!-- <div style="margin-bottom:1rem;"></div> -->
  <div class="centered-block col-1half">
    <img class="smiler" src="/svgs/smiler.svg" alt="smiler" />
    <p class="lg" style="text-align:center;">Are you ready to boop? Download the app and find your booper card</p>
    <button
      onclick={() => {
       window.open("https://apps.apple.com/us/app/iboopers/id6636547723");
      }}>Download</button
    >
  </div>
  <div style="margin-bottom:100px;"></div>
  <div class="col-1half">
    <div class="centered-block">
    <h2>SEASON 1 - FALL 2024</h2>
      <p>
        Season 1 will be happening in Los Angeles CA. The winner will receive the first booper trophy and eternal
        bragging rights
      </p>
      <p>Questions? Comments? Concerns? feel free to contact Ariel at any time!</p>
      {#await import("$lib/components/booper-trophy.svelte") then Module}
        <div class="centered-block">
          <Module.default />
        </div>
      {/await}
    </div>
  </div>
  <div style="flex:1 0 100%;text-align:center;height:100px;">
    ariel@yaytso.art<br />
    <img style="max-width:300px;" src="/svgs/yaytso-logo-svg.svg" alt="yaytso" /><br />
    2684 Lacy St. #109<br />
    Los Angeles, 90031
</div>

<style>
  .col-1half {
    flex: 1 0 45%;
  }
  .smiler {
    width: 200px;
    height: 200px;
  }

  @media (min-width: 768px) {
    p {
      max-width: 500px;
    }
  }
</style>
