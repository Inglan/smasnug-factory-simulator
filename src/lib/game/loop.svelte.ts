import { gameState, time } from "$lib/state.svelte";
import { get } from "svelte/store";
import { getProductionPerDay } from "./factories";
import { updated } from "$app/state";
import {
  DAY_LENGTH,
  SUCCESS_RATE,
  PRODUCTS,
  TICK,
  SALE_RATE,
} from "$lib/constants";
import type { ProductTypes } from "$lib/types";

function day() {
  let updatedGameState = get(gameState);
  updatedGameState.currentDay += 1;

  gameState.set(updatedGameState);
}

export function init() {
  const tickInterval = setInterval(() => {
    let updatedGameState = get(gameState);

    if (time.tick % DAY_LENGTH === 0 && time.tick != 0) {
      day();
    }

    updatedGameState.factories.forEach((factory, factoryIndex) => {
      if (
        time.tick %
          Math.round(
            DAY_LENGTH / getProductionPerDay(factory) +
              (Math.round(Math.random() * 4) - 2),
          ) ===
          0 &&
        Math.random() < SUCCESS_RATE &&
        updatedGameState.money >= PRODUCTS[factory.type].cost &&
        !factory.paused
      ) {
        updatedGameState.products[factory.type].stock += 1;
        updatedGameState.products[factory.type].totalProduced += 1;
        updatedGameState.factories[factoryIndex].totalProduced += 1;
        updatedGameState.money -= PRODUCTS[factory.type].cost;
      }
    });

    Object.entries(updatedGameState.products).forEach(
      ([productType, product]) => {
        if (
          time.tick %
            (Math.round(
              DAY_LENGTH /
                PRODUCTS[productType as keyof typeof PRODUCTS].baseDemandPerDay,
            ) +
              (Math.round(Math.random() * 4) - 2)) ===
            0 &&
          Math.random() < SALE_RATE &&
          Math.random() < Math.sqrt(product.totalSold) / 20 + 0.05 &&
          Math.random() <
            2 **
              ((-product.sellingPrice * 6) /
                PRODUCTS[productType as keyof typeof PRODUCTS]
                  .priceThreshold) &&
          product.stock > 0
        ) {
          updatedGameState.products[productType as ProductTypes].stock -= 1;
          updatedGameState.products[productType as ProductTypes].totalSold += 1;
          updatedGameState.money +=
            updatedGameState.products[productType as ProductTypes].sellingPrice;
        }
      },
    );

    time.tick += 1;

    gameState.set(updatedGameState);
  }, TICK);

  return () => {
    clearInterval(tickInterval);
  };
}
