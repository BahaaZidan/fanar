<script lang="ts">
	import { Page, Navbar, Block, Button, List, ListItem, BlockTitle } from 'konsta/svelte';
	import { Dialog } from '@capacitor/dialog';

	const showAlert = async () => {
		await Dialog.alert({
			title: 'هوبا ؟؟؟',
			message: 'ياللهول'
		});
	};
</script>

<Page>
	<Navbar title="My App" />

	<Block strong>
		<p>Here is your SvelteKit & Konsta UI app. Let's see what we have here.</p>
	</Block>
	<BlockTitle>Navigation</BlockTitle>
	<List>
		<ListItem href="/about/" title="About" />
		<ListItem href="/form/" title="Form" />
	</List>

	<Block strong class="flex space-x-4">
		<Button onclick={showAlert}>Button 1</Button>
		<Button>Button 2</Button>
	</Block>
</Page>
