<script>
  import { afterNavigate, beforeNavigate, goto } from "$app/navigation";
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  let showNav = $state(false);

  beforeNavigate(() => {
    console.log("javagate");
    showNav = false;
  });
</script>

<button class="menu-btn" onclick={() => (showNav = !showNav)}>{showNav ? "Close" : "Menu"}</button>
{#if showNav}
  <nav transition:fly={{ delay: 250, duration: 300, x: 370, y: 1, opacity: 0.5, easing: quintOut }}>
    <a href="/">Home</a>
    <a href="/help">Help</a>
    <a href="/leaderboard">Leaderboard</a>
    <a href="/demo">Demo</a>
  </nav>
{/if}

<style>
  nav {
    position: fixed;
    bottom: 70px;
    right: 12px;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    font-size: 24px;
    background: white;
    padding: 20px;
    z-index: 1000;
  }

  nav a {
    color: black;
    /* text-decoration: none; */
    font-weight: bold;
  }
  .menu-btn {
    position: fixed;
    bottom: 12px;
    right: 12px;
    z-index: 1000;
  }
</style>
