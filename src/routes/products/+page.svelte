<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
    import Separator from "$lib/components/ui/separator/separator.svelte";
    import { Products } from "$lib/constants";
    import { state } from "$lib/state.svelte";
    import type { ProductTypes } from "$lib/types";
    import clsx from "clsx";

    function getProduct(productId: keyof typeof Products) {
        return Products[productId];
    }
</script>

<div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
    {#each Object.entries($state.products) as [productId, product]}
        {@const productInfo = getProduct(productId as keyof typeof Products)}
        <div
            class={clsx(
                "flex flex-col bg-card border rounded-md p-4 gap-2",
                !$state.factories.filter(
                    (factory) => factory.type === productId,
                ).length &&
                    "border-dashed opacity-75 hover:opacity-100 duration-300",
            )}
        >
            <div class="w-full flex flex-row gap-2">
                <div class="flex flex-col">
                    <h2 class="text-2xl">
                        {productInfo.name}
                    </h2>
                    <h3 class="text-md">
                        {$state.factories.filter(
                            (factory) => factory.type === productId,
                        ).length} factories
                    </h3>
                </div>
                <div class="grow"></div>
                {#if !!$state.factories.filter((factory) => factory.type === productId).length}
                    <Button
                        onclick={() => {
                            let factories = $state.factories;
                            factories.push({
                                type: productId as ProductTypes,
                                efficiency: 1,
                                purchaseData: {
                                    day: $state.currentDay,
                                    cost: 1,
                                },
                                totalProduced: 0,
                            });
                            $state.factories = factories;
                        }}>Buy factory</Button
                    >
                    <Button>Set price</Button>
                {:else}
                    <Button
                        onclick={() => {
                            let factories = $state.factories;
                            factories.push({
                                type: productId as ProductTypes,
                                efficiency: 1,
                                purchaseData: {
                                    day: $state.currentDay,
                                    cost: 1,
                                },
                                totalProduced: 0,
                            });
                            $state.factories = factories;
                        }}
                    >
                        Start Production
                    </Button>
                {/if}
            </div>
            {#if !!$state.factories.filter((factory) => factory.type === productId).length}
                <Separator />
                <div class="grid grid-cols-2">
                    <div>Selling for ${product.sellingPrice}</div>
                    <div>{product.stock} in stock</div>
                    <div>{product.totalSold} sold</div>
                    <div>{product.totalProduced} produced</div>
                    <div>${product.totalRevenue} revenue</div>
                    <div>${product.totalProfit} profit</div>
                </div>
            {/if}
        </div>
    {/each}
</div>
