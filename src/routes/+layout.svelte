<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { App } from 'konsta/svelte';
	// import { Capacitor } from '@capacitor/core';

	let { children } = $props();
	// let isDark = $state(false);
	// onMount(() => {
	// 	// Check initial preference
	// 	const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
	// 	isDark = mediaQuery.matches;

	// 	// Listen for changes
	// 	const listener = (event: MediaQueryListEvent) => {
	// 		isDark = event.matches;
	// 	};
	// 	mediaQuery.addEventListener('change', listener);

	// 	// Cleanup
	// 	return () => mediaQuery.removeEventListener('change', listener);
	// });
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<App theme="ios" class="dark">
	{@render children()}
</App>
