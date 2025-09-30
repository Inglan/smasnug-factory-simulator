<script lang="ts">
    import "../app.css";
    import { ModeWatcher } from "mode-watcher";
    import favicon from "$lib/assets/favicon.svg";
    import { state } from "$lib/state.svelte";
    import { Button } from "$lib/components/ui/button";

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher />

<div class="container mx-auto flex flex-col gap-4">
    <div class="flex flex-row w-full pt-4 gap-4">
        <h1 class="text-4xl">Smasnug Factory Simulator</h1>
        <div class="grow"></div>
        <div><span class="text-4xl">{$state.money}</span> Smascoins</div>
        <div><span class="text-4xl">{$state.currentDay}</span> Days</div>
    </div>
    <div class="flex flex-row w-full gap-2">
        <Button variant="default">Products</Button>
        <Button variant="ghost">Advertising</Button>
        <Button variant="ghost">Expansion</Button>
        <Button variant="ghost">Analytics</Button>
    </div>
    {@render children?.()}
</div>
