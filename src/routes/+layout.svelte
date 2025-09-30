<script lang="ts">
    import "../app.css";
    import { ModeWatcher } from "mode-watcher";
    import favicon from "$lib/assets/favicon.svg";
    import { state } from "$lib/state.svelte";
    import { Button } from "$lib/components/ui/button";
    import { page } from "$app/state";

    const tabs = [
        { label: "Home", href: "/" },
        { label: "Products", href: "/products" },
        { label: "Advertising", href: "/advertising" },
        { label: "Expansion", href: "/expansion" },
        { label: "Analytics", href: "/analytics" },
        { label: "Settings", href: "/settings" },
    ];

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher />

<div class="container mx-auto flex flex-col gap-4">
    <div class="flex flex-row w-full pt-4 gap-4">
        <h1 class="text-4xl">Smasnug Factory Simulator</h1>
        {#if !(page.url.pathname === "/")}
            <div class="grow"></div>
            <div><span class="text-4xl">{$state.money}</span> Smascoins</div>
            <div><span class="text-4xl">{$state.currentDay}</span> Days</div>
        {/if}
    </div>
    <div class="flex flex-row w-full gap-2">
        {#each tabs as item}
            <Button
                variant={page.url.pathname === item.href ? "default" : "ghost"}
                href={item.href}>{item.label}</Button
            >
        {/each}
    </div>
    {@render children?.()}
</div>
