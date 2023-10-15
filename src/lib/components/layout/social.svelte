<script lang="ts">
  import { socials } from "$lib/constants";
</script>

{#if socials.length > 0}
  <ul class="inline-flex items-center space-x-[10px]">
    {#each socials as social}
      <li>
        <a class="button" href={social.href} title={social.name} target="_blank" rel="noreferrer noopener">
          <i class="w-[24px] h-[24px]">
            <svelte:component this={social.icon} />
          </i>
        </a>
      </li>
    {/each}
  </ul>
{/if}

<style lang="postcss">
  .button {
    @apply w-[40px] h-[40px] p-[5px] inline-flex justify-center items-center rounded;
    @apply bg-zinc-200 dark:bg-zinc-700 dark:text-white;
  }

  .button:hover {
    @apply bg-zinc-300 dark:bg-zinc-600;
  }

  .button:active,
  .button:focus {
    @apply outline-none ring-2 ring-offset-2;
    @apply ring-offset-zinc-50 ring-zinc-200 dark:ring-offset-zinc-800 dark:ring-zinc-700;
  }
</style>
