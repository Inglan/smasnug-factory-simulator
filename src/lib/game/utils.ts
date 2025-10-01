import { Products } from "$lib/constants";
import { state } from "$lib/state.svelte";
import type { ProductTypes } from "$lib/types";
import { get } from "svelte/store";

export function getProduct(productId: ProductTypes) {
  return {
    ...get(state).products[productId],
    ...Products[productId],
  };
}
