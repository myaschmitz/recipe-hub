<script>
	import { Card, Checkbox } from 'flowbite-svelte';
</script>

<svelte:head>
	<title>Recipe Name - TasteTrek</title>
</svelte:head>

<div>
	<h1 class="mb-4 text-3xl font-bold">Recipe Name</h1>
	<div>
		<Card>
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				Ingredients
			</h5>
			<div class="mb-4">
				<ul class="font-normal leading-tight text-gray-700 dark:text-gray-400">
					<li><Checkbox>1/2 onion</Checkbox></li>
					<li><Checkbox>1 green onions/scallion</Checkbox></li>
					<li><Checkbox>1/2 lb thinly sliced beef (chuck or ribeye)</Checkbox></li>
				</ul>
			</div>
			<div class="mb-4">
				<h2>For the sauce</h2>
				<ul>
					<li><Checkbox>1/2 cup dashi</Checkbox></li>
					<li><Checkbox>2 Tbsp sake</Checkbox></li>
					<li><Checkbox>2 Tbsp mirin</Checkbox></li>
					<li><Checkbox>3 Tbsp soy suace</Checkbox></li>
					<li><Checkbox>1 Tbsp sugar</Checkbox></li>
				</ul>
			</div>
			<div class="mb-4">
				<h2>For serving</h2>
				<ul>
					<li><Checkbox>2 servings cooked Japanese short-grain rice</Checkbox></li>
					<li>
						<Checkbox>[OPTIONAL] pickled red ginger (beni shoga or kizami beni shoga)</Checkbox>
					</li>
				</ul>
			</div>
		</Card>
	</div>
</div>
