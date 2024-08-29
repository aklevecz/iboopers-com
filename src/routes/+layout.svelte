<script>
    import "../app.css"
    /** @type {{data:import('./$types').LayoutData, children: any}} */
    let {children} = $props()
</script>
<div style="
    display:flex;
    flex-direction: column;
    align-items:center;
    padding:2rem;padding-top:.5rem;
    min-height:80vh;">
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
</style>