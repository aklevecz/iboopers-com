<script>

    let {data} = $props()
</script>
<h1>Leaderboard</h1>
<p>
    These are the leaders for Season 1
</p>
{#snippet leaderItem(/** @type {{name:string, points:number}} */ props)}
    <div style="display:flex;gap:2rem;align-items:center;">
        <div style="font-weight:bold;font-size:2rem;color:var(--green);">{props.points}</div> 
        <div style="font-size:1.75rem;">{props.name}</div>
    </div>
{/snippet}
<div style="width:100%;">
    {#each data.leaders as {name, points}}
        {@render leaderItem({name, points})}
    {/each}
</div>