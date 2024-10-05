<script>
	import About from '$lib/components/About.svelte';
	import Education from '$lib/components/Education.svelte';
	import Header from '$lib/components/Header.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Work from '$lib/components/Work.svelte';
</script>

<main class="container space-y-8 p-6 md:p-16">
	<Header />
	<About />
	<Work />
	<Education />
	<Skills />
</main>
