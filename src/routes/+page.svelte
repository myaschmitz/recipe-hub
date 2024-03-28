<script lang="ts">
	import { Card } from 'flowbite-svelte';
</script>

<div class="mx-auto max-w-5xl">
	<div class="mx-4 flex flex-col items-start gap-6">
		<h1 class="mb-4 text-3xl font-bold">Favorites</h1>
		<div class="grid grid-cols-1 gap-6 3xs:grid-cols-2 xsm:grid-cols-3">
			<Card size="sm">
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-100">
					Recipe Name
				</h5>
				<p>Tags here</p>
				<p>Description</p>
			</Card>
			<Card size="sm">
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-100">
					Recipe Name
				</h5>
				<p>Tags here</p>
				<p>Description</p>
			</Card>
			<Card size="sm">
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-100">
					Recipe Name
				</h5>
				<p>Tags here</p>
				<p>Description</p>
			</Card>
			<Card size="sm">
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-100">
					Recipe Name
				</h5>
				<p>Tags here</p>
				<p>Description</p>
			</Card>
		</div>
	</div>
</div>
