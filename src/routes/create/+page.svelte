<script lang="ts">

	import { Classes } from '$lib/gen/class-data';
	import GridCard from './_grid_card.svelte';
	import ClassDetailView from './_class_detail_view.svelte'
	import BasicDetailView from './_basic_detail_view.svelte'
	import { Ancestries } from '$lib/gen/ancestry-data';
	import { Communities } from '$lib/gen/community-data';
	import { updateCharacter, currentCharacter } from '$lib/stores/selections';
	import Table from './_table_burden.svelte'
	import type { CharacterClass } from '$lib/classes';
	import type { Subclass } from '$lib/subclasses';
	import type { Ancestry } from '$lib/ancestries';
	import { PrimaryWeapons } from '$lib/gen/primary_weapons';
	import EquipmentView from './_equipment_view.svelte'
	import CharacterDetails from './CharacterDetails.svelte';

	let selectedTab = "class"
	let grid = true
	$: grid = !(selectedTab === "equipment" || selectedTab === "details" || (selectedTab === "class" && !!$currentCharacter.class) ||
		(selectedTab === "ancestry" && !!$currentCharacter.ancestry) || (selectedTab === "community" && !!$currentCharacter.community))

</script>

<div style="margin: 30px;">

	<div class="tab-bar">
		<div class="tab-box tab-box-left" class:selected={selectedTab === "class"} on:keydown tabindex="0" role="button" on:click={() => selectedTab = "class"}>
				<p>Class</p>
			{#if $currentCharacter.class}
				<p>{$currentCharacter.class.name}</p>
			{:else}
				<p>Not Selected</p>
			{/if}
			{#if $currentCharacter.subclass}
				<p style="font-style: italic; font-weight: lighter; margin-top: -8px;">{$currentCharacter.subclass.name}</p>
			{/if}
		</div>
		<div class="tab-box" class:selected={selectedTab === "ancestry"} on:keydown tabindex="0" role="button" on:click={() => selectedTab = "ancestry"}>
			Ancestry
			{#if $currentCharacter.ancestry}
				<p>{$currentCharacter.ancestry.name}</p>
			{:else}
				<p>Not Selected</p>
			{/if}
		</div>
		<div class="tab-box" class:selected={selectedTab === "community"} on:keydown tabindex="0" role="button" on:click={() => selectedTab = "community"}>
			Community
			{#if $currentCharacter.community}
				<p>{$currentCharacter.community.name}</p>
			{:else}
				<p>Not Selected</p>
			{/if}
		</div>
		<div class="tab-box" class:selected={selectedTab === "equipment"}
				 on:keydown tabindex="0" role="button" on:click={() => selectedTab = "equipment"}>
			Equipment
		</div>
		<div class="tab-box tab-box-right" class:selected={selectedTab === "details"}
				 on:keydown tabindex="0" role="button" on:click={() => selectedTab = "details"}>
			Details
		</div>
	</div>

	<div class:grid={grid}>
		{#if selectedTab === "class"}
			{#if !$currentCharacter.class}
				{#each Object.values(Classes) as cls}
					<GridCard
						title={cls.name}
						subtitle={cls.domains.map(x => x.name).join(" and ")}
						body={cls.description}
						onclick={() => updateCharacter(x => x.setClass(cls))}
					/>
				{/each}
			{:else}
				<ClassDetailView />
			{/if}
			{:else if selectedTab === "ancestry"}
			{#if !$currentCharacter.ancestry}
				{#each Object.values(Ancestries) as a}
					<GridCard
						title={a.name}
						subtitle={""}
						body={a.description}
						onclick={() => updateCharacter(x => x.setAncestry(a))}
					/>
				{/each}
				{:else}
				<BasicDetailView title={$currentCharacter.ancestry.name} description={$currentCharacter.ancestry.description}
												 features={$currentCharacter.ancestry.features}
												 clearFn={() => updateCharacter(x => x.setAncestry(null))}
				/>
				{/if}
			{:else if selectedTab === "community"}
				{#if !$currentCharacter.community}
					{#each Object.values(Communities) as c}
						<GridCard
							title={c.name}
							subtitle={""}
							body={c.description}
							onclick={() => updateCharacter(x => x.setCommunity(c))}
						/>
					{/each}
					{:else}
					<BasicDetailView title={$currentCharacter.community.name} description={$currentCharacter.community.description}
													 features={[$currentCharacter.community.feature]}
													 clearFn={() => updateCharacter(x => x.setCommunity(null))}
					/>
				{/if}
		{:else if selectedTab === "equipment"}
			<EquipmentView />
		{:else if selectedTab === "details"}
			<CharacterDetails />
		{/if}
	</div>

</div>

<style>
    * {
        box-sizing: border-box;
    }

		.tab-box {
				padding: 10px;
				height: 100%;
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
		}

		.selected {
				background-color: hsl(var(--destructive));
		}

		.tab-box-left {
				border-bottom-left-radius: 15px;
				border-top-left-radius: 15px;
		}

    .tab-box-right {
        border-bottom-right-radius: 15px;
        border-top-right-radius: 15px;
    }

		.tab-box:hover {
				box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
				cursor: pointer;
				border: 1px solid hsl(var(--primary));
				opacity: 90%;
		}

		.tab-bar {
				height: 7vh;
				width: 100%;
				background-color: hsl(var(--muted));
				border-radius: 15px;
				border: 1px solid hsl(var(--primary));
				margin-bottom: 15px;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
		}

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap: 1.5rem;
    }

</style>