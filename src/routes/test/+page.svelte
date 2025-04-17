<script lang="ts">
	import { useSlots } from '../layout-slots.svelte';

	useSlots({ sidebar });

	const value = $state('value');
</script>

{#snippet sidebar()}
	<div class="text-red-500">This is a sidebar with value: {value}</div>
{/snippet}

This is the test page
