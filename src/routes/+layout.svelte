<script lang="ts">
    import "../app.css";
    import { ModeWatcher } from "mode-watcher";
    import favicon from "$lib/assets/favicon.svg";
    import { firstTimeDialogState, gameState } from "$lib/state.svelte";
    import { Button, buttonVariants } from "$lib/components/ui/button";
    import { page } from "$app/state";
    import { init } from "$lib/game/loop.svelte";
    import {
        House,
        Smartphone,
        Megaphone,
        ChartLine,
        Settings,
        Factory,
        List,
    } from "@lucide/svelte";
    import { Toaster } from "$lib/components/ui/sonner/index.js";
    import * as Dialog from "$lib/components/ui/dialog/index.js";

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
            { label: "More", href: "/more", icon: List },
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

<Dialog.Root bind:open={$firstTimeDialogState.shown}>
    <Dialog.Content>
        <Dialog.Header>
            <Dialog.Title>Welcome to Smasnug Factory Simulator!</Dialog.Title>
            <Dialog.Description>
                This game is in its early stages, so a lot of stuff isn't
                working. Expect bugs, glitches, random things not being
                implemented, edge cases, and unexpected behavior. Don't complain
                to me if you lose your progress. I'm probably not going to fix
                or change anything to be honest, because I have <a
                    class="underline"
                    href="https://github.com/Inglan?tab=repositories&type=source"
                >
                    better things to do.</a
                >
                <br />
                <br />
                Tip: Start by buying a factory.
            </Dialog.Description>
        </Dialog.Header>
        <Dialog.Footer>
            <Dialog.Close class={buttonVariants()}>Close</Dialog.Close>
        </Dialog.Footer>
    </Dialog.Content>
</Dialog.Root>

<div class="container mx-auto flex flex-col gap-4 p-4 min-h-screen">
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
    <div class="grow"></div>
    <span class="text-center">
        A
        <a href="https://smasnug.dev" target="_blank" class="underline"
            >Smasnug development</a
        > project</span
    >
</div>
