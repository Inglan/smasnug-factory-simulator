<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
    import Separator from "$lib/components/ui/separator/separator.svelte";
    import { FACTORY_CONSTANTS, PRODUCTS } from "$lib/constants";
    import { buyFactory, getFactoryCost } from "$lib/game/factories";
    import { gameState } from "$lib/state.svelte";
    import type { ProductTypes } from "$lib/types";
    import clsx from "clsx";
    import SetPriceButton from "./set-price-button.svelte";
    import * as Card from "$lib/components/ui/card/index.js";

    function getProduct(productId: keyof typeof PRODUCTS) {
        return PRODUCTS[productId];
    }
</script>

<div class="grid lg:grid-cols-2 grid-cols-1 gap-4">
    {#each Object.entries($gameState.products) as [productId, product]}
        {@const productInfo = getProduct(productId as keyof typeof PRODUCTS)}
        <Card.Root
            class={clsx(
                !$gameState.factories.filter(
                    (factory) => factory.type === productId,
                ).length &&
                    "border-dashed opacity-75 hover:opacity-100 duration-300 bg-transparent",
            )}
        >
            <Card.Header class="w-full flex flex-row gap-2">
                <div class="flex flex-col">
                    <Card.Title>
                        {productInfo.name}
                    </Card.Title>
                    <Card.Description>
                        {$gameState.factories.filter(
                            (factory) => factory.type === productId,
                        ).length} factories
                    </Card.Description>
                </div>
                <div class="grow"></div>
                <div class="flex md:flex-row flex-col gap-2">
                    <Button
                        disabled={getFactoryCost(productId as ProductTypes) >
                            $gameState.money}
                        onclick={() => {
                            buyFactory(productId as ProductTypes);
                        }}
                    >
                        {#if !!$gameState.factories.filter((factory) => factory.type === productId).length}
                            Buy factory
                        {:else}
                            Start production
                        {/if}
                        (${getFactoryCost(productId as ProductTypes)})
                    </Button>
                    {#if !!$gameState.factories.filter((factory) => factory.type === productId).length}
                        <SetPriceButton {product} {productId} />
                    {/if}
                </div>
            </Card.Header>
            {#if !!$gameState.factories.filter((factory) => factory.type === productId).length}
                <Separator />
                <Card.Content class="grid grid-cols-2">
                    <div>Selling for ${product.sellingPrice}</div>
                    <div>
                        ${getProduct(productId as ProductTypes).cost} to produce
                    </div>
                    <div>{product.stock} in stock</div>
                    <div>{product.totalSold} sold</div>
                    <div>{product.totalProduced} produced</div>
                    <div>${product.totalRevenue} revenue</div>
                    <div>${product.totalCost} cost</div>
                    <div>
                        ${product.totalProfit > 0 ? product.totalProfit : 0} profit
                    </div>
                </Card.Content>
            {/if}
        </Card.Root>
    {/each}
</div>
