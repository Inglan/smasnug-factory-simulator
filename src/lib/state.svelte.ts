import { persisted } from "svelte-persisted-store";

export type DeviceTypes =
  | "phone"
  | "tablet"
  | "tv"
  | "earbuds"
  | "watch"
  | "laptop";

export type Product = {
  startedProduction: boolean;
  sellingPrice: number;
  stock: number;
  totalProfit: number;
  totalSold: number;
  totalProduced: number;
};

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
      startedProduction: false,
      sellingPrice: 0,
      stock: 0,
      totalProfit: 0,
      totalSold: 0,
      totalProduced: 0,
    },
    tablet: {
      startedProduction: false,
      sellingPrice: 0,
      stock: 0,
      totalProfit: 0,
      totalSold: 0,
      totalProduced: 0,
    },
    tv: {
      startedProduction: false,
      sellingPrice: 0,
      stock: 0,
      totalProfit: 0,
      totalSold: 0,
      totalProduced: 0,
    },
    earbuds: {
      startedProduction: false,
      sellingPrice: 0,
      stock: 0,
      totalProfit: 0,
      totalSold: 0,
      totalProduced: 0,
    },
    watch: {
      startedProduction: false,
      sellingPrice: 0,
      stock: 0,
      totalProfit: 0,
      totalSold: 0,
      totalProduced: 0,
    },
    laptop: {
      startedProduction: false,
      sellingPrice: 0,
      stock: 0,
      totalProfit: 0,
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
    type: DeviceTypes;
    totalProduced: number;
    purchaseData: {
      cost: number;
      day: number;
    };
  }[];
  products: {
    phone: Product;
    tablet: Product;
    tv: Product;
    earbuds: Product;
    watch: Product;
    laptop: Product;
  };
});
