<script>
	import positions from '$lib/app/work';
</script>

<section class="mx-auto max-w-2xl space-y-2.5">
	<h2 class="text-xl font-bold md:text-2xl">Experience</h2>
	<div class="space-y-5">
		{#each positions as position}
			<div class="space-y-1.5 md:space-y-2.5">
				<div class="flex items-center justify-between">
					<div class="flex items-center space-x-2.5">
						<a
							class="hover:underline"
							href={position.company.href}
							title={position.company.name}
							target="_blank"
							rel="noreferrer noopener"
						>
							<h3 class="text-lg font-semibold md:text-xl">
								{position.company.name}
							</h3>
						</a>

						{#if position.isRemote}
							<span class="block rounded-md bg-zinc-200 px-3 py-1 text-xs font-medium md:text-sm">Remote</span>
						{/if}
					</div>

					<div class="flex items-center space-x-1.5 text-sm text-zinc-500 md:text-base">
						<span>{position.date.from}</span>
						<span>&mdash;</span>
						<span>{position.date.to ?? 'Present'}</span>
					</div>
				</div>

				<h4 class="text-sm font-semibold md:text-base">{position.role}</h4>
				<p class="text-justify text-xs text-zinc-500 md:text-sm">{position.description}</p>
			</div>
		{/each}
	</div>
</section>
