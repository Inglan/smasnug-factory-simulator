export type ProductTypes =
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
  totalRevenue: number;
  totalProfit: number;
  totalSold: number;
  totalProduced: number;
};
