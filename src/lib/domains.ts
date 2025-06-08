export interface Domain {
	id: string
	name: string;
	description: string;
	cards: DomainCard[];
}

export type DomainCardType = "Ability" | "Spell" | "Grimoire"

export interface DomainCard {
	id: string
	name: string;
	level: number;
	recall_cost: number;
	type: DomainCardType;
	feature: string;
}