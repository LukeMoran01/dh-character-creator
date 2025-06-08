<script lang="ts">

import { PrimaryWeapons } from '$lib/gen/primary_weapons.js';
import { Armors } from '$lib/gen/armors.js';
import TableBurden from './_table_burden.svelte';
import Table from './_table_armor.svelte';
import { currentCharacter, updateCharacter } from '$lib/stores/selections';
import * as Card from "$lib/components/ui/card/index.js";
import * as Tabs from "$lib/components/ui/tabs/index.js";
import { SecondaryWeapons } from '$lib/gen/secondary_weapons';

</script>

<div class="space-y-4">

	<div class="flex justify-center">
		<Card.Root class="w-80">
			<Card.Header>
				<Card.Title>Weapons</Card.Title>
			</Card.Header>
			<Card.Content>
				<div class="space-y-2">
					{#if !$currentCharacter.subclass}
						<span>You must select a subclass to choose equipment.</span>
						{:else}
							<p>If your subclass has a spellcasting trait you can select magical weapons.</p>
							<p>You may choose a two-handed primary weapon or a one-handed primary and secondary weapon.</p>
					{/if}
				</div>
			</Card.Content>
		</Card.Root>
		<Card.Root class="w-120">
			<Card.Header>
				<Card.Title>Equipment Burden</Card.Title>
			</Card.Header>
			<Card.Content>
				<div class="space-y-2">
					<div class="flex justify-between gap-8">
						<span>Primary Weapon:</span>
						<span>{$currentCharacter.primary_weapon?.name || "Not Selected"}</span>
					</div>
					<div class="flex justify-between gap-8">
						<span>Secondary Weapon:</span>
						<span>{$currentCharacter.secondary_weapon?.name || "Not Selected"}</span>
					</div>
					<div class="flex justify-between gap-8">
						<span>Armor:</span>
						<span>{$currentCharacter.armor?.name || "Not Selected"}</span>
					</div>
					<div class="flex justify-between gap-8 font-bold border-t pt-2">
						<span>Total Burden:</span>
						<span>{$currentCharacter.burden}/{$currentCharacter.max_burden}</span>
					</div>
				</div>
			</Card.Content>
		</Card.Root>
		<Card.Root class="w-80">
			<Card.Header>
				<Card.Title>Armor</Card.Title>
			</Card.Header>
			<Card.Content>
				<div class="space-y-2">
					<p>Armor determines your base major/severe thresholds and your base armor slots (score).</p>
				</div>
			</Card.Content>
		</Card.Root>
	</div>

	<Tabs.Root value="weapons" class="w-full">
		<Tabs.List>
			<Tabs.Trigger value="weapons">Weapons</Tabs.Trigger>
			<Tabs.Trigger value="armor">Armor</Tabs.Trigger>
		</Tabs.List>

		<Tabs.Content value="weapons" class="space-y-4">
			<Card.Root>
				<Card.Header>
					<Card.Title>Primary Weapons</Card.Title>
				</Card.Header>
				<Card.Content>
			<div class="grid grid-cols-2 gap-4">
				<Card.Root>
					<Card.Header>
						<Card.Title>Physical Weapons</Card.Title>
					</Card.Header>
					<Card.Content>
						<TableBurden caption="Physical Weapons" columns={["Name", "Trait", "Range", "Damage", "Burden", "Feature", "Selected"]}
												 data={PrimaryWeapons.filter(x => x.type === "physical").map(x => ({
												 name: x.name,
												 trait: x.trait,
												 range: x.range,
												 damage: x.damage,
												 burden: x.burden === 1 ? "One-handed" : "Two-handed",
												 feature: x.feature ? `${x.feature.name}: ${x.feature.feature}` : "-",
												 selected: x.selected
											 }))} sourceData={PrimaryWeapons.filter(x => x.type === "physical")}
												 updateFn={(w) => updateCharacter(x => x.setPrimary(w))} field="primary_weapon"/>
					</Card.Content>
				</Card.Root>

				<Card.Root>
					<Card.Header>
						<Card.Title>
							Magical Weapons
							{#if  !!!$currentCharacter?.spellcast_trait}
								<span class="text-sm">(Not available for your subclass)</span>
							{:else}
								<span class="text-sm">Spellcast Trait: {$currentCharacter.spellcast_trait}</span>
							{/if}
						</Card.Title>
					</Card.Header>
					<Card.Content>
						<TableBurden caption="Magical Weapons" columns={["Name", "Trait", "Range", "Damage", "Burden", "Feature", "Selected"]}
												 data={PrimaryWeapons.filter(x => x.type === "magic").map(x => ({
						 name: x.name,
						 trait: x.trait,
						 range: x.range,
						 damage: x.damage,
						 burden: x.burden === 1 ? "One-handed" : "Two-handed",
						 feature: x.feature ? `${x.feature.name}: ${x.feature.feature}` : "-",
						 selected: x.selected
						 }))} sourceData={PrimaryWeapons.filter(x => x.type === "magic")}
						 updateFn={(w) => updateCharacter(x => x.setPrimary(w))} field="primary_weapon" disabled={!$currentCharacter.spellcast_trait}/>
					</Card.Content>
				</Card.Root>
			</div>
					<Card.Root>
						<Card.Header>
							<Card.Title>
								Secondary Weapons
							</Card.Title>
						</Card.Header>
						<Card.Content>
							<TableBurden
								caption="Magical Weapons"
								columns={["Name", "Trait", "Range", "Damage", "Burden", "Feature", "Selected"]}
							 	data={SecondaryWeapons.map(x => ({
								 name: x.name,
								 trait: x.trait,
								 range: x.range,
								 damage: x.damage,
								 burden: x.burden === 1 ? "One-handed" : "Two-handed",
								 feature: x.feature ? `${x.feature.name}: ${x.feature.feature}` : "-",
								 selected: x.selected
								 }))}
								sourceData={SecondaryWeapons}
								updateFn={(w) => updateCharacter(x => x.setSecondary(w))} field="secondary_weapon"/>
						</Card.Content>
					</Card.Root>
				</Card.Content>
			</Card.Root>
		</Tabs.Content>

		<Tabs.Content value="armor">
			<Card.Root>
				<Card.Header>
					<Card.Title>Armor Selection</Card.Title>
				</Card.Header>
				<Card.Content>
					<Table caption="Armors" columns={["Name", "Major", "Severe", "Score", "Feature", "Selected"]}
											 data={Armors.map(x => ({
						 name: x.name,
						 major_threshold: x.major_threshold,
						 severe_threshold: x.severe_threshold,
					 	 base_score: x.base_score,
						 feature: x.feature ? `${x.feature.name}: ${x.feature.feature}` : "-",
						 selected: x.selected
						 }))} sourceData={Armors}/>
				</Card.Content>
			</Card.Root>
		</Tabs.Content>
	</Tabs.Root>

</div>


