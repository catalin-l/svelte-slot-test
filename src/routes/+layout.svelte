<script lang="ts">
	import '../app.css';
	import { useLayoutSlots } from './layout-slots.svelte';

	let { children } = $props();
	const slots = useLayoutSlots();

	$inspect(slots.sidebar);
</script>

<div class="p-8">
	{@render slots.sidebar?.()}
	<div class="h-1 w-full bg-red-500"></div>
	{@render children()}
</div>
