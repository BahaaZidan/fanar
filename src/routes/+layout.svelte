<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="flex flex-col gap-2 p-4">
	{@render children()}
</div>
