import { state } from "$lib/state.svelte";
import type { ProductTypes } from "$lib/types";
import { get } from "svelte/store";

export function buyFactory(type: ProductTypes) {
  const currentState = get(state);
  let factories = currentState.factories;
  factories.push({
    type: type as ProductTypes,
    efficiency: 1,
    purchaseData: {
      day: currentState.currentDay,
      cost: 1,
      value: 1,
    },
    totalProduced: 0,
  });
  state.set({ ...currentState, factories });
}
