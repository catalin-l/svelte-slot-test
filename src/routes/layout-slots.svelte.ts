import { getContext, setContext, type Snippet } from 'svelte';

const key = Symbol('layout-slots');

interface SlotContext {
	sidebar?: Snippet;
	toolbar?: Snippet;
}

export function useLayoutSlots() {
	const slots: SlotContext = $state({
		sidebar: undefined,
		toolbar: undefined
	});
	return setContext(key, slots);
}

export function useSlots(slots: Partial<SlotContext>) {
	const context = getContext<SlotContext>(key);
	if (context) Object.assign<SlotContext, Partial<SlotContext>>(context, slots);
}

export function clearSlots() {
	const context = getContext<SlotContext>(key);
	if (context)
		Object.assign<SlotContext, Partial<SlotContext>>(context, {
			sidebar: undefined,
			toolbar: undefined
		});
	else console.warn("Couldn't clear slots due to missing context");
}

export function useSidebarSlot(sidebar: Snippet) {
	const context = getContext<SlotContext>(key);
	if (context) Object.assign<SlotContext, Partial<SlotContext>>(context, { sidebar });
}

export function clearSidebarSlot() {
	const context = getContext<SlotContext>(key);
	if (context) Object.assign<SlotContext, Partial<SlotContext>>(context, { sidebar: undefined });
}

export function useToolbarSlot(toolbar: Snippet) {
	const context = getContext<SlotContext>(key);
	if (context) Object.assign<SlotContext, Partial<SlotContext>>(context, { toolbar });
}

export function clearToolbarSlot() {
	const context = getContext<SlotContext>(key);
	if (context) Object.assign<SlotContext, Partial<SlotContext>>(context, { toolbar: undefined });
}
