import { PRODUCTS } from "$lib/constants";
import { gameState } from "$lib/state.svelte";
import type { ProductTypes } from "$lib/types";
import { get } from "svelte/store";

export function getProduct(productId: ProductTypes) {
  return {
    ...get(gameState).products[productId],
    ...PRODUCTS[productId],
  };
}
