<script lang="ts">
    import "../app.css";
    import { ModeWatcher } from "mode-watcher";
    import favicon from "$lib/assets/favicon.svg";
    import { gameState } from "$lib/state.svelte";
    import { Button } from "$lib/components/ui/button";
    import { page } from "$app/state";
    import { init } from "$lib/game/loop.svelte";
    import {
        House,
        Smartphone,
        Megaphone,
        ChartLine,
        Settings,
        Factory,
    } from "@lucide/svelte";
    import { Toaster } from "$lib/components/ui/sonner/index.js";

    onMount(init);

    const tabs = $derived(
        [
            { label: "Home", href: "/", icon: House },
            { label: "Products", href: "/products", icon: Smartphone },
            $gameState.factories.length > 0 && {
                label: "Factories",
                href: "/factories",
                icon: Factory,
            },
            $gameState.factories.length > 0 && {
                label: "Advertising",
                href: "/advertising",
                icon: Megaphone,
            },
            { label: "Settings", href: "/settings", icon: Settings },
        ].filter(Boolean),
    ) as Array<{ label: string; href: string; icon: any }>;

    import {
        blur,
        crossfade,
        draw,
        fade,
        fly,
        scale,
        slide,
    } from "svelte/transition";
    import { expoOut } from "svelte/easing";
    import Separator from "$lib/components/ui/separator/separator.svelte";
    import { onMount } from "svelte";

    let { children } = $props();
</script>

<svelte:head>
    <title>Smasnug Factory Simulator</title>
    <link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher />

<Toaster position="top-center" />

<div class="container mx-auto flex flex-col gap-4 p-4">
    <div class="flex flex-col md:flex-row w-full gap-4">
        <h1 class="text-4xl">Smasnug Factory Simulator</h1>
        <div class="grow md:block hidden"></div>
        <div class="flex flex-row gap-4">
            <div>
                <span class="text-4xl">${$gameState.money}</span>
            </div>
            <Separator orientation="vertical" />
            <div>
                <span class="text-4xl">Day {$gameState.currentDay}</span>
            </div>
        </div>
    </div>
    <div class="flex flex-row w-full gap-2 flex-wrap">
        {#each tabs as item}
            <Button
                variant={page.url.pathname === item.href ? "default" : "ghost"}
                href={item.href}
            >
                <item.icon />
                {item.label}</Button
            >
        {/each}
    </div>
    {#key page.url.pathname}
        <main
            in:fly={{ duration: 300, x: 10, delay: 300, easing: expoOut }}
            out:fly={{ duration: 300, x: -10, easing: expoOut }}
        >
            {@render children?.()}
        </main>
    {/key}
</div>
