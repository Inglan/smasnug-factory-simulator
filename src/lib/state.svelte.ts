import { persisted } from "svelte-persisted-store";
import type { ProductTypes, StateProduct } from "./types";
import { Products as Product } from "./constants";

export const state = persisted("smasnug-factory-simulator-state", {
  money: 10000,
  demandMultiplier: 1,
  currentDay: 0,
  lastOnline: 0,
  analytics: {
    dailyRevenue: [],
    dailyExpenses: [],
    dailyProfit: [],
  },
  factories: [],
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
  factories: {
    efficiency: number;
    type: ProductTypes;
    totalProduced: number;
    purchaseData: {
      cost: number;
      day: number;
    };
  }[];
  products: {
    phone: StateProduct;
    tablet: StateProduct;
    tv: StateProduct;
    earbuds: StateProduct;
    watch: StateProduct;
    laptop: StateProduct;
  };
});
