<script lang="ts">
    import { goto } from "$app/navigation";
    import Button from "$lib/components/ui/button/button.svelte";
    import { gameState } from "$lib/state.svelte";
    import { toast } from "svelte-sonner";
</script>

<Button
    onclick={() => {
        gameState.reset();
        toast.success("Progress reset!");
        goto("/");
    }}>Reset progress</Button
>
