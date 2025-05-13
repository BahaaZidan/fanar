<script lang="ts">
	import type { PageProps } from './$types';
	import { ArrowRightIcon, BookmarkIcon } from '@lucide/svelte';

	let { data }: PageProps = $props();
</script>

<div class="flex items-center justify-between">
	<a href="/" class="btn btn-ghost">
		<ArrowRightIcon />
	</a>
	<h1 class="text-xl font-bold">{data.zikr.name}</h1>
	<button class="btn btn-ghost">
		<BookmarkIcon />
	</button>
</div>
