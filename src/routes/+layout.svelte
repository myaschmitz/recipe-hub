<script lang="ts">
	import NavBar from '$lib/components/layout/+NavBar.svelte';
	import Footer from '$lib/components/layout/+Footer.svelte';
	import '../app.pcss';
</script>

<div class="flex h-screen flex-col justify-between">
	<NavBar />
	<div id="main-content" class="flex-grow bg-white dark:bg-gray-900 dark:text-slate-100">
		<slot />
	</div>
	<Footer />
</div>
