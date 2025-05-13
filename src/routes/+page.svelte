<script lang="ts">
	import { azkar } from '$lib';
</script>

<h1 class="text-xl font-bold">الأذكار</h1>
{#each azkar as zikr (zikr.id)}
	<a href="/azkar/{zikr.id}" class="btn btn-block">{zikr.name}</a>
{/each}
