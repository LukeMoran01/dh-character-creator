<script lang="ts">
	import { currentCharacter} from '$lib/stores/selections';
	import { Character } from '$lib/character';
	import { Button } from '$lib/components/ui/button';
	import {base} from '$app/paths'

	let { children } = $props();

	if (!$currentCharacter) {
		$currentCharacter = Character.loadFromLocalStore();
	}

	$effect(() => {
		console.log($currentCharacter);
	})
</script>

<header class="header bg-secondary">
	<div class="header-content">
		<a href={base} class="logo">Character Creator</a>
	</div>
	<div class="header-content">
		<Button onclick={async () => {await $currentCharacter.exportToPdf()}}>
			Export to PDF
		</Button>
	</div>

</header>

{@render children()}

<style>

    .header {
        color: white;
        padding: 0.5rem 2rem;
        top: 0;
        z-index: 100;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
				width: 100%;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
    }

    .header-content {
        align-items: center;
        margin: 0 auto;
    }

    .logo {
        font-size: 1.5rem;
        font-weight: bold;
        text-decoration: none;
        color: white;
    }
</style>
