<script lang="ts">
	import * as Table from "$lib/components/ui/table/index.js";
	import { Checkbox } from "$lib/components/ui/checkbox/index.js";
	import { currentCharacter} from '$lib/stores/selections';

	let {caption, columns, data, sourceData = $bindable(), updateFn, field, disabled=false} = $props()

</script>

<Table.Root class="w-full">
	<Table.Caption>{caption}</Table.Caption>
	<Table.Header>
		<Table.Row>
			{#each columns as c}
				<Table.Head>{c}</Table.Head>
			{/each}
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each data as row, i}
		<Table.Row>
			{#each Object.entries(row) as [_, v]}
				{#if typeof v === "boolean"}
					<Table.Cell class="flex items-center justify-left ml-5">
					<Checkbox checked={$currentCharacter[field]?.name === sourceData[i].name} onCheckedChange={(checked) => {
						checked ? updateFn(sourceData[i]) : updateFn(null)
					}} disabled={disabled || !!!$currentCharacter.subclass ||
					($currentCharacter.burden + sourceData[i].burden > $currentCharacter.max_burden ||
					!!$currentCharacter[field]) && $currentCharacter[field]?.name !== sourceData[i].name }/>
					</Table.Cell>
				{:else}
					<Table.Cell class="font-medium">{v}</Table.Cell>
				{/if}
			{/each}
		</Table.Row>
			{/each}
	</Table.Body>
</Table.Root>