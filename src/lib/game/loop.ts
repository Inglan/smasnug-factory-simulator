import { gameState } from "$lib/state.svelte";
import { get } from "svelte/store";

export function init() {
  // Day
  const dayInterval = setInterval(() => {
    const currentGameState = get(gameState);
    gameState.set({
      ...currentGameState,
      currentDay: currentGameState.currentDay + 1,
    });
  }, 1000 * 30);

  return () => {
    clearInterval(dayInterval);
  };
}
