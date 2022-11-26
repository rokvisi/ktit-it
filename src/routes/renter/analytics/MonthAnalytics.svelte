<script lang="ts">
    export let itemInfo: any;

    const rentedPerMonth = itemInfo.rentedPerMonth.sort(
        (lhs: any, rhs: any) => {
            if (lhs.year === rhs.year) {
                return lhs.month > rhs.month;
            }

            return lhs.year > rhs.year;
        }
    );

    const lastIndex = rentedPerMonth.length - 1;

    let activeIndex = 0;
    $: activeMonth = rentedPerMonth[activeIndex];

    const monthNameMap = {
        1: "Sausis",
        2: "Vasaris",
        3: "Kovas",
        4: "Balandis",
        5: "Gegužė",
        6: "Birželis",
        7: "Liepa",
        8: "Rugpjūtis",
        9: "Rugsėjis",
        10: "Spalis",
        11: "Lapkritis",
        12: "Gruodis",
    } as any;
</script>

<div class="inline-flex flex-col shadow border rounded-lg p-5 h-full">
    <div class="flex gap-4 items-center">
        <span class="text-lg">Pelnas per</span>
        <div class="flex items-center items-around gap-4">
            <button
                disabled={activeIndex - 1 < 0}
                class="py-2 px-5 text-xl rounded-xl shadow border disabled:bg-gray-300 disabled:shadow-inner min-w-fit"
                on:click={() =>
                    (activeIndex =
                        activeIndex - 1 < 0 ? lastIndex : activeIndex - 1)}
                >{"<-"}</button
            >
            <span class="grow"
                >{activeMonth.year} {monthNameMap[activeMonth.month]}</span
            >
            <button
                disabled={activeIndex + 1 > lastIndex}
                class="py-2 px-5 text-xl rounded-xl shadow border disabled:bg-gray-300 disabled:shadow-inner min-w-fit"
                on:click={() =>
                    (activeIndex =
                        activeIndex + 1 > lastIndex ? 0 : activeIndex + 1)}
                >{"->"}</button
            >
        </div>
    </div>

    <div class="flex items-end gap-2">
        <span class="text-lg text-green-500">€</span>
        <span class="text-2xl text-green-500"
            >{activeMonth.count * itemInfo.price}</span
        >
    </div>
</div>
