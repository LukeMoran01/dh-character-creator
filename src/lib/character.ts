import type { CharacterClass } from '$lib/classes';
import type { Subclass } from '$lib/subclasses';
import type { Community } from '$lib/communities';
import type { Ancestry } from '$lib/ancestries';
import type { Armor, PrimaryWeapon, SecondaryWeapon } from '$lib/equipment';
import type { DomainCard } from '$lib/domains';
import { formatFeature, type Feature } from '$lib/features';
import { PDFDocument } from 'pdf-lib';
import { toast } from "svelte-sonner";

export class Character {
	name?: string;
	level: number = 1;
	class?: CharacterClass;
	subclass?: Subclass;
	ancestry?: Ancestry;
	community?: Community;
	evasion: number = 0;
	armor_score: number = 0;
	thresholds: {
		major: number;
		severe: number;
	} = {
		major: 1,
		severe: 1
	};
	hit_points: number = 0;
	stress: number = 6;
	hope = 2;
	traits: {
		agility: number | "Not set";
		strength: number | "Not set";
		finesse: number | "Not set";
		instinct: number | "Not set";
		presence: number | "Not set";
		knowledge: number | "Not set";
	};
	primary_weapon?: PrimaryWeapon;
	secondary_weapon?: SecondaryWeapon;
	burden: number = 0;
	max_burden: number = 2;
	armor?: Armor;
	inventory: string[] = [];
	domain_cards: DomainCard[] = [];
	max_domain_cards: number = 2;
	hope_feature?: Feature;
	class_features: Feature[] = [];
	spellcast_trait?: string | null = null;
	features: Feature[] = [];
	class_item?: string;

	constructor() {
		this.traits = {
			agility: "Not set",
			strength: "Not set",
			finesse: "Not set",
			instinct: "Not set",
			presence:"Not set",
			knowledge: "Not set"
		};
		this.thresholds = {
			major: 1,
			severe: 1
		};

		this.updateLocalStore();
	}

	public setClass(classData: CharacterClass | null) {
		if (this.class) {
			this.evasion -= this.class.starting_evasion;
			this.hit_points -= this.class.starting_hit_points;
			this.class_item = undefined;
			this.domain_cards = []
		}

		if (!classData) {
			this.setSubclass(null)
			this.hope_feature = undefined
			this.class_features = []
			this.subclass = undefined
			this.class = undefined
			this.updateLocalStore();
			return
		}

		this.evasion += classData.starting_evasion;
		this.hit_points += classData.starting_hit_points;
		this.hope_feature = classData.hope_feature;
		this.class_features = classData.class_features;

		/*
		TODO Warrior ignores burden
		 */
		this.class = classData;
		this.updateLocalStore();
	}

	public setClassItem(item: string | null) {
		this.class_item = item || undefined;
		this.updateLocalStore();
	}

	public setSubclass(subclassData: Subclass | null) {
		if (this.subclass) {
			this.features = this.features.filter(
				(x) => !this.subclass!.foundation_features.some((y) => y.name === x.name)
			);

			if (this.subclass.name === "School of War") this.hit_points -= 1
			if (this.subclass.name === "School of Knowledge") {
				this.max_domain_cards -= 1
				if (this.domain_cards.length > this.max_domain_cards) this.domain_cards = this.domain_cards.slice(0, this.max_domain_cards)
			}
			if (this.subclass.name === "Vengeance") this.stress -= 1
			if (this.subclass.name === "Stalwart") {
				this.thresholds.major -= 1
				this.thresholds.severe -= 1
			}
		}

		if (!subclassData) {
			this.subclass = undefined
			this.spellcast_trait = undefined
			this.updateLocalStore();
			return
		}

		if (subclassData.name === "School of War") this.hit_points += 1
		if (subclassData.name === "School of Knowledge") this.max_domain_cards += 1
		if (subclassData.name === "Vengeance") this.stress += 1
		if (subclassData.name === "Stalwart") {
			this.thresholds.major += 1
			this.thresholds.severe += 1
		}

		this.features = [...this.features, ...subclassData.foundation_features];
		this.spellcast_trait = subclassData.spellcast_trait;
		/*
		TODO Stalwart +1s thresholds, Vengeance +1s stress, Knowledge gets an additional domain card, Battlemage +1s hp
		 */
		this.subclass = subclassData;
		this.updateLocalStore();
	}

	public setAncestry(ancestryData: Ancestry | null) {
		if (this.ancestry) {
			this.features = this.features.filter(
				(x) => !this.ancestry!.features.some((y) => y.name === x.name)
			);

			// Race boons
			if (this.ancestry.name === "Human") this.stress -= 1
			if (this.ancestry.name === "Giant") this.hit_points -= 1
			if (this.ancestry.name === "Simiah") this.evasion -= 1
			if (this.ancestry.name === "Galapa") {
				this.thresholds.major -= 1
				this.thresholds.severe -= 1
			}
		}
		if (!ancestryData) {
			this.ancestry = undefined
			this.updateLocalStore();
			return
		}

		// Race boons
		if (ancestryData.name === "Human") this.stress += 1
		if (ancestryData.name === "Giant") this.hit_points += 1
		if (ancestryData.name === "Simiah") this.evasion += 1
		if (ancestryData.name === "Galapa") {
			this.thresholds.major += 1
			this.thresholds.severe += 1
		}

		this.features = [...this.features, ...ancestryData.features];
		this.ancestry = ancestryData;
		this.updateLocalStore();
	}

