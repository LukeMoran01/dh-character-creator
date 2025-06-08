<script lang="ts">

	import DetailSection from './_detail_section.svelte'
	import type { Feature } from '$lib/features';
	import { Button } from '$lib/components/ui/button';

	export let title: string
	export let description: string
	export let features: Feature[];
	export let clearFn: any

</script>
<div style="width: 100%; display: flex; flex-direction: column; align-items: center;">
	<div class="detail-view">
		<div class="title-bar">
			<div>
				<h1>{title}</h1>
			</div>
			<Button onclick={clearFn}>Deselect</Button>
		</div>
		<p>{description}</p>
		<h2>Features</h2>
		{#each features as f}
			<DetailSection title={f.name} description={f.feature} />
		{/each}
	</div>
</div>

<style>
    .title-bar {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .detail-view {
        width: 50%;
        padding: 1rem;
        background: hsl(var(--muted));
        border-radius: 12px;
        box-shadow: 0 6px 20px rgba(0,0,0,0.1);
    }

    h1 {
        margin-bottom: 0.2rem;
        font-size: 2rem;
        font-weight: bold;
    }

    h2 {
        margin-bottom: 0.5rem;
        margin-top: 0.5rem;
        font-size: 1.2rem;
    }

    h3 {
        margin-bottom: 0.2rem;
        font-size: 1rem;
        font-weight: lighter;
        font-style: italic;
        margin-top: -0.5rem;

    }
</style>