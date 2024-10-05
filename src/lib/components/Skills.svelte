<script>
	import skills from '$lib/app/skills';
</script>

<section class="mx-auto max-w-2xl space-y-2.5">
	<h2 class="text-xl font-bold md:text-2xl">Skills</h2>
	<div class="flex flex-wrap gap-1">
		{#each skills as skill}
			<span class="block rounded-md bg-zinc-700 px-3 py-1 text-xs font-medium text-white md:text-sm">{skill}</span>
		{/each}
	</div>
</section>
