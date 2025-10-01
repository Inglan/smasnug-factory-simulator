<script lang="ts">
    import { ProductTypes } from "$lib/constants";
    import { state } from "$lib/state.svelte";

    const stats = [
        { name: "Smascoins", value: $state.money },
        { name: "Factories", value: $state.factories.length },
        {
            name: "Products in production",
            value: Object.values($state.products).filter(
                (p: any) => p.startedProduction,
            ).length,
        },
        {
            name: "Total Revenue",
            value: Object.values($state.products)
                .map((product) => product.totalRevenue)
                .reduce((acc, curr) => acc + curr, 0),
        },
        {
            name: "Total Sales",
            value: Object.values($state.products)
                .map((product) => product.totalSold)
                .reduce((acc, curr) => acc + curr, 0),
        },
        {
            name: "Most popular product",
            value:
                ProductTypes[
                    Object.entries($state.products)
                        .map(([key, product]) => ({ product, key }))
                        .reduce(
                            (max, { product, key }) => {
                                return product.totalSold > max.product.totalSold
                                    ? { product, key }
                                    : max;
                            },
                            { product: { totalSold: 0 }, key: "" },
                        ).key
                ]?.name || "None",
        },
    ];
</script>

<div class="grid grid-cols-3 gap-4">
    {#each stats as { name, value }}
        <div class="flex flex-col items-center bg-card border rounded-md p-4">
            <span class="text-4xl font-bold">{value}</span>
            <span class="text-xl">{name}</span>
        </div>
    {/each}
</div>
