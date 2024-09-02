<script>
    import NavLinks from "$lib/components/nav-links.svelte";
import Nav from "$lib/components/nav.svelte";
    import "../app.css"
    /** @type {{data:import('./$types').LayoutData, children: any}} */
    let {children} = $props()
</script> 
<svelte:head>
    <title>iBoopers</title>
<meta name="description" content="iBoopers is an interactive app that helps you discover your unique booper card. Join the fun and find your perfect match today!" />
    <meta name="keywords" content="booper card, interactive app, personality quiz, digital collectibles, fun app" />
    <meta name="author" content="Ariel Klevecz" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://iboopers.com/" />
    <meta property="og:title" content="iBoopers" />
    <meta property="og:description" content="Discover your unique booper card with iBoopers. Join the fun and find your perfect match today!" />
    <meta property="og:image" content="https://iboopers.com/seo.png" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://iboopers.com/" />
    <meta property="twitter:title" content="iBoopers" />
    <meta property="twitter:description" content="Discover your unique booper card with iBoopers. Join the fun and find your perfect match today!" />
    <meta property="twitter:image" content="https://iboopers.com/seo.png" />

    <!-- Canonical URL -->
    <link rel="canonical" href="https://iboopers.com/" />
</svelte:head>
<div class="header"><h1 style="margin:.5rem;">iBoopers</h1><div class="desk-nav-links"><NavLinks/></div></div>
<div class="container">
    {@render children()}
</div>
<Nav/>
<footer>
    <img src="/svgs/smiler.svg" alt="smiler" />
    <div>
        <h1>iBoopers</h1>
        <div>Created by Ariel Klevecz</div>
    </div>
</footer>
<style>
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding:1rem;
    }
    .desk-nav-links {
        display: none;
    }
  .container {
    display: flex;
    flex-direction: column;
    /* align-items:center; */
    padding: 2rem;
    padding-top: 0.5rem;
    min-height: 80vh;
    width: 100%;
    gap: 150px;
  }



footer {
    height: 100px;
    display:flex;
    align-items: center;
    /* justify-content: center; */
    padding-left: 2rem;
    gap: 1rem;
    background-color: black;
    color: white;
}

footer > img {
    width: 50px;
    height: 50px;
}
@media (min-width: 768px) {
    .desk-nav-links {
        display: flex;
        gap: 1rem;
    }
    /* .container {
      min-height: calc(99vh - 157px);
      flex-direction: row;
      flex-wrap: wrap;
      gap: 1rem;
    } */
  }

</style>