<script lang="ts">
	import { toast } from "svelte-sonner";

	export let title: string;
	export let description: string

	let copied = false;
	let timeout: NodeJS.Timeout;

	function copyToClipboard() {
			const text = `${title}\n${description}`
			navigator.clipboard.writeText(text).then(() => {
				toast(`Copied ${title} to clipboard`)
				copied = true;
				clearTimeout(timeout);
				timeout = setTimeout(() => copied = false, 1500);
			});
	}
</script>

<section class="section-container">
	<div class="section-header">
		<div>
			<h3>{title}</h3>
			{#if description}
				<p class="section-description">{description}</p>
			{/if}
		</div>
		<button class="copy-button" on:click={copyToClipboard} aria-label="Copy section content">
			{#if copied}
				<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
					<path d="M5 13l4 4L19 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			{:else}
				<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
					<rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			{/if}
		</button>
	</div>
</section>

<style>
    .icon {
        width: 18px;
        height: 18px;
        stroke-width: 2;
    }

    .section-container {
        background: hsl(var(--background));
        border-left: 3px solid hsl(var(--primary));
        padding: 0.75rem 1rem;
        margin-bottom: 1rem;
        position: relative;
    }

    .section-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    .section-header h3 {
        font-size: 1rem;
        font-weight: 500;
        margin: 0 0 0.25rem 0;
        color: hsl(var(--foreground));
    }

    .section-description {
        margin: 0;
        font-size: 0.85rem;
        color: hsl(var(--muted-foreground));
    }

    .section-content {
        margin-top: 0.5rem;
    }

    .copy-button {
        background: transparent;
        border: none;
        font-size: 0.85rem;
        color: hsl(var(--muted-foreground));
        cursor: pointer;
        padding: 0;
        margin-left: 0.5rem;
        transition: opacity 0.2s;
    }

    .copy-button:hover {
        color: hsl(var(--primary));
    }
</style>
