import { persisted } from "svelte-persisted-store";
import type { Campaign, Factory, ProductTypes, StateProduct } from "./types";
import { PRODUCTS as Product } from "./constants";

export const gameState = persisted("smasnug-factory-simulator-state", {
  money: 10000,
  currentDay: 0,
  lastOnline: 0,
  analytics: {
    revenueToday: 0,
    expensesToday: 0,
    profitToday: 0,
    dailyRevenue: [],
    dailyExpenses: [],
    dailyProfit: [],
    moneyPerDay: [],
  },
  factories: [],
  products: {
    phone: {
      sellingPrice: 900,
      stock: 0,
      totalProfit: 0,
      totalRevenue: 0,
      totalCost: 0,
      totalSold: 0,
      totalProduced: 0,
    },
    tablet: {
      sellingPrice: 1200,
      stock: 0,
      totalProfit: 0,
      totalRevenue: 0,
      totalCost: 0,
      totalSold: 0,
      totalProduced: 0,
    },
    tv: {
      sellingPrice: 3000,
      stock: 0,
      totalProfit: 0,
      totalRevenue: 0,
      totalCost: 0,
      totalSold: 0,
      totalProduced: 0,
    },
    earbuds: {
      sellingPrice: 300,
      stock: 0,
      totalProfit: 0,
      totalRevenue: 0,
      totalCost: 0,
      totalSold: 0,
      totalProduced: 0,
    },
    watch: {
      sellingPrice: 600,
      stock: 0,
      totalProfit: 0,
      totalRevenue: 0,
      totalCost: 0,
      totalSold: 0,
      totalProduced: 0,
    },
    laptop: {
      sellingPrice: 2400,
      stock: 0,
      totalProfit: 0,
      totalRevenue: 0,
      totalCost: 0,
      totalSold: 0,
      totalProduced: 0,
    },
  },
  campaigns: [],
} as {
  money: number;
  currentDay: number;
  lastOnline: number;
  analytics: {
    revenueToday: number;
    expensesToday: number;
    profitToday: number;
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

export let time = $state({ tick: 0 });
