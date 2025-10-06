<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
    import { gameState, firstTimeDialogState } from "$lib/state.svelte";
    import * as Card from "$lib/components/ui/card/index.js";
</script>

<div class="flex flex-col gap-4 items-start">
    <a
        href="https://github.com/Inglan/smasnug-factory-simulator"
        target="_blank"
    >
        <span class="font-bold">Inglan/smasnug-factory-simulator</span>
        <br />
        <span>GPL-3.0 license</span>
    </a>

    <Button
        class="w-fit"
        onclick={() => {
            gameState.reset();
            firstTimeDialogState.reset();
            location.href = "/";
        }}>Reset progress</Button
    >
</div>
