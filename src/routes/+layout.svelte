<script lang="ts">
	import "./layout.css";

	import { onNavigate } from "$app/navigation";

	import favicon from "$lib/assets/favicon.svg";

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="pb-safe flex min-h-screen flex-col">
	{@render children()}
</div>
