<script lang="ts">
	import * as Select from "$lib/components/ui/select";
	import { Button } from '$lib/components/ui/button'
	import { currentCharacter, updateCharacter } from '$lib/stores/selections';
	import DetailSection from './_detail_section.svelte'
	import * as Tabs from "$lib/components/ui/tabs/index.js";
	import * as Card from "$lib/components/ui/card/index.js";

	let localSubclass: string;

	$: if (localSubclass && $currentCharacter.class) {
		let temp = $currentCharacter.class.subclasses.find(x => x.name === localSubclass)
		if (temp && temp.name !== $currentCharacter.subclass?.name) {
			updateCharacter(x => x.setSubclass(temp))
		}
	} else if ($currentCharacter.subclass) {
		localSubclass = $currentCharacter.subclass.name
	}

	let localClassItem: string;
	$: if (localClassItem) {
		updateCharacter(x => x.setClassItem(localClassItem))
	} else if ($currentCharacter.class_item) {
		localClassItem = $currentCharacter.class_item
	}

	function clearSelection() {
		updateCharacter(x => x.setClass(null))
	}

	// Add these new variables
	let selectedDomainFilter: string = 'all';
	let selectedLevelFilter: string | 'all' = 'all';

	// Computed property for filtered cards
	$: filteredDomains = $currentCharacter.class?.domains.map(domain => ({
		...domain,
		cards: domain.cards.filter(card => {
			const matchesDomain = selectedDomainFilter === 'all' || domain.name === selectedDomainFilter;
			const matchesLevel = selectedLevelFilter === 'all' || card.level === Number(selectedLevelFilter);
			return matchesDomain && matchesLevel;
		})
	})).filter(domain => domain.cards.length > 0) ?? [];

	// Get unique levels for the filter
	$: availableLevels = [...new Set($currentCharacter.class?.domains
		.flatMap(domain => domain.cards.map(card => card.level))
		.sort((a, b) => a - b) ?? [])];


</script>

