<script lang="ts">
    import Button, {
        buttonVariants,
    } from "$lib/components/ui/button/button.svelte";
    import type { StateProduct } from "$lib/types";
    import * as Dialog from "$lib/components/ui/dialog/index.js";
    import Input from "$lib/components/ui/input/input.svelte";
    import { gameState } from "$lib/state.svelte";

    let { product }: { product: StateProduct } = $props();

    let enteredPrice = $state(0);
</script>

<Dialog.Root open={true}>
    <Dialog.Trigger class={buttonVariants()}>Set price</Dialog.Trigger>
    <Dialog.Content>
        <form
            onsubmit={(e) => {
                e.preventDefault();
                if (enteredPrice !== product.sellingPrice) {
                    // $state.products[product.id].sellingPrice = enteredPrice;
                    alert(`Price updated to ${enteredPrice}`);
                }
            }}
            class="gap-4 grid"
        >
            <Dialog.Header>
                <Dialog.Title>Set price</Dialog.Title>
            </Dialog.Header>
            <div class="grid gap-4">
                <Input
                    id="price"
                    type="number"
                    bind:value={enteredPrice}
                    class="col-span-3"
                />
            </div>
            <Dialog.Footer>
                <Dialog.Close class={buttonVariants({ variant: "outline" })}
                    >Cancel</Dialog.Close
                >
                <Button type="submit">Update</Button>
            </Dialog.Footer>
        </form>
    </Dialog.Content>
</Dialog.Root>
