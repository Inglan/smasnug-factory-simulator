<script lang="ts">
    import { gameState } from "$lib/state.svelte";
</script>

<h2 class="text-2xl">Analytics</h2>

{$gameState.analytics.moneyPerDay}
