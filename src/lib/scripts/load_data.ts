import type { Domain, DomainCardType } from '$lib/domains';
import fs from 'fs/promises';
import type { CharacterClass } from '$lib/classes';
import { Domains } from '$lib/gen/domain-data';
import type { Ancestry } from '$lib/ancestries';
import type { Community } from '$lib/communities';
import type { PrimaryWeapon } from '$lib/equipment';

export {};

// DOMAINS

let domainData = await import("$lib/data/domains.json")
let domains: { [key: string]: Domain } = {}
domainData.default.forEach(domain => {
	let id = domain.name.toLowerCase().replace(/\s/g, '-')
	domains[id] = {
		id: id,
		name: domain.name[0] + domain.name.substring(1).toLowerCase(),
		description: domain.description,
		cards: domain.cards.map(y => {
			return {
				id: y.name.toLowerCase().replace(/\s/g, '-'),
				name: y.name,
				level: y.level,
				recall_cost: y.recall_cost,
				type: y.type as DomainCardType,
				feature: y.feature,
			}})
	}
})

let output = `
import { type Domain } from '$lib/domains';
// Auto generated data
export const Domains: { [key: string]: Domain } = ${JSON.stringify(domains, null, 2)}
`

await fs.writeFile('../gen/domain-data.ts', output)

// CLASSES

let classData = await import("$lib/data/classes.json")
let classes: { [key: string]: CharacterClass } = {}
classData.default.forEach(data => {
	let id = data.name.toLowerCase().replace(/\s/g, '-')
	classes[id] = {
		id: id,
		name: data.name,
		description: data.description,
		starting_evasion: data.starting_evasion,
		starting_hit_points: data.starting_hit_points,
		class_items: data.class_items[0].split(" or ").map(x => {
			x = x.trim()
			return x[0].toUpperCase() + x.substring(1)
		}),
		class_features: data.class_features,
		hope_feature: data.hope_feature,
		subclasses: data.subclasses,
		domains: data.domain_ids.map(x => Domains[x]),
		background_questions: data.background_questions,
		connections: data.connections,
	}
})

output = `
import { type CharacterClass } from '$lib/classes';
// Auto generated data
export const Classes: { [key: string]: CharacterClass } = ${JSON.stringify(classes, null, 2)}
`

await fs.writeFile('../gen/class-data.ts', output)

// ANCESTRIES

let ancestryData = await import("$lib/data/ancestries.json")
let ancestries: { [key: string]: Ancestry } = {}
ancestryData.default.forEach(data => {
	let id = data.name.toLowerCase().replace(/\s/g, '-')
	ancestries[id] = {
		id: id,
		name: data.name,
		description: data.description,
		features: data.features,
	}
})

output = `
import { type Ancestry } from '$lib/ancestries';
// Auto generated data
export const Ancestries: { [key: string]: Ancestry } = ${JSON.stringify(ancestries, null, 2)}
`

await fs.writeFile('../gen/ancestry-data.ts', output)

// COMMUNITIES

let communityData = await import("$lib/data/communities.json")
let communities: { [key: string]: Community } = {}
communityData.default.forEach(data => {
	let id = data.name.toLowerCase().replace(/\s/g, '-')
	communities[id] = {
		id: id,
		name: data.name,
		description: data.description,
		feature: data.feature,
	}
})

output = `
import { type Community } from '$lib/communities';
// Auto generated data
export const Communities: { [key: string]: Community } = ${JSON.stringify(communities, null, 2)}
`

await fs.writeFile('../gen/community-data.ts', output)

// Primary Weapons

let primWeaponData = await import("$lib/data/primary_weapons.json")
let primWeapons = primWeaponData.default.map(data => {
	let id = data.name.toLowerCase().replace(/\s/g, '-')
	return {
		id: id,
		name: data.name,
		tier: data.tier,
		type: data.type,
		trait: data.trait,
		range: data.range,
		burden: data.burden,
		damage: data.damage,
		feature: data.feature,
		selected: false
	}
})

output = `
import { type PrimaryWeapon } from '$lib/equipment';
// Auto generated data
export const PrimaryWeapons: PrimaryWeapon[] = ${JSON.stringify(primWeapons, null, 2)}
`

await fs.writeFile('../gen/primary_weapons.ts', output)

// Secondary Weapons

let secWeaponData = await import("$lib/data/secondary_weapons.json")
let secWeapons = secWeaponData.default.map(data => {
	let id = data.name.toLowerCase().replace(/\s/g, '-')
	return {
		id: id,
		name: data.name,
		tier: data.tier,
		trait: data.trait,
		range: data.range,
		burden: data.burden,
		damage: data.damage,
		feature: data.feature,
		selected: false
	}
})

output = `
import { type SecondaryWeapon } from '$lib/equipment';
// Auto generated data
export const SecondaryWeapons: SecondaryWeapon[] = ${JSON.stringify(secWeapons, null, 2)}
`

await fs.writeFile('../gen/secondary_weapons.ts', output)

// Armors

let armorData = await import("$lib/data/armors.json")
let armors = armorData.default.map(data => {
	let id = data.name.toLowerCase().replace(/\s/g, '-')
	return {
		id: id,
		name: data.name,
		tier: data.tier,
		major_threshold: data.major_threshold,
		severe_threshold: data.severe_threshold,
		base_score: data.base_score,
		feature: data.feature,
		selected: false
	}
})

output = `
import { type Armor } from '$lib/equipment';
// Auto generated data
export const Armors: Armor[] = ${JSON.stringify(armors, null, 2)}
`

await fs.writeFile('../gen/armors.ts', output)