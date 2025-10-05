export type ProductTypes =
  | "phone"
  | "tablet"
  | "tv"
  | "earbuds"
  | "watch"
  | "laptop";

export type StateProduct = {
  sellingPrice: number;
  stock: number;
  totalRevenue: number;
  totalCost: number;
  totalProfit: number;
  totalSold: number;
  totalProduced: number;
};

export type ConstantProduct = {
  name: string;
  cost: number;
  baseDemandPerDay: number;
  productionPerFactoryPerDay: number;
  costToStart: number;
  priceThreshold: number;
};

export type Factory = {
  level: number;
  type: ProductTypes;
  totalProduced: number;
  paused: boolean;
  purchaseData: {
    cost: number;
    day: number;
    value: number;
  };
};

export type Campaign = {
  budget: number;
  totalRunningDays: number;
  daysElapsed: number;
};
