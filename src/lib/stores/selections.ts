import { writable } from 'svelte/store';
import type { Character } from '$lib/character';

export const currentCharacter = writable<Character>();

export function updateCharacter(fn: (character: Character) => void) {
	currentCharacter.update(char => {
		if (char) {
			fn(char);
			return char;
		}
		return char;
	});
}
