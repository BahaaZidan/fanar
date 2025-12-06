<script lang="ts">
	import { Page, Navbar, List, ListItem } from 'konsta/svelte';
	import { adkar } from '$lib';
</script>

<Page>
	<Navbar title="الأذكار" />
	<List strong inset>
		{#each adkar as dikr (dikr.id)}
			<ListItem href="/adkar/{dikr.id}" title={dikr.label} />
		{/each}
	</List>
</Page>
