import { FactoryConstants, Products } from "$lib/constants";
import { state } from "$lib/state.svelte";
import type { ProductTypes } from "$lib/types";
import { get } from "svelte/store";

export function buyFactory(type: ProductTypes) {
  const factoryCost = Products[type].cost * FactoryConstants.baseCostMultiplier;
  const currentState = get(state);
  if (currentState.money < factoryCost) return;
  let factories = currentState.factories;
  factories.push({
    type: type as ProductTypes,
    efficiency: 1,
    purchaseData: {
      day: currentState.currentDay,
      cost: factoryCost,
      value: factoryCost,
    },
    totalProduced: 0,
  });
  state.set({
    ...currentState,
    factories,
    money: currentState.money - factoryCost,
  });
}
