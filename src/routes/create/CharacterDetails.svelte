<script lang="ts">
    import * as Select from "$lib/components/ui/select";
    import { Input } from "$lib/components/ui/input";
    import { Label } from "$lib/components/ui/label";
    import * as Card from "$lib/components/ui/card";
    import { currentCharacter, updateCharacter } from '$lib/stores/selections';

    let characterName = $currentCharacter.name || '';
    console.log(characterName)

    function updateName(name: string) {
        updateCharacter(char => {
            char.updateName(name);
            return char;
        });0
    }

    let modifiers = [
        {
            value: 2,
            used: false,
            trait: ""
        },
        {
            value: 1,
            used: false,
            trait: ""
        },
        {
            value: 1,
            used: false,
            trait: ""
        },
        {
            value: 0,
            used: false,
            trait: ""
        },
        {
            value: 0,
            used: false,
            trait: ""
        },
        {
            value: -1,
            used: false,
            trait: ""
        },
    ]

    for (let [t, v] of Object.entries($currentCharacter.traits)) {
        if (v !== "Not set") {
            let i = modifiers.findIndex(mod => mod.value === v && !mod.used)
            if (i !== -1) {
                modifiers[i].used = true
                modifiers[i].trait = t
                modifiers[i].value = v
            }
        }
    }

</script>

<div class="container">
    <Card.Root class="character-card">
        <Card.Header>
            <Card.Title>Character Details</Card.Title>
            <Card.Description>Edit your character's basic information and traits</Card.Description>
        </Card.Header>
        <Card.Content>
            <div class="character-name">
                <Label for="character-name">Character Name</Label>
                <Input 
                    id="character-name"
                    type="text" 
                    placeholder="Enter character name..." 
                    bind:value={characterName}
                    on:input={(e) => updateName(e.currentTarget.value)}
                />
            </div>

            <div class="stats-overview">
                <div class="stat">
                    <span class="stat-label">Level</span>
                    <span class="stat-value">{$currentCharacter.level}</span>
                </div>
                <div class="stat">
                    <span class="stat-label">HP</span>
                    <span class="stat-value">{$currentCharacter.hit_points}</span>
                </div>
                <div class="stat">
                    <span class="stat-label">Evasion</span>
                    <span class="stat-value">{$currentCharacter.evasion}</span>
                </div>
                <div class="stat">
                    <span class="stat-label">Stress</span>
                    <span class="stat-value">{$currentCharacter.stress}</span>
                </div>
            </div>

            <div class="traits-section">
                <h3>Character Traits</h3>
                <div class="traits-grid">
                    {#each Object.entries($currentCharacter.traits) as [trait, value] (trait)}
                        <div class="trait-item">
                            <Label for={trait}>{trait[0].toUpperCase() + trait.slice(1)}</Label>
                            <select
                              on:change={(e) => {
                                  let v = e.target.value
                                  if (v === "-2") {
                                      let i = modifiers.findIndex(mod => mod.trait === trait)
                                      if (i !== -1) {
                                          modifiers[i].used = false
                                      }
                                      updateCharacter(x => x.updateTrait(trait, "Not set"))
                                  } else {
                                      modifiers[v].used = true
                                      modifiers[v].trait = trait
                                      updateCharacter(x => x.updateTrait(trait, modifiers[v].value))
                                  }
                              }}
                              class="border border-gray-300 rounded px-3 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                              style="background: hsl(var(--background)); color: hsl(var(--primary));"
                            >
                                <option selected={value === "Not set"} value={-2}>Not set</option>
                                {#each modifiers as mod, index (index)}
                                    <option selected={modifiers[index].trait === trait} disabled={mod.used} value={index}>
                                        {mod.value}
                                    </option>
                                {/each}
                            </select>
                        </div>
                    {/each}
                </div>
            </div>
        </Card.Content>
    </Card.Root>
</div>

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding: 2rem;
    }

    .character-card {
        width: 100%;
        max-width: 800px;
        background: hsl(var(--card));
        border: 1px solid hsl(var(--border));
    }

    .character-name {
        margin-bottom: 2rem;
    }

    .stats-overview {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 1rem;
        margin-bottom: 2rem;
        padding: 1rem;
        background: hsl(var(--secondary));
        border-radius: 0.5rem;
    }

    .stat {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 80px;
    }

    .stat-label {
        font-size: 0.875rem;
        color: hsl(var(--muted-foreground));
        margin-bottom: 0.25rem;
    }

    .stat-value {
        font-size: 1.5rem;
        font-weight: 600;
        color: hsl(var(--primary));
    }

    .traits-section {
        margin-top: 2rem;
    }

    .traits-section h3 {
        margin-bottom: 1rem;
        font-size: 1.25rem;
        font-weight: 600;
    }

    .traits-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 1rem;
    }

    .trait-item {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    @media (max-width: 640px) {
        .container {
            padding: 1rem;
        }

        .stats-overview {
            gap: 0.5rem;
        }

        .stat {
            min-width: 60px;
        }

        .traits-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>