import type { Feature } from '$lib/features';

export interface Community {
	id: string;
	name: string;
	description: string;
	feature: Feature;
}