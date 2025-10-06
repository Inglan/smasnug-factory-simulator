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
        <Card.Root class="w-96">
            <Card.Header>
                <Card.Title>Inglan/smasnug-factory-simulator</Card.Title>
                <Card.Description>GPL-3.0 license</Card.Description>
            </Card.Header>
        </Card.Root>
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
