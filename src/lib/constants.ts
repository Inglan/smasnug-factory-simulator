import type { ConstantProduct } from "./types";

export const Products = {
  phone: {
    name: "Galoxy",
    cost: 300,
    baseDemandPerDay: 100,
    productionPerFactoryPerDay: 50,
    costToStart: 1000,
  },
  tablet: {
    name: "Galoxy Tab",
    cost: 400,
    baseDemandPerDay: 20,
    productionPerFactoryPerDay: 10,
    costToStart: 100000,
  },
  tv: {
    name: "The Frome",
    cost: 1000,
    baseDemandPerDay: 5,
    productionPerFactoryPerDay: 2,
    costToStart: 1000000,
  },
  earbuds: {
    name: "Buds",
    cost: 100,
    baseDemandPerDay: 20,
    productionPerFactoryPerDay: 10,
    costToStart: 10000,
  },
  watch: {
    name: "Watch",
    cost: 200,
    baseDemandPerDay: 20,
    productionPerFactoryPerDay: 10,
    costToStart: 10000,
  },
  laptop: {
    name: "Galoxy Book",
    cost: 800,
    baseDemandPerDay: 10,
    productionPerFactoryPerDay: 5,
    costToStart: 100000,
  },
} as {
  phone: ConstantProduct;
  tablet: ConstantProduct;
  tv: ConstantProduct;
  earbuds: ConstantProduct;
  watch: ConstantProduct;
  laptop: ConstantProduct;
};

export const FactoryConstants = {
  baseCostMultiplier: 20, // Used to calculate cost, based off cost of product
  baseCostMultiplierPerFactory: 2,
  baseEfficiency: 1.0,
  upgrades: {
    costIncrease: 1.1,
    efficiencyIncrease: 1.1,
    maxLevel: 10,
  },
};

export const DemandConstants = {
  maxDemandMultiplier: 5, // Cannot exceed 5x
  baseDemandMultiplier: 1,
};

export const AdvertisingConstants = {
  maxEffectiveBudget: 1000000, // max budget that affects the formula
  formulaDivisor: 100000, // what ad budget is divided by
  // formula: sqrt(min(Ad budget, maxBudgetForFormula) / formulaDivisor)
};
