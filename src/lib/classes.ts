import type { Domain } from '$lib/domains';
import type { Feature } from '$lib/features';
import type { Subclass } from '$lib/subclasses';

export interface ClassBase {
	name: string;
	description: string;
	starting_evasion: number;
	starting_hit_points: number;
	class_items: string[];
	class_features: Feature[];
	hope_feature: Feature;
	subclasses: Subclass[];
	background_questions: string[];
	connections: string[];
}

export interface RawClassData extends ClassBase {
	domain_ids: string[];
}


export interface CharacterClass extends ClassBase {
	id: string;
	domains: Domain[];
}