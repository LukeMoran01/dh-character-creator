import type { Feature } from '$lib/features';

export interface Subclass {
	name: string;
	description: string;
	spellcast_trait?: string | null
	foundation_features: Feature[]
	specialization_features: Feature[]
	mastery_features: Feature[]
}