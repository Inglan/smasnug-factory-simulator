import { state } from "$lib/state.svelte";
import { get } from "svelte/store";

export function init() {
  // Day
  const dayInterval = setInterval(() => {
    state.set({ ...get(state), currentDay: get(state).currentDay + 1 });
  }, 1000 * 30);

  return () => {
    clearInterval(dayInterval);
  };
}
