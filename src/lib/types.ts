export type ProductTypes =
  | "phone"
  | "tablet"
  | "tv"
  | "earbuds"
  | "watch"
  | "laptop";

export type StateProduct = {
  startedProduction: boolean;
  sellingPrice: number;
  stock: number;
  totalRevenue: number;
  totalProfit: number;
  totalSold: number;
  totalProduced: number;
  product: ConstantProduct;
};

export type ConstantProduct = {
  name: string;
  cost: number;
  baseDemandPerDay: number;
  productionPerFactoryPerDay: number;
  costToStart: number;
};
