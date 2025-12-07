<script lang="ts">
	import { resolve } from "$app/paths";
	import { adkar } from "$lib";
</script>

<div class="navbar bg-base-100 shadow-sm">
	<div class="navbar-start"></div>
	<div class="navbar-center">
		<div class="btn text-xl btn-ghost">الأذكار</div>
	</div>
	<div class="navbar-end"></div>
</div>
<ul class="flex flex-col gap-1">
	{#each adkar as dikr (dikr.id)}
		<a href={resolve("/adkar/[dikr_id]", { dikr_id: dikr.id })} class="m-2 border p-4">
			<span style:--dikr_title="dikr-{dikr.id}">
				{dikr.label}
			</span>
		</a>
	{/each}
</ul>

<style>
	ul {
		a {
			span {
				view-transition-name: var(--dikr_title);
			}
		}
	}
</style>
