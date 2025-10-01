<script lang="ts">
    import { Products } from "$lib/constants";
    import { state } from "$lib/state.svelte";

    function getProduct(productId: keyof typeof Products) {
        return Products[productId];
    }
</script>

{#each Object.entries($state.products) as [productId, product]}
    {getProduct(productId as keyof typeof Products).name}
{/each}
