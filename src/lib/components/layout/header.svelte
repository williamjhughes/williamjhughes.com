<script lang="ts">
  // Components
  import AppleRainbow from "$lib/components/layout/apple-rainbow.svelte";
  import Social from "$lib/components/layout/social.svelte";
</script>

<header class="fixed top-0 left-0 w-full h-[80px] md:h-[100px]">
  <AppleRainbow />

  <div class="container h-full flex justify-end items-center">
    <Social />
  </div>
</header>
