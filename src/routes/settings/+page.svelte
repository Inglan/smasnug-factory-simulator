<script>
    import { goto } from "$app/navigation";
    import Button from "$lib/components/ui/button/button.svelte";
    import { state } from "$lib/state.svelte";
</script>

<h2 class="text-2xl">Settings</h2>

<Button
    onclick={() => {
        state.reset();
        goto("/");
    }}>Reset progress</Button
>
