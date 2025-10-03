import { gameState } from "$lib/state.svelte";
import { get } from "svelte/store";

export function init() {
  // Day
  const dayInterval = setInterval(() => {
    gameState.set({
      ...get(gameState),
      currentDay: get(gameState).currentDay + 1,
    });
  }, 1000 * 30);

  return () => {
    clearInterval(dayInterval);
  };
}
