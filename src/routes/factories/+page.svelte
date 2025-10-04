<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
    import Separator from "$lib/components/ui/separator/separator.svelte";
    import { FACTORY_CONSTANTS, PRODUCTS } from "$lib/constants";
    import {
        getFactoryUpgradeCost,
        getProductionPerDay,
        upgradeFactory,
    } from "$lib/game/factories";
    import { getProduct } from "$lib/game/utils";
    import { gameState } from "$lib/state.svelte";
    import type { ProductTypes } from "$lib/types";
    import { Smartphone } from "@lucide/svelte";
    import clsx from "clsx";
</script>

<div class="grid lg:grid-cols-2 grid-cols-1 gap-4">
    {#each $gameState.factories as factory, index}
        <div
            class={clsx(
                "flex flex-col bg-card border rounded-md p-4 gap-2",
                factory.paused &&
                    "border-dashed opacity-75 hover:opacity-100 duration-300 bg-transparent",
            )}
        >
            <div class="w-full flex flex-row gap-2">
                <div class="flex flex-col">
                    <h2 class="text-2xl">
                        {PRODUCTS[factory.type].name}
                        factory ({index + 1})
                    </h2>
                    <h3 class="text-md">
                        Purchased on day {factory.purchaseData.day}
                    </h3>
                </div>
                <div class="grow"></div>
                <Button
                    onclick={() => {
                        $gameState.factories.splice(index, 1);
                        $gameState.money += factory.purchaseData.value / 4;
                    }}>Sell ({factory.purchaseData.value / 4})</Button
                >
                <Button
                    onclick={() => {
                        factory.paused = !factory.paused;
                    }}>{factory.paused ? "Resume" : "Pause"} production</Button
                >
                <Button
                    disabled={getFactoryUpgradeCost(factory) >
                        $gameState.money ||
                        factory.level >= FACTORY_CONSTANTS.upgrades.maxLevel}
                    onclick={() => {
                        upgradeFactory(index);
                    }}
                    >{factory.level >= FACTORY_CONSTANTS.upgrades.maxLevel
                        ? "Reached upgrade limit"
                        : `Upgrade ($${getFactoryUpgradeCost(factory)})`}</Button
                >
            </div>
            <div class="grid grid-cols-2 gap-2">
                <div>
                    Cost: ${factory.purchaseData.cost}
                </div>
                <div>
                    Value: ${factory.purchaseData.value}
                </div>
                <div>
                    {factory.totalProduced} produced
                </div>
                <div>
                    {getProductionPerDay(factory)} produced per day
                </div>
            </div>
        </div>
    {/each}
</div>
