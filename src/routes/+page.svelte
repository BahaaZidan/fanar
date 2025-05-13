<script lang="ts">
	import { azkar } from '$lib';
</script>

<ul>
	{#each azkar as zikr (zikr.id)}
		<li><a href="/azkar/{zikr.id}">{zikr.name}</a></li>
	{/each}
</ul>
