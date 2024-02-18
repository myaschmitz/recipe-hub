<script>
	import { page } from '$app/stores';
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Button,
		Avatar,
		Dropdown,
		DropdownItem,
		DropdownHeader,
		DropdownDivider,
		DarkMode
	} from 'flowbite-svelte';

	import ChefHat from '../../../images/chef-hat.png';

	$: activeUrl = $page.url.pathname;
</script>

<Navbar>
	<NavBrand href="/">
		<img src={ChefHat} class="me-3 h-6 sm:h-9" alt="Recipe Hub Logo" />
		<span class="text-xl font-semibold dark:text-white">Recipe Hub</span>
	</NavBrand>
	<NavUl {activeUrl}>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/recipes">Recipes</NavLi>
		<NavLi href="/recipes/create">Create Recipe</NavLi>
		<DarkMode></DarkMode>
	</NavUl>
</Navbar>
