<script lang="ts">
    import MonthAnalytics from "./MonthAnalytics.svelte";

    export let data;
    const itemAnalytics = data.itemAnalytics;
</script>

<div class="flex flex-col gap-4">
    {#if itemAnalytics.length === 0}
        <p>Šiuo metu neturite išnuomotų daiktų!</p>
    {/if}

    {#each itemAnalytics as itemInfo}
        <div class="flex p-4 rounded shadow border gap-4">
            <p class="text-lg grow">{itemInfo.name}</p>

            <img
                class="w-40 aspect-square"
                src={itemInfo.image}
                alt="nuotrauka"
            />

            <div class="flex gap-4">
                <div
                    class="inline-flex flex-col shadow border rounded-lg p-5 gap-4 h-full"
                >
                    <div class="flex flex-col">
                        <span class="text-lg py-2">Visas pelnas</span>
                        <div class="flex items-end gap-2">
                            <span class="text-lg text-green-500">€</span>
                            <span class="text-2xl text-green-500"
                                >{itemInfo.totalProfit}</span
                            >
                        </div>
                    </div>
                </div>

                <MonthAnalytics {itemInfo} />
            </div>
        </div>
    {/each}
</div>
