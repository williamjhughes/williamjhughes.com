<script>
	import { Icon, GlobeAlt } from 'svelte-hero-icons';
	import me from '$lib/img/me.jpeg';

	import Social from '$lib/components/Social.svelte';
</script>

<header class="mx-auto max-w-2xl">
	<div class="flex items-center justify-between">
		<div class="flex flex-col">
			<h1 class="text-xl font-bold md:text-2xl">William Hughes</h1>
			<h2 class="text-sm text-zinc-500 md:text-base">Software Engineer</h2>

			<div class="mt-2.5 flex items-center space-x-2.5">
				<Icon class="size-4 text-black md:size-5" src={GlobeAlt} />
				<span class="text-xs text-zinc-500 md:text-sm">Nottinghamshire, UK</span>
			</div>

			<Social />
		</div>

		<div class="size-28 overflow-hidden rounded-lg md:size-32">
			<img class="aspect-square" src={me} alt="William Hughes" />
		</div>
	</div>
</header>
