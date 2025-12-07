<script lang="ts">
	import { Haptics } from "@capacitor/haptics";
	import ArrowRightIcon from "@lucide/svelte/icons/arrow-right";

	import { resolve } from "$app/paths";

	import type { PageProps } from "./$types";

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

<div class="navbar bg-base-100 shadow-sm">
	<div class="navbar-start">
		<a href={resolve("/")} class="btn btn-circle btn-xl">
			<ArrowRightIcon class="size-7" />
		</a>
	</div>
	<div class="navbar-center">
		<div class="btn text-xl btn-ghost" style:--dikr_title="dikr-{data.dikr.id}">
			{data.dikr.label}
		</div>
	</div>
	<div class="navbar-end"></div>
</div>

{#each adkar as dikr (dikr.dikr)}
	<button
		class="flex flex-col gap-1 p-4"
		onclick={() => handleDikrClick(dikr.dikr, dikr.repetition)}
	>
		<div class="text-lg font-bold">
			{dikr.dikr}
		</div>
		<div>
			{dikr.sourceAndReward}
		</div>
		<div>
			<progress
				class="progress w-full"
				value={progress.find((p) => p.id === dikr.dikr)?.current ?? 0}
				max={dikr.repetition}
			></progress>
		</div>
	</button>
{/each}

<style>
	.navbar-center {
		& div {
			view-transition-name: var(--dikr_title);
		}
	}
</style>
