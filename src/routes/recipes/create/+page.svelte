<script lang="ts">
	import { Label, Input, Button } from 'flowbite-svelte';
</script>

<svelte:head>
	<title>Create Recipe - TasteTrek</title>
</svelte:head>

<div>
	<h1 class="mb-4 text-3xl font-bold">Create Recipe</h1>
	<Label for="recipe-name">Name</Label>
	<Input id="recipe-name" placeholder="Recipe name" size="sm" class="max-w-56"></Input>
	<Label for="recipe-description">Description</Label>
	<Input
		id="recipe-description"
		placeholder="This is the best recipe ever"
		size="sm"
		class="max-w-56"
	></Input>
	<div class="mb-4">
		<Label for="prep-time">Prep Time</Label>
		<Input id="prep-time" placeholder="30" size="sm" class="max-w-56"></Input>
		<Label for="total-time">Total Time</Label>
		<Input id="total-time" placeholder="60" size="sm" class="max-w-56"></Input>
	</div>
	<div>
		<h1>Ingredients</h1>
		<Button>Add ingredient</Button>

		<Label for="ingredient-amount">Amount</Label>
		<Input id="ingredient-amount" placeholder="30" size="sm" class="max-w-56"></Input>
		<Label for="ingredient-unit">Unit of measurement</Label>
		<Input id="ingredient-unit" placeholder="30" size="sm" class="max-w-56"></Input>
		<Label for="ingredient-name">Name</Label>
		<Input id="ingredient-name" placeholder="30" size="sm" class="max-w-56"></Input>
	</div>
</div>
