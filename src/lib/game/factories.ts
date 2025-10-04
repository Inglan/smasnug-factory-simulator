import { FACTORY_CONSTANTS, PRODUCTS } from "$lib/constants";
import { gameState } from "$lib/state.svelte";
import type { Factory, ProductTypes } from "$lib/types";
import { get } from "svelte/store";

export function getFactoryCost(type: ProductTypes) {
  const currentState = get(gameState);
  const productCost = PRODUCTS[type].cost;
  const factoryCount = currentState.factories.filter(
    (factory) => factory.type === type,
  ).length;
  const factoryCostMultiplier =
    FACTORY_CONSTANTS.baseCostMultiplier *
    FACTORY_CONSTANTS.baseCostMultiplierPerFactory ** factoryCount;

  return Math.round(productCost * factoryCostMultiplier);
}

export function buyFactory(type: ProductTypes) {
  const factoryCost =
    PRODUCTS[type].cost * FACTORY_CONSTANTS.baseCostMultiplier;
  const currentState = get(gameState);
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
  gameState.set({
    ...currentState,
    factories,
    money: currentState.money - factoryCost,
  });
}

export function getFactoryUpgradeCost(factory: Factory) {
  const calculatedPrice =
    FACTORY_CONSTANTS.upgrades.costIncrease ** (factory.level + 1) *
    factory.purchaseData.cost;
  return Math.round(calculatedPrice);
}

export function upgradeFactory(index: number) {
  const currentState = get(gameState);
  const upgradeCost = getFactoryUpgradeCost(currentState.factories[index]);
  if (currentState.money < upgradeCost) return;
  if (
    currentState.factories[index].level >= FACTORY_CONSTANTS.upgrades.maxLevel
  )
    return;
  let factories = currentState.factories;
  factories[index].level++;
  factories[index].purchaseData.value += upgradeCost;
  gameState.set({
    ...currentState,
    factories,
    money: currentState.money - upgradeCost,
  });
}

export function getProductionPerDay(factory: Factory) {
  const calculatedProducedPerDay =
    FACTORY_CONSTANTS.upgrades.efficiencyIncrease ** factory.level *
    PRODUCTS[factory.type as ProductTypes].productionPerFactoryPerDay;
  return Math.round(calculatedProducedPerDay);
}
