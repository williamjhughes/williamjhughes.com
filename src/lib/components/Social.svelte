<script lang="ts">
	import socials from '$lib/app/social';
</script>

<div class="mt-3 flex items-center space-x-1">
	{#each socials as social}
		<a
			class="flex h-8 w-8 items-center justify-center rounded-md border border-zinc-200 bg-white hover:bg-zinc-100"
			href={social.href}
			title={social.name}
			target="_blank"
			rel="noreferrer noopener"
		>
			<i class="block size-4">
				<svelte:component this={social.icon} />
			</i>
		</a>
	{/each}
</div>
