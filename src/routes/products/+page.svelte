<script lang="ts">
    import { Products } from "$lib/constants";
    import { state } from "$lib/state.svelte";

    function getProduct(productId: keyof typeof Products) {
        return Products[productId];
    }
</script>

<div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
    {#each Object.entries($state.products) as [productId, product]}
        <div class="flex flex-col bg-card border rounded-md p-4">
            <h2 class="text-2xl">
                {getProduct(productId as keyof typeof Products).name}
            </h2>
            <h3 class="text-md">
                Started production: day {product.startedProduction}
            </h3>
            <div class="grid grid-cols-2">
                <div>Selling for ${product.sellingPrice}</div>
                <div>{product.stock} in stock</div>
                <div>{product.totalSold} sold</div>
                <div>{product.totalProduced} produced</div>
                <div>${product.totalRevenue} revenue</div>
                <div>${product.totalProfit} profit</div>
            </div>
        </div>
    {/each}
</div>
