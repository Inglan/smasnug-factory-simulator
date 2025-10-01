<script lang="ts">
    import { goto } from "$app/navigation";
    import Button from "$lib/components/ui/button/button.svelte";
    import { state } from "$lib/state.svelte";
    import { toast } from "svelte-sonner";
</script>

<h2 class="text-2xl">Settings</h2>

<Button
    onclick={() => {
        state.reset();
        toast.success("Progress reset!");
        goto("/");
    }}>Reset progress</Button
>
