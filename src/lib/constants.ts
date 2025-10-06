import type { ConstantProduct } from "./types";

export const PRICE_THRESHOLD_MULTIPLIER = 5;

export const PRODUCTS = {
  phone: {
    name: "Galoxy",
    cost: 300,
    baseDemandPerDay: 100,
    productionPerFactoryPerDay: 50,
    priceThreshold: 900 * PRICE_THRESHOLD_MULTIPLIER,
  },
  tablet: {
    name: "Galoxy Tab",
    cost: 400,
    baseDemandPerDay: 20,
    productionPerFactoryPerDay: 10,
    priceThreshold: 1200 * PRICE_THRESHOLD_MULTIPLIER,
  },
  tv: {
    name: "The Frome",
    cost: 1000,
    baseDemandPerDay: 5,
    productionPerFactoryPerDay: 2,
    priceThreshold: 3000 * PRICE_THRESHOLD_MULTIPLIER,
  },
  earbuds: {
    name: "Buds",
    cost: 100,
    baseDemandPerDay: 20,
    productionPerFactoryPerDay: 10,
    priceThreshold: 300 * PRICE_THRESHOLD_MULTIPLIER,
  },
  watch: {
    name: "Watch",
    cost: 200,
    baseDemandPerDay: 20,
    productionPerFactoryPerDay: 10,
    priceThreshold: 600 * PRICE_THRESHOLD_MULTIPLIER,
  },
  laptop: {
    name: "Galoxy Book",
    cost: 800,
    baseDemandPerDay: 20,
    productionPerFactoryPerDay: 5,
    priceThreshold: 2400 * PRICE_THRESHOLD_MULTIPLIER,
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
  sellPriceMultiplier: 0.25,
};

export const ADVERTISING_CONSTANTS = {
  maxEffectiveBudget: 1000000, // max budget that affects the formula
  formulaDivisor: 100000, // what ad budget is divided by
  // formula: sqrt(min(Ad budget, maxBudgetForFormula) / formulaDivisor)
};

export const TICK = 100;
export const DAY_LENGTH = 300;
export const SUCCESS_RATE = 0.9;
export const SALE_RATE = 0.9;
