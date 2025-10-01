<script lang="ts">
    import { ProductTypes } from "$lib/constants";
    import { state } from "$lib/state.svelte";
    import type { ConstantProduct } from "$lib/types";

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
            value: (() => {
                // Find the key of the product with the highest totalSold
                const entries = Object.entries($state.products) as [
                    keyof typeof ProductTypes,
                    any,
                ][];
                if (entries.length === 0) return "None";
                const { key } = entries
                    .map(([key, product]) => ({ product, key }))
                    .reduce(
                        (max, { product, key }) => {
                            return product.totalSold > max.product.totalSold
                                ? { product, key }
                                : max;
                        },
                        {
                            product: { totalSold: 0 },
                            key: "" as keyof typeof ProductTypes,
                        },
                    );
                return (
                    ProductTypes[key as keyof typeof ProductTypes]?.name ||
                    "None"
                );
            })(),
        },
    ];
</script>

<div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
    {#each stats as { name, value }}
        <div class="flex flex-col items-center bg-card border rounded-md p-4">
            <span class="text-4xl font-bold">{value}</span>
            <span class="text-xl">{name}</span>
        </div>
    {/each}
</div>
