<script lang="ts">
    import { goto } from "$app/navigation";
    import Button from "$lib/components/ui/button/button.svelte";
    import { gameState } from "$lib/state.svelte";
    import { toast } from "svelte-sonner";
</script>

<h2 class="text-2xl">Settings</h2>

<Button
    onclick={() => {
        gameState.reset();
        toast.success("Progress reset!");
        goto("/");
    }}>Reset progress</Button
>

<Button
    onclick={() => {
        $gameState.money = Number(prompt("Set money")) || 0;
    }}>Set money</Button
>
