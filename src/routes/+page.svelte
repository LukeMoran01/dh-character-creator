<script>
	import {Button} from "$lib/components/ui/button"
	import { goto } from '$app/navigation';
	import { currentCharacter } from '$lib/stores/selections.js';
	import { Character } from '$lib/character.js';
	import {base} from '$app/paths'
</script>

<div class="main-page">
	<div class="content">
		<h1 class="title">Daggerheart Character Creator</h1>
		<div class="buttons">
			<Button onclick={() => {
				$currentCharacter = new Character()
				goto(`${base}/create`)
			}}>Create Character</Button>
			<Button onclick={() => goto(`${base}/create`)}>
				View Current Character
			</Button>
		</div>
	</div>
</div>

<style>
	.main-page {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			align-content: center;
			min-height: 66vh;
	}

	.title {
			font-size: 3rem;
	}

	.content {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-content: center;
	}

	.buttons {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-content: center;
			gap: 1rem;
	}
</style>


