import type { Feature } from '$lib/features';

export type WeaponType = "physical" | "magic"

interface Weapon {
	id: string;
	tier: number;
	name: string;
	trait: string;
	range: string;
	damage: string;
	burden: number;
	feature: Feature;
	selected: boolean;
}

export interface PrimaryWeapon extends Weapon {
	type: WeaponType;
}
export interface SecondaryWeapon extends Weapon {}

export interface Armor {
	name: string;
	tier: number;
	major_threshold: number;
	severe_threshold: number;
	base_score: number;
	feature: Feature;
	selected: boolean;
}