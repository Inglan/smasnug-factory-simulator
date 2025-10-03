import { persisted } from "svelte-persisted-store";
import type { Campaign, Factory, ProductTypes, StateProduct } from "./types";
import { Products as Product } from "./constants";

export const gameState = persisted("smasnug-factory-simulator-state", {
  money: 100,
  demandMultiplier: 1,
  currentDay: 0,
  lastOnline: 0,
  analytics: {
    dailyRevenue: [],
    dailyExpenses: [],
    dailyProfit: [],
  },
  factories: [
    {
      level: 0,
      purchaseData: {
        day: 0,
        cost: 6000,
        value: 6000,
      },
      totalProduced: 0,
      type: "phone",
    },
  ],
  products: {
    phone: {
      sellingPrice: 0,
      stock: 0,
      totalProfit: 0,
      totalRevenue: 0,
      totalSold: 0,
      totalProduced: 0,
    },
    tablet: {
      sellingPrice: 0,
      stock: 0,
      totalProfit: 0,
      totalRevenue: 0,
      totalSold: 0,
      totalProduced: 0,
    },
    tv: {
      sellingPrice: 0,
      stock: 0,
      totalProfit: 0,
      totalRevenue: 0,
      totalSold: 0,
      totalProduced: 0,
    },
    earbuds: {
      sellingPrice: 0,
      stock: 0,
      totalProfit: 0,
      totalRevenue: 0,
      totalSold: 0,
      totalProduced: 0,
    },
    watch: {
      sellingPrice: 0,
      stock: 0,
      totalProfit: 0,
      totalRevenue: 0,
      totalSold: 0,
      totalProduced: 0,
    },
    laptop: {
      sellingPrice: 0,
      stock: 0,
      totalProfit: 0,
      totalRevenue: 0,
      totalSold: 0,
      totalProduced: 0,
    },
  },
  campaigns: [],
} as {
  money: number;
  demandMultiplier: number;
  currentDay: number;
  lastOnline: number;
  analytics: {
    dailyRevenue: number[];
    dailyExpenses: number[];
    dailyProfit: number[];
  };
  factories: Factory[];
  products: {
    phone: StateProduct;
    tablet: StateProduct;
    tv: StateProduct;
    earbuds: StateProduct;
    watch: StateProduct;
    laptop: StateProduct;
  };
  campaigns: Campaign[];
});
