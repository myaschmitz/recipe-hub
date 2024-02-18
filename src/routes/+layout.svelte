<script>
	import Navbar from '$lib/components/layout/+Navbar.svelte';
	import Footer from '$lib/components/layout/+Footer.svelte';
	import '../app.pcss';
</script>

<div class="flex h-screen flex-col justify-between">
	<Navbar />
	<div id="main-content" class="flex-grow">
		<slot />
	</div>
	<Footer />
</div>
