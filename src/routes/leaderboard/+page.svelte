<script>

    let {data} = $props()
</script>
<h1>Leaderboard</h1>
<p>
    Coming soon!
</p>
<img style="max-width:400px;" src="/svgs/smiler.svg" alt="smiler" />
<!-- {#snippet leaderItem(/** @type {{name:string, points:number}} */ props)}
    <div style="display:flex;gap:2rem;align-items:center;">
        <div style="font-weight:bold;font-size:2rem;color:var(--green);">{props.points}</div> 
        <div style="font-size:1.75rem;">{props.name}</div>
    </div>
{/snippet}
<div style="width:100%;">
    {#each data.leaders as {name, points}}
        {@render leaderItem({name, points})}
    {/each}
</div> -->