{#if $currentCharacter.class}

	<Tabs.Root value="details" class="w-full">
		<Tabs.List>
			<Tabs.Trigger value="details">Class Details</Tabs.Trigger>
			<Tabs.Trigger value="domains">Domain Cards</Tabs.Trigger>
		</Tabs.List>

		<Tabs.Content value="details" class="space-y-4">
		<div style="display: flex; flex-direction: row; gap: 15px; height: 100%; align-items: stretch">
		<div class="detail-view">
			<div class="section">
				<div class="title-bar">
					<div>
						<h1>{$currentCharacter.class.name}</h1>
						<h3>{$currentCharacter.class.domains.map(d => d.name).join(' and ')}</h3>
					</div>
					<Button variant="default" onclick={clearSelection}>Deselect</Button>
				</div>
				<div style="display: flex; flex-direction: row; gap: 1rem; border-bottom: 1px solid hsl(var(--primary))">
					<h2>Starting Evasion Score: {$currentCharacter.class.starting_evasion}</h2> |
					<h2>Starting Hit Points: {$currentCharacter.class.starting_hit_points}</h2>
				</div>
				<p class="description">{$currentCharacter.class.description}</p>
			</div>
			<div class="section">
				<h2>Hope Feature</h2>
				<DetailSection title={$currentCharacter.class.hope_feature.name} description={$currentCharacter.class.hope_feature.feature} />
			</div>
			<div class="section">
				<h2>Class Features</h2>
				{#each $currentCharacter.class.class_features as c_feat}
					<DetailSection title={c_feat.name} description={c_feat.feature} />
				{/each}
			</div>
		</div>
		<div class="selections">
				<div style="width: 100%;">
					<h1>Selections</h1>
					<h4>Class Item</h4>
					<Select.Root type="single" bind:value={localClassItem}>
						<Select.Trigger class="w-full">
							{localClassItem ? localClassItem : "Class Item"}
						</Select.Trigger>
						<Select.Content class="w-full">
							{#each $currentCharacter.class.class_items as item}
								<Select.Item value={item}>{item}</Select.Item>
							{/each}
						</Select.Content>
					</Select.Root>

					<h4>Subclass</h4>
					<Select.Root type="single" bind:value={localSubclass}>
						<Select.Trigger class="w-full">
							{localSubclass ? localSubclass : "Subclass"}
						</Select.Trigger>
						<Select.Content class="w-full">
							{#each $currentCharacter.class.subclasses as s}
								<Select.Item value={s.name}>{s.name}</Select.Item>
							{/each}
						</Select.Content>
					</Select.Root>
				</div>
			{#if $currentCharacter.subclass}
				<div class="title-bar" style="margin-top: 20px; border-top: 1px solid hsl(var(--primary))">
					<div>
						<h1>{$currentCharacter.subclass.name}</h1>
						<h3>{$currentCharacter.subclass.description}</h3>
						{#if $currentCharacter.subclass.spellcast_trait}
							<strong>Spellcast Trait: </strong>{" " + $currentCharacter.subclass.spellcast_trait}
						{/if}
						<h2 style="margin-top: 10px;">Foundation Features</h2>
						{#each $currentCharacter.subclass.foundation_features as f}
							<DetailSection title={f.name} description={f.feature} />
						{/each}
						<h2>Specialization Features</h2>
						{#each $currentCharacter.subclass.specialization_features as f}
							<DetailSection title={f.name} description={f.feature} />
						{/each}
						<h2>Mastery Features</h2>
						{#each $currentCharacter.subclass.mastery_features as f}
							<DetailSection title={f.name} description={f.feature} />
						{/each}
					</div>
				</div>
			{/if}
		</div>
	</div>
		</Tabs.Content>

		<Tabs.Content value="domains" class="space-y-4">
			<div class="content-header">
				<h1 class="content-title">Domain Cards</h1>
				<p class="content-description">
					Select domain cards available to {$currentCharacter.class.name}.
					You have selected {$currentCharacter.domain_cards.length} / {$currentCharacter.max_domain_cards} domain cards.
				</p>

				<div class="filters">
					<Select.Root type="single" bind:value={selectedDomainFilter}>
						<Select.Trigger class="w-[200px]">
							{selectedDomainFilter === 'all' ? 'All Domains' : selectedDomainFilter}
						</Select.Trigger>
						<Select.Content>
							<Select.Item value="all">All Domains</Select.Item>
							{#each $currentCharacter.class.domains as domain}
								<Select.Item value={domain.name}>{domain.name}</Select.Item>
							{/each}
						</Select.Content>
					</Select.Root>

					<Select.Root type="single" bind:value={selectedLevelFilter}>
						<Select.Trigger class="w-[200px]">
							{selectedLevelFilter === 'all' ? 'All Levels' : `Level ${selectedLevelFilter}`}
						</Select.Trigger>
						<Select.Content>
							<Select.Item value="all">All Levels</Select.Item>
							{#each availableLevels as level}
								<Select.Item value={level.toString()}>Level {level}</Select.Item>
							{/each}
						</Select.Content>
					</Select.Root>
				</div>
			</div>

			<div class="domains-grid">
				{#each filteredDomains as domain}
					<div class="section">
						<h3>{domain.name} Domain Cards</h3>
						<div class="cards-grid">
							{#each domain.cards as card}
								<div class="domain-card"
										 class:domain-card-selected={$currentCharacter.domain_cards.some(x => x.name === card.name)}
										 on:click={() => {
											 updateCharacter(x => x.setDomainCard(card))
										 }}
										 on:keydown
										 tabindex="-1"
										 role="button"
								>
								<Card.Root class="h-full">
									<Card.Header>
										<Card.Title>
											{card.name}
											{#if $currentCharacter.domain_cards.some(x => x.name === card.name)}
											<span style="color: hsl(var(--destructive)); font-weight: ligher; font-size: 1rem;">
												SELECTED</span>
											{/if}
										</Card.Title>
										<Card.Description class="card-type">{card.type}</Card.Description>
										<div class="card-metadata">
											<span class="level">Required Level: {card.level}</span>
											<span class="recall">Recall Cost: {card.recall_cost}</span>
										</div>
									</Card.Header>
									<Card.Content class="h-full">
										<div style="display: flex; flex-direction: column; justify-content: space-between;">
											<p>{card.feature}</p>

										</div>
									</Card.Content>
								</Card.Root>
								</div>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</Tabs.Content>
	</Tabs.Root>


{:else}
	<p>No class selected.</p>
{/if}

<style>

    .domains-grid {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .cards-grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 1rem;
    }

    .card-type {
        font-size: 0.8rem;
        color: hsl(var(--muted-foreground));
        margin: 0.25rem 0;
    }


    .detail-view {
				width: 60%;
				flex: 1.7;
        padding: 1rem;
        background: hsl(var(--muted));
        border-radius: 12px;
        box-shadow: 0 6px 20px rgba(0,0,0,0.1);
    }

		.selections {
				flex: 1.3;
        padding: 1rem;
        background: hsl(var(--muted));
        border-radius: 12px;
        box-shadow: 0 6px 20px rgba(0,0,0,0.1);
		}

		.title-bar {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
		}

    h1 {
        margin-bottom: 0.2rem;
				font-size: 2rem;
				font-weight: bold;
    }

		h2 {
				margin-bottom: 0.2rem;
				font-size: 1.2rem;
		}

    h3 {
        margin-bottom: 0.2rem;
        font-size: 1rem;
				font-weight: lighter;
				font-style: italic;
				margin-top: -0.5rem;

    }

    .description {
        font-size: 1rem;
        line-height: 1.5;
        margin: 1rem 0;
    }

    ul {
        padding-left: 1.5rem;
    }

    li {
        margin-bottom: 0.5rem;
    }

    .filters {
        display: flex;
        gap: 1rem;
        margin-top: 1rem;
        margin-bottom: 2rem;
    }

    .domain-card {
        background: hsl(var(--card));
        border: 1px solid hsl(var(--border));
        transition: transform 0.2s, box-shadow 0.2s;
				gap: 1rem;
        cursor: pointer;
				height: 100%;
				border-radius: 12px;
    }

    .domain-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
				border: 1px solid hsl(var(--primary));
    }

		.domain-card-selected {
        transform: translateY(-4px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        border: 1px solid hsl(var(--destructive));
		}

    .card-metadata {
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
        padding-top: 0.5rem;
        border-top: 1px solid hsl(var(--border));
        font-size: 0.875rem;
        color: hsl(var(--muted-foreground));
    }

    .level, .recall {
        font-weight: 500;
    }

</style>