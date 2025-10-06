<script lang="ts">
    import Button, {
        buttonVariants,
    } from "$lib/components/ui/button/button.svelte";
    import Separator from "$lib/components/ui/separator/separator.svelte";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
    import { FACTORY_CONSTANTS, PRODUCTS } from "$lib/constants";
    import {
        getFactoryUpgradeCost,
        getProductionPerDay,
        upgradeFactory,
    } from "$lib/game/factories";
    import { gameState } from "$lib/state.svelte";
    import { EllipsisVertical } from "@lucide/svelte";
    import clsx from "clsx";
    import * as Card from "$lib/components/ui/card/index.js";
</script>

<div class="grid lg:grid-cols-2 grid-cols-1 gap-4">
    {#each $gameState.factories as factory, index}
        <Card.Root
            class={clsx(
                factory.paused &&
                    "border-dashed opacity-75 hover:opacity-100 duration-300 bg-transparent",
            )}
        >
            <Card.Header class="w-full flex flex-row gap-2">
                <div class="flex flex-col">
                    <Card.Title>
                        {PRODUCTS[factory.type].name}
                        factory ({index + 1})
                    </Card.Title>
                    <Card.Description>
                        Purchased on day {factory.purchaseData.day}
                    </Card.Description>
                </div>
                <div class="grow"></div>
                <div class="flex md:flex-row flex-col gap-2">
                    {#if factory.paused}
                        <Button
                            onclick={() => {
                                factory.paused = !factory.paused;
                            }}>Resume production</Button
                        >
                    {:else}
                        <Button
                            disabled={getFactoryUpgradeCost(factory) >
                                $gameState.money ||
                                factory.level >=
                                    FACTORY_CONSTANTS.upgrades.maxLevel}
                            onclick={() => {
                                upgradeFactory(index);
                            }}
                            >{factory.level >=
                            FACTORY_CONSTANTS.upgrades.maxLevel
                                ? "Reached upgrade limit"
                                : `Upgrade ($${getFactoryUpgradeCost(factory)})`}</Button
                        >
                    {/if}
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger
                            class={buttonVariants({ size: "icon" })}
                        >
                            <EllipsisVertical />
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content>
                            <DropdownMenu.Group>
                                <DropdownMenu.Label>Factory</DropdownMenu.Label>
                                <DropdownMenu.Separator />
                                <DropdownMenu.Item
                                    onSelect={() => {
                                        upgradeFactory(index);
                                    }}
                                >
                                    {factory.level >=
                                    FACTORY_CONSTANTS.upgrades.maxLevel
                                        ? "Reached upgrade limit"
                                        : `Upgrade ($${getFactoryUpgradeCost(factory)})`}
                                </DropdownMenu.Item>
                                <DropdownMenu.Item
                                    onSelect={() => {
                                        factory.paused = !factory.paused;
                                    }}
                                    >{factory.paused ? "Resume" : "Pause"} production</DropdownMenu.Item
                                >
                                <DropdownMenu.Item
                                    onSelect={() => {
                                        $gameState.factories.splice(index, 1);
                                        $gameState.money += Math.round(
                                            factory.purchaseData.value *
                                                FACTORY_CONSTANTS.sellPriceMultiplier,
                                        );
                                    }}
                                    >Sell for ${Math.round(
                                        factory.purchaseData.value *
                                            FACTORY_CONSTANTS.sellPriceMultiplier,
                                    )}</DropdownMenu.Item
                                >
                            </DropdownMenu.Group>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>
                </div>
            </Card.Header>
            <Separator />
            <Card.Content class="grid grid-cols-2 gap-2">
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
            </Card.Content>
        </Card.Root>
    {/each}
</div>
