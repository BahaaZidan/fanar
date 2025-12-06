<script lang="ts">
	import { Page, Navbar, NavbarBackLink, Progressbar, Card } from 'konsta/svelte';
	import type { PageProps } from './$types';
	import { Haptics } from '@capacitor/haptics';

	let { data }: PageProps = $props();
	let progress = $state(
		data.dikr.adkar.map((d) => ({ id: d.dikr, target: d.repetition, current: 0 }))
	);
	let adkar = $derived(
		data.dikr.adkar.filter((d) => d.repetition !== progress.find((p) => p.id === d.dikr)?.current)
	);

	const handleDikrClick = (id: string, target: number) => {
		const idx = progress.findIndex((p) => p.id === id);
		if (idx === -1) return;

		const next = ++progress[idx].current;
		if (next === target) {
			void Haptics.vibrate({ duration: 100 });
		}
	};
</script>

<Page>
	<Navbar title={data.dikr.label}>
		{#snippet left()}
			<NavbarBackLink onclick={() => history.back()} />
		{/snippet}
	</Navbar>
	{#each adkar as dikr (dikr.dikr)}
		<Card
			outline
			headerDivider
			footerDivider
			onclick={() => handleDikrClick(dikr.dikr, dikr.repetition)}
		>
			{#snippet header()}
				{dikr.dikr}
			{/snippet}
			{#snippet footer()}
				{dikr.repetition}
				<Progressbar
					progress={(progress.find((p) => p.id === dikr.dikr)?.current ?? 0) / dikr.repetition}
				/>
			{/snippet}
			{dikr.sourceAndReward}
		</Card>
	{/each}
</Page>
