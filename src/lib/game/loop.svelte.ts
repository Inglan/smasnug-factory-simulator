import { gameState, time } from "$lib/state.svelte";
import { get } from "svelte/store";
import { getProductionPerDay } from "./factories";
import { updated } from "$app/state";
import { PRODUCTS, TICK } from "$lib/constants";

function day() {
  let updatedGameState = get(gameState);

  updatedGameState.factories.forEach((factory, factoryIndex) => {
    for (let i = 0; i < getProductionPerDay(factory); i++) {
      if (updatedGameState.money >= PRODUCTS[factory.type].cost) {
        updatedGameState.products[factory.type].stock += 1;
        updatedGameState.factories[factoryIndex].totalProduced += 1;
        updatedGameState.money -= PRODUCTS[factory.type].cost;
      }
    }
  });

  updatedGameState.currentDay += 1;

  gameState.set(updatedGameState);
}

export function init() {
  const tickInterval = setInterval(() => {
    if (time.tick % 300 === 0 && time.tick != 0) {
      day();
    }

    time.tick += 1;
  }, TICK);

  return () => {
    clearInterval(tickInterval);
  };
}
