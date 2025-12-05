<script lang="ts">
	import { Dialog } from '@capacitor/dialog';

	const showAlert = async () => {
		await Dialog.alert({
			title: 'Stop',
			message: 'this is an error'
		});
	};
</script>

<h1 class="text-2xl">Welcome to FANAR</h1>
<p>
	Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentationnnnnn
</p>

<h2 class="mt-12 text-6xl">niga ???</h2>
<button class="size-11 text-5xl" onclick={showAlert}>boom</button>
