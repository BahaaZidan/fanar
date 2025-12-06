<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { App } from 'konsta/svelte';
	import { Capacitor } from '@capacitor/core';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<App theme={Capacitor.getPlatform() === 'ios' ? 'ios' : 'material'}>
	{@render children()}
</App>
