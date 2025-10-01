<script>
    import { Products } from "$lib/constants";
    import { state } from "$lib/state.svelte";
</script>

{#each Object.entries($state.products) as [key, value]}
    {key}
    {value}
{/each}