	public setCommunity(communityData: Community | null) {
		if (this.community) {
			this.features = this.features.filter((x) => this.community!.feature.name !== x.name);
		}
		if (!communityData) {
			this.community = undefined
			this.updateLocalStore();
			return
		}
		/*
		TODO Wanderborne add Nomadic Pack to inventory
		 */
		this.features = [...this.features, communityData.feature];
		this.community = communityData;
		this.updateLocalStore();
	}

	public setArmor(armorData: Armor | null) {
		if (this.armor) {
			this.thresholds.major -= this.armor.major_threshold;
			this.thresholds.severe -= this.armor.severe_threshold;
			this.armor_score -= this.armor.base_score;
		}
		if (!armorData) {
			this.armor = undefined
			this.updateLocalStore();
			return
		}
		this.thresholds.major += armorData.major_threshold;
		this.thresholds.severe += armorData.severe_threshold;
		this.armor_score += armorData.base_score;
		/*
		TODO Armor features that affect traits etc
		 */
		this.armor = armorData;
		this.updateLocalStore();
	}

	public setPrimary(weapon: PrimaryWeapon | null) {
		if (this.primary_weapon) {
			this.burden -= this.primary_weapon.burden
		}

		if (!weapon) {
			this.primary_weapon = undefined
			this.updateLocalStore();
			return
		}

		this.burden += weapon.burden
		this.primary_weapon = weapon
		this.updateLocalStore();
		return
	}

	public setSecondary(weapon: SecondaryWeapon | null) {
		if (this.secondary_weapon) {
			this.burden -= this.secondary_weapon.burden
		}

		if (!weapon) {
			this.secondary_weapon = undefined
			this.updateLocalStore();
			return
		}

		this.burden += weapon.burden
		this.secondary_weapon = weapon
		this.updateLocalStore();
		return
	}

	public setDomainCard(card: DomainCard | null) {
		if (!card) {
			this.domain_cards = []
			this.updateLocalStore();
			return
		}

		if (card && this.domain_cards.some((x) => x.name === card.name)) {
			this.domain_cards = this.domain_cards.filter((x) => x.name !== card.name)
		} else {
			if (card && this.domain_cards.length >= this.max_domain_cards) {
				toast("You have too many domain cards! Remove one to select another.")
				return
			}
			if (card && card.level > this.level) {
				toast("You are too low level for this domain card!")
				return
			}
			this.domain_cards.push(card)
		}
		this.updateLocalStore();
		return
	}

	public updateTrait(trait: keyof Character["traits"], value: number | "Not set") {
		this.traits[trait] = value
		this.updateLocalStore();
	}

	public updateName(name: string) {
		this.name = name
		this.updateLocalStore();
	}

	updateLocalStore() {
		const characterData = JSON.stringify({
			...this
		});

		localStorage.setItem(`current_character`, characterData);
	}

	public static loadFromLocalStore(): Character {
		const characterData = localStorage.getItem(`current_character`);
		if (!characterData) {
			return new Character();
		}
		const parsedData = JSON.parse(characterData);
		const character = new Character();

		// Copy all properties from parsed data to the new character instance
		Object.assign(character, parsedData);

		return character;
	}

