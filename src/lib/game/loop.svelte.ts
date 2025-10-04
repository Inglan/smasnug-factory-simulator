import { gameState, time } from "$lib/state.svelte";
import { get } from "svelte/store";
import { getProductionPerDay } from "./factories";
import { updated } from "$app/state";
import { DAY_LENGTH, FAILURE_RATE, PRODUCTS, TICK } from "$lib/constants";

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
          (DAY_LENGTH / getProductionPerDay(factory) +
            (Math.round(Math.random() * 4) - 2)) ===
          0 &&
        Math.random() < FAILURE_RATE &&
        updatedGameState.money >= PRODUCTS[factory.type].cost &&
        !factory.paused
      ) {
        updatedGameState.products[factory.type].stock += 1;
        updatedGameState.products[factory.type].totalProduced += 1;
        updatedGameState.factories[factoryIndex].totalProduced += 1;
        updatedGameState.money -= PRODUCTS[factory.type].cost;
      }
    });

    time.tick += 1;

    gameState.set(updatedGameState);
  }, TICK);

  return () => {
    clearInterval(tickInterval);
  };
}
