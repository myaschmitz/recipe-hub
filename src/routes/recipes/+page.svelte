<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button, Card } from 'flowbite-svelte';
	import stockRecipeImage from '../../images/stock-recipe.jpg';
	import gyudonImage from '../../images/gyudon-recipe.jpg';

	const onGoToCreateRecipe = () => {
		goto('/recipes/create');
	};
</script>

<svelte:head>
	<title>Recipes - TasteTrek</title>
</svelte:head>

<div>
	<h1 class="mb-4 text-3xl font-bold">Recipes</h1>
	<Button class="mb-4" on:click={onGoToCreateRecipe}>Create new recipe</Button>
	<Card horizontal img={gyudonImage}>Gyudon (Japanese Beef Rice Bowl)</Card>
	<Card horizontal img={stockRecipeImage}>Gyudon (Japanese Beef Rice Bowl)</Card>
</div>