	public async exportToPdf() {
		console.log("exporting in fn")
		// Load the existing PDF
		const existingPdfBytes = await fetch('src/lib/data/daggerheart-char-sheet.pdf').then(res => res.arrayBuffer());
		console.log(existingPdfBytes)
		const pdfDoc = await PDFDocument.load(existingPdfBytes);


		// Get the form
		const form = pdfDoc.getForm();

		form.getFields().forEach(x => console.log(x.getName()))

		form.getTextField("name").setText(sanitizeForPDF(this.name || ""));
		form.getTextField("level").setText(sanitizeForPDF(this.level.toString()));
		form.getTextField("evasion").setText(sanitizeForPDF(this.evasion.toString()));

		let classText = (this.class ? this.class.name : "") + (this.subclass ? " " + this.subclass.name : "")
		form.getTextField("class").setText(classText);

		let heritage = (this.community ? this.community.name : "") + (this.ancestry ? " " + this.ancestry.name : "")
		form.getTextField("heritage").setText(sanitizeForPDF(heritage));

		form.getTextField("majorDamage").setText(sanitizeForPDF(this.thresholds.major.toString()));
		form.getTextField("severeDamage").setText(sanitizeForPDF(this.thresholds.severe.toString()));

		form.getTextField("agility").setText(sanitizeForPDF(this.traits.agility === "Not set" ? "0" : formatNumber(this.traits.agility.toString())));
		form.getTextField("strength").setText(sanitizeForPDF(this.traits.strength === "Not set" ? "0" : formatNumber(this.traits.strength.toString())));
		form.getTextField("finesse").setText(sanitizeForPDF(this.traits.finesse === "Not set" ? "0" : formatNumber(this.traits.finesse.toString())));
		form.getTextField("instinct").setText(sanitizeForPDF(this.traits.instinct === "Not set" ? "0" : formatNumber(this.traits.instinct.toString())));
		form.getTextField("presence").setText(sanitizeForPDF(this.traits.presence === "Not set" ? "0" : formatNumber(this.traits.presence.toString())));
		form.getTextField("knowledge").setText(sanitizeForPDF(this.traits.knowledge === "Not set" ? "0" : formatNumber(this.traits.knowledge.toString())));

		form.getTextField("hope_feature").setText(sanitizeForPDF(this.hope_feature ? formatFeature(this.hope_feature) : ""));

		form.getTextField("primary_weapon_name").setText(sanitizeForPDF(this.primary_weapon ? this.primary_weapon.name : ""));
		form.getTextField("primary_weapon_trait").setText(sanitizeForPDF(this.primary_weapon ? this.primary_weapon.trait : ""));
		form.getTextField("primary_weapon_damage").setText(sanitizeForPDF(this.primary_weapon ? this.primary_weapon.damage : ""));
		form.getTextField("primary_weapon_feature").setText(sanitizeForPDF(this.primary_weapon ? formatFeature(this.primary_weapon.feature) : ""));

		form.getTextField("secondary_weapon_name").setText(sanitizeForPDF(this.secondary_weapon ? this.secondary_weapon.name : ""));
		form.getTextField("secondary_weapon_trait").setText(sanitizeForPDF(this.secondary_weapon ? this.secondary_weapon.trait : ""));
		form.getTextField("secondary_weapon_damage").setText(sanitizeForPDF(this.secondary_weapon ? this.secondary_weapon.damage : ""));
		form.getTextField("secondary_weapon_feature").setText(sanitizeForPDF(this.secondary_weapon ? formatFeature(this.secondary_weapon.feature) : ""));

		form.getTextField("armor").setText(sanitizeForPDF(this.armor_score.toString()));
		form.getTextField("armor_name").setText(sanitizeForPDF(this.armor ? this.armor.name : ""));

		let armorThresh = this.armor ? this.armor.major_threshold.toString() + " / " + this.armor.severe_threshold.toString() : ""
		form.getTextField("armor_thresholds").setText(sanitizeForPDF(this.armor ? armorThresh : ""));
		form.getTextField("armor_score").setText(sanitizeForPDF(this.armor ? this.armor.base_score.toString() : ""));
		form.getTextField("armor_feature").setText(sanitizeForPDF(this.armor ? formatFeature(this.armor.feature) : ""));

		await cloneFieldFormatting(pdfDoc, "hope_feature", "primary_weapon_feature");
		await cloneFieldFormatting(pdfDoc, "hope_feature", "secondary_weapon_feature");
		await cloneFieldFormatting(pdfDoc, "hope_feature", "armor_feature");

		// Save the PDF
		const pdfBytes = await pdfDoc.save();

		// Download the filled PDF
		const blob = new Blob([pdfBytes], { type: 'application/pdf' });
		const url = URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = url;
		link.download = 'filled-form.pdf';
		link.click();
	}
}

function formatNumber(num: number | string) {
	if (typeof num !== 'number') return String(num);

	// Ensure we use regular minus for negative numbers
	return num < 0 ? `-${Math.abs(num)}` : String(num);
}

function sanitizeForPDF(value: string | null | undefined) {
	if (value === null || value === undefined) return '';

	const text = String(value);

	return text
		// Replace Unicode minus (−) with ASCII hyphen (-)
		.replace(/\u2212/g, '-')
		// Replace en dash (–) and em dash (—) with hyphen
		.replace(/[\u2013\u2014]/g, '-')
		// Replace smart quotes
		.replace(/[\u2018\u2019]/g, "'")
		.replace(/[\u201C\u201D]/g, '"')
		// Replace other problematic Unicode characters
		.replace(/\u2026/g, '...')  // ellipsis
		.replace(/\u00A0/g, ' ')    // non-breaking space
		// Remove any remaining non-ASCII characters that might cause issues
		.replace(/[^\x20-\x7E]/g, '');
}

async function cloneFieldFormatting(pdfDoc: PDFDocument, correctFieldName: string, targetFieldName: string) {
	const form = pdfDoc.getForm();

	const sourceField = form.getTextField(correctFieldName);
	const targetField = form.getTextField(targetFieldName);

	// Get the source field's widget (visual representation)
	const sourceWidget = sourceField.acroField.getWidgets()[0];
	const targetWidget = targetField.acroField.getWidgets()[0];

	// Clone the entire default appearance string
	const sourceDA = sourceField.acroField.getDefaultAppearance();
	if (sourceDA) {
		targetField.acroField.setDefaultAppearance(sourceDA);
	}
}