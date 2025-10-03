<script lang="ts">
    import Button, {
        buttonVariants,
    } from "$lib/components/ui/button/button.svelte";
    import type { ProductTypes, StateProduct } from "$lib/types";
    import * as Dialog from "$lib/components/ui/dialog/index.js";
    import Input from "$lib/components/ui/input/input.svelte";
    import { gameState } from "$lib/state.svelte";

    let { product, productId }: { product: StateProduct; productId: string } =
        $props();

    let enteredPrice = $state() as number;
    let priceDialogOpen = $state(false);

    function updatePrice() {
        if (!(productId in $gameState.products)) return;
        if (!enteredPrice) return;
        if (!Number.isFinite(enteredPrice)) return;
        ($gameState.products as Record<string, StateProduct>)[
            productId
        ].sellingPrice = enteredPrice;

        priceDialogOpen = false;
    }
</script>

<Dialog.Root bind:open={priceDialogOpen}>
    <Dialog.Trigger class={buttonVariants()}>Set price</Dialog.Trigger>
    <Dialog.Content>
        <Dialog.Header>
            <Dialog.Title>Set price</Dialog.Title>
        </Dialog.Header>
        <div class="grid gap-4">
            <Input
                id="price"
                type="number"
                bind:value={enteredPrice}
                onkeyup={(e) => {
                    if (e.key === "Enter") updatePrice();
                }}
            />
        </div>
        <Dialog.Footer>
            <Dialog.Close class={buttonVariants({ variant: "outline" })}
                >Cancel</Dialog.Close
            >
            <Button type="submit" onclick={updatePrice}>Update</Button>
        </Dialog.Footer>
    </Dialog.Content>
</Dialog.Root>
