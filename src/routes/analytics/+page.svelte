<script lang="ts">
    import { gameState } from "$lib/state.svelte";

    import * as Chart from "$lib/components/ui/chart/index.js";
    import { LineChart } from "layerchart";
</script>

<h2 class="text-2xl">Analytics</h2>

<Chart.Container
    config={{
        money: {
            label: "Money",
            color: "blue",
        },
    }}
>
    <LineChart
        data={$gameState.analytics.moneyPerDay?.map((money, index) => ({
            money: money,
            day: index + 1,
        }))}
        x="day"
        series={[{ key: "money", color: "blue", label: "Money" }]}
    />
</Chart.Container>
{$gameState.analytics.moneyPerDay}
