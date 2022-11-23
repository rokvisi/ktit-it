<script type="ts">
    import RightArrowIcon from "$components/svg-icons/RightArrowIcon.svelte";
    import type { RentRequest } from "$types/DBStructures";
    import Button, { Label } from "@smui/button";
    import { useQueries } from "@sveltestack/svelte-query";
    import _ from "underscore";
    import qs from "qs";
    import Accordion, { Content, Header, Panel } from "@smui-extra/accordion";
    import UserIcon from "$components/svg-icons/UserIcon.svelte";

    export let data;
    const requests: RentRequest[] = data.requests;

    const uniqueRentees = _.uniq(requests, false, (r) => {
        return r.rentee;
    }).map((r) => r.rentee);

    const renteeReviewQueries = useQueries(
        uniqueRentees.map((rentee) => {
            return {
                queryKey: [`${rentee}Reviews`],
                queryFn: () =>
                    fetch(
                        `/api/db/reviews?${qs.stringify({ user: rentee })}`
                    ).then((res) => res.json()),
            };
        })
    );

    const mappedReviewQueries: any = {};
    $: {
        for (let i = 0; i < uniqueRentees.length; ++i) {
            mappedReviewQueries[uniqueRentees[i]] = $renteeReviewQueries[i];
        }
    }
</script>

<h1 class="text-lg">Užsakymai:</h1>
<div class="flex flex-col gap-8">
    {#each requests as request}
        <div>
            <div class="flex items-center rounded-t border p-4 gap-20">
                <div>
                    <img
                        class="w-20 aspect-square rounded"
                        src={request.image_url}
                        alt="product"
                    />
                </div>

                <div class="flex gap-8 grow">
                    <span class="text-xl text-gray-700">{request.itemName}</span
                    >
                    <RightArrowIcon class="w-6 h-6 text-gray-700" />
                    <span class="text-xl text-gray-700">{request.rentee}</span>
                </div>

                <span class="text-xl text-gray-700 mr-10">?</span>

                <div class="space-x-2">
                    <Button variant="unelevated"><Label>Priimti</Label></Button>
                    <Button variant="unelevated"><Label>Atmesti</Label></Button>
                </div>
            </div>
            <div>
                <Accordion>
                    <Panel>
                        <Header class="text-center border"
                            >Atsiliepimai apie {request.rentee}
                        </Header>
                        <Content>
                            {#if mappedReviewQueries[request.rentee] && mappedReviewQueries[request.rentee].status === "success"}
                                {#if mappedReviewQueries[request.rentee].data.reviews.length === 0}
                                    Atsiliepimų apie ši vartotoją nėra.
                                {/if}

                                {#each mappedReviewQueries[request.rentee].data.reviews as review}
                                    <div class="flex items-center gap-8">
                                        <div class="flex gap-2">
                                            <UserIcon class="w-6 h-6" />
                                            {review.fk_reviewer}:
                                        </div>
                                        {review.review}
                                    </div>
                                {/each}
                            {:else}
                                Kraunama...
                            {/if}
                        </Content>
                    </Panel>
                </Accordion>
            </div>
        </div>
    {/each}
</div>
