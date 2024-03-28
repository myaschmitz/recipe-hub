<script lang="ts">
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
	import { navLinks } from '$lib/constants/nav.constants';

	$: activeUrl = $page.url.pathname;
</script>

<Navbar class="justify-center bg-slate-100 py-2 dark:bg-gray-800 dark:text-slate-100">
	<NavHamburger class="ml-0" />
	<NavBrand href="/">
		<img src={ChefHat} class="mr-3 h-6 w-6" alt="Recipe Hub Logo" />
		<span class="font-semibold">Recipe Hub</span>
	</NavBrand>
	<NavUl {activeUrl} class="items-center justify-center">
		{#each navLinks as link}
			<NavLi href={link.href}>{link.name}</NavLi>
		{/each}
	</NavUl>
	<DarkMode />
</Navbar>
