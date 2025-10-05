<script lang="ts">
    import { gameState } from "$lib/state.svelte";

    import * as Chart from "$lib/components/ui/chart/index.js";
    import { Area, AreaChart, LinearGradient, LineChart } from "layerchart";
    import { curveNatural } from "d3-shape";
</script>

<div class="grid lg:grid-cols-2 grid-cols-1 gap-4">
    <Chart.Container
        class="flex flex-col bg-card border rounded-md p-10 gap-2"
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
            props={{
                area: {
                    curve: curveNatural,
                    "fill-opacity": 0.4,
                    line: { class: "stroke-1" },
                    motion: "tween",
                },
                xAxis: {
                    ticks: {
                        interval: $gameState.analytics.moneyPerDay?.length,
                    },
                    format: (value) => value.toFixed(0),
                },
            }}
        >
            {#snippet marks({ series, getAreaProps })}
                {#each series as s, i (s.key)}
                    <LinearGradient
                        stops={[
                            s.color ?? "",
                            "color-mix(in lch, " +
                                s.color +
                                " 10%, transparent)",
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
</div>
