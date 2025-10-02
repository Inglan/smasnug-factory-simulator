<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
    import Separator from "$lib/components/ui/separator/separator.svelte";
    import { Products } from "$lib/constants";
    import { state } from "$lib/state.svelte";
    import type { ProductTypes } from "$lib/types";
    import { Smartphone } from "@lucide/svelte";
    import clsx from "clsx";
</script>

<div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
    {#each $state.factories as factory, index}
        <div class={clsx("flex flex-col bg-card border rounded-md p-4 gap-2")}>
            <div class="w-full flex flex-row gap-2">
                <div class="flex flex-col">
                    <h2 class="text-2xl">
                        Factory {index + 1}
                    </h2>
                    <h3 class="text-md">
                        Purchased on day {factory.purchaseData.day} for ${factory
                            .purchaseData.cost}
                    </h3>
                </div>
                <div class="grow"></div>
                <Button
                    onclick={() => {
                        $state.factories[index].efficiency +=
                            factory.efficiency * 0.1;
                    }}>Upgrade</Button
                >
            </div>
            <div class="grid grid-cols-2 gap-2">
                <div class="inline-flex flex-row gap-1 items-center">
                    <Smartphone class="size-5" />
                    {Products[factory.type].name}
                </div>
                <div>
                    {factory.efficiency.toPrecision(3)}x efficiency
                </div>
                <div>
                    {factory.totalProduced} produced
                </div>
            </div>
        </div>
    {/each}
</div>
