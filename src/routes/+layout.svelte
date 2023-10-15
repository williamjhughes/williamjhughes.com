<script lang="ts">
  // Components
  import Header from "$lib/components/layout/header.svelte";

  // CSS
  import "$lib/assets/css/main.css";
</script>

<main class="min-h-screen overflow-x-hidden bg-zinc-50 dark:bg-zinc-800 dark:text-white">
  <Header />

  <slot />
</main>
