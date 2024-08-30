<script>
    import Nav from "$lib/components/nav.svelte";
    import "../app.css"
    /** @type {{data:import('./$types').LayoutData, children: any}} */
    let {children} = $props()
</script>
<Nav/>
<svelte:head>
    <title>iBoopers</title>
    <meta name="description" content="iBoopers is a fun app that lets you find your booper card" />
    <meta name="keywords" content="booper, card, fun, app" />
    <meta name="author" content="Ariel Klevecz" />
    <meta name="og:image" content="https://iboopers.com/seo.png" />
</svelte:head>
<h1 style="margin:.5rem;">iBoopers</h1>
<div class="app-container" style="
    ">
    {@render children()}
</div>
<footer>
    <img src="/svgs/smiler.svg" alt="smiler" />
    <div>
        <h1>iBoopers</h1>
        <div>Created by Ariel Klevecz</div>
    </div>
</footer>
<style>
.app-container {
    display:flex;
    flex-direction: column;
    align-items:center;
    padding:2rem;padding-top:.5rem;
    min-height:80vh;
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
    .app-container {
        min-height: calc(100vh - 130px);
    }
}
</style>