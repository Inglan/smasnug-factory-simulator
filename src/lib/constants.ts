import type { ConstantProduct } from "./types";

export const PRODUCTS = {
  phone: {
    name: "Galoxy",
    cost: 300,
    baseDemandPerDay: 100,
    productionPerFactoryPerDay: 50,
  },
  tablet: {
    name: "Galoxy Tab",
    cost: 400,
    baseDemandPerDay: 20,
    productionPerFactoryPerDay: 10,
  },
  tv: {
    name: "The Frome",
    cost: 1000,
    baseDemandPerDay: 5,
    productionPerFactoryPerDay: 2,
  },
  earbuds: {
    name: "Buds",
    cost: 100,
    baseDemandPerDay: 20,
    productionPerFactoryPerDay: 10,
  },
  watch: {
    name: "Watch",
    cost: 200,
    baseDemandPerDay: 20,
    productionPerFactoryPerDay: 10,
  },
  laptop: {
    name: "Galoxy Book",
    cost: 800,
    baseDemandPerDay: 10,
    productionPerFactoryPerDay: 5,
  },
} as {
  phone: ConstantProduct;
  tablet: ConstantProduct;
  tv: ConstantProduct;
  earbuds: ConstantProduct;
  watch: ConstantProduct;
  laptop: ConstantProduct;
};

export const FACTORY_CONSTANTS = {
  baseCostMultiplier: 20, // Used to calculate cost, based off cost of product
  baseCostMultiplierPerFactory: 2,
  baseEfficiency: 1.0,
  upgrades: {
    costIncrease: 1.1,
    efficiencyIncrease: 1.1,
    maxLevel: 10,
  },
};

export const DEMAND_CONSTANTS = {
  maxDemandMultiplier: 5, // Cannot exceed 5x
  baseDemandMultiplier: 1,
};

export const ADVERTISING_CONSTANTS = {
  maxEffectiveBudget: 1000000, // max budget that affects the formula
  formulaDivisor: 100000, // what ad budget is divided by
  // formula: sqrt(min(Ad budget, maxBudgetForFormula) / formulaDivisor)
};

export const TICK = 100;
export const DAY_LENGTH = 300;
