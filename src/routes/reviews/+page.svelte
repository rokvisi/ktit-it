<script type="ts">
    import type { User } from "$types/DBStructures";
    import Tab, { Label } from "@smui/tab";
    import TabBar from "@smui/tab-bar";
    import Button from "@smui/button";

    export let data: any;
    const users: any[] = data.usersWithReviews;

    const renters: any[] = [];
    for (const user of users) {
        for (const review of user.reviews) {
            const uniqueRenterIndex = renters.findIndex(
                (uniqueRenter) => uniqueRenter.name === review.renter
            );
            if (uniqueRenterIndex === -1) {
                renters.push({
                    name: review.renter,
                    reviews: [
                        {
                            user: user.name,
                            text: review.text,
                        },
                    ],
                });
            } else {
                renters[uniqueRenterIndex].reviews.push({
                    user: user.name,
                    text: review.text,
                });
            }
        }
    }

    let active = "Vartotojai";
</script>

<div class="flex flex-col gap-4 mb-10">
    <h1 class="text-center text-xl">Atsiliepimai</h1>
    <TabBar tabs={["Vartotojai", "Nuomininkai"]} let:tab bind:active>
        <Tab {tab}>
            <Label>{tab}</Label>
        </Tab>
    </TabBar>

    {#if active === "Vartotojai"}
        <div class="flex flex-col gap-4">
            {#each users as user (user.name)}
                <p class="text-lg">Vartotojas: {user.name}</p>
                <div class="border rounded p-4 space-y-4 bg-gray-100">
                    {#each user.reviews as review (review.text)}
                        <div class="space-y-4 border p-4">
                            <span>Nuomininkas: <b>{review.renter}</b></span>
                            <hr />
                            <p>{review.text}</p>
                        </div>
                    {/each}
                </div>
            {/each}
        </div>
    {:else}
        <div class="flex flex-col gap-4">
            {#each renters as user (user.name)}
                <p class="text-lg">Nuomininkas: {user.name}</p>
                <div class="border rounded p-4 space-y-4 bg-gray-100">
                    {#each user.reviews as review (review.text)}
                        <div class="space-y-4 border p-4">
                            <span>Vartotojas: <b>{review.user}</b></span>
                            <hr />
                            <p>{review.text}</p>
                        </div>
                    {/each}
                </div>
            {/each}
        </div>
    {/if}
</div>
