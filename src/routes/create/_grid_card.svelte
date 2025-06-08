<script lang="ts">
	import { Classes } from '$lib/gen/class-data';

	export let title: string
	export let subtitle: string
	export let body: string
	export let onclick: Function

</script>


	<div class="card" on:click={() => onclick()} tabindex="0" role="button" on:keydown>
		<div class="card-content ">
			<h2>{title}</h2>
			<p class="subtitle">{subtitle}</p>
			<p class="desc">{body}</p>
		</div>
	</div>


<style>
    * {
        box-sizing: border-box;
    }

    .card {
        display: block;
        aspect-ratio: 1 / 1;
        background-color: hsl(var(--secondary));
        border-radius: 12px;
        border: 1px solid hsl(var(--primary));
        color: hsl(var(--primary));
        padding: 1rem;
        text-decoration: none;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        transition: transform 0.2s, box-shadow 0.2s;
        cursor: pointer;
				overflow: auto;
    }

    .card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
				background-color: hsl(var(--secondary));
    }

    .card-content {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: start;
    }

    .card h2 {
        font-size: 1.5rem;
        font-weight: bold;
        margin: 0 0 0.5rem;
    }

    .desc {
        font-size: 0.95rem;
        line-height: 1rem;
    }

    .subtitle {
        margin-top: -15px;
        margin-bottom: 5px;
        border-bottom: 0.1rem solid hsl(var(--primary));
        font-weight: lighter;
        font-style: italic;
    }

    .card {
        overflow: auto;
        scrollbar-width: thin; /* For Firefox */
    }

    .card::-webkit-scrollbar {
        width: 6px; /* or height for horizontal */
    }

    .card::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.2); /* Soft thumb */
        border-radius: 3px;
    }

    .card::-webkit-scrollbar-track {
        background: transparent;
    }

</style>