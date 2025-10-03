import { FactoryConstants, Products } from "$lib/constants";
import { state } from "$lib/state.svelte";
import type { Factory, ProductTypes } from "$lib/types";
import { get } from "svelte/store";

export function getFactoryCost(type: ProductTypes) {
  const currentState = get(state);
  const productCost = Products[type].cost;
  const factoryCount = currentState.factories.filter(
    (factory) => factory.type === type,
  ).length;
  const factoryCostMultiplier =
    FactoryConstants.baseCostMultiplier +
    FactoryConstants.baseCostMultiplierPerFactory * factoryCount;

  return Math.round(productCost * factoryCostMultiplier);
}

export function getFactoryUpgradeCost(factory: Factory) {
  const calculatedPrice =
    FactoryConstants.upgrades.costIncrease ** (factory.level + 1) *
    factory.purchaseData.cost;
  return Math.round(calculatedPrice);
}

export function buyFactory(type: ProductTypes) {
  const factoryCost = Products[type].cost * FactoryConstants.baseCostMultiplier;
  const currentState = get(state);
  if (currentState.money < factoryCost) return;
  let factories = currentState.factories;
  factories.push({
    type: type as ProductTypes,
    level: 0,
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
