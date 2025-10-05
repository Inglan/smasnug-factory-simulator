<script lang="ts">
    import { gameState } from "$lib/state.svelte";

    import * as Chart from "$lib/components/ui/chart/index.js";
    import { Area, AreaChart, LinearGradient, LineChart } from "layerchart";
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
    <AreaChart
        data={$gameState.analytics.moneyPerDay?.map((money, index) => ({
            money: money,
            day: index + 1,
        }))}
        x="day"
        series={[{ key: "money", color: "blue", label: "Money" }]}
    >
        {#snippet marks({ series, getAreaProps })}
            {#each series as s, i (s.key)}
                <LinearGradient
                    stops={[
                        s.color ?? "",
                        "color-mix(in lch, " + s.color + " 10%, transparent)",
                    ]}
                    vertical
                >
                    {#snippet children({ gradient })}
                        <Area {...getAreaProps(s, i)} fill={gradient} />
                    {/snippet}
                </LinearGradient>
            {/each}
        {/snippet}
    </AreaChart>
</Chart.Container>
{$gameState.analytics.moneyPerDay}
