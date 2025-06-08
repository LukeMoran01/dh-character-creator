import type { Feature } from '$lib/features';

export interface Ancestry {
	id: string;
	name: string;
	description: string;
	features: Feature[];
}