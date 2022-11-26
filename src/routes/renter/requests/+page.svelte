<script type="ts">
    import type { RentRequest } from "$types/DBStructures";
    import { useQueries } from "@sveltestack/svelte-query";
    import _ from "underscore";
    import qs from "qs";
    import Accordion, { Content, Header, Panel } from "@smui-extra/accordion";
    import UserIcon from "$components/svg-icons/UserIcon.svelte";
    import Card from "@smui/card";
    import ActionButton from "$components/ActionButton.svelte";
    import type ActionButtonRes from "$types/ActionButtonRes";

    export let data;
    let requests: RentRequest[] = data.requests;

    const uniqueRentees = _.uniq(requests, false, (r) => {
        return r.rentee;
    }).map((r) => r.rentee);

    const renteeReviewQueries = useQueries(
        uniqueRentees.map((rentee) => {
            return {
                queryKey: [rentee, "Reviews"],
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

    async function action_on_req(
        req_id: number,
        action: "accept" | "refuse",
        itemId: number,
        renter: string,
        rentee: string
    ): ActionButtonRes {
        const res = await fetch("/api/db/requests", {
            method: "PUT",
            body: JSON.stringify({
                requestId: req_id,
                action,
                itemId,
                renter,
                rentee,
            }),
        });

        if (!res.ok) {
            return {
                state: "error",
                text: "Klaida!",
            };
        }

        setTimeout(() => {
            requests = requests.filter((r) => r.id != req_id);
        }, 3000);
        return {
            state: "success",
            text: action === "accept" ? "Priimta!" : "Atmesta!",
        };
    }
</script>

<div>
    {#if requests.filter((r) => r.status === "pending").length === 0}
        <p>Šiuo metu užsakymų nėra!</p>
    {:else}
        <div class="flex flex-col gap-8 mb-10">
            {#each requests as request (request.id)}
                {#if request.status === "pending"}
                    <div class="space-y-2">
                        <Card variant="outlined" padded>
                            <Content class="flex flex-col gap-4">
                                <div class="flex gap-2 text-xl border-b pb-4">
                                    <UserIcon class="w-6 h-6" />
                                    <span>{request.rentee} nori nuomuotis:</span
                                    >
                                </div>
                                <div class="space-y-4">
                                    <p class="text-lg text-gray-700">
                                        {request.itemName}
                                    </p>
                                    <div class="inline-block border p-4">
                                        <img
                                            class="w-40 aspect-square rounded"
                                            src={request.image_url}
                                            alt="product"
                                        />
                                    </div>
                                </div>
                                <div class="flex gap-16 border-t pt-4">
                                    <ActionButton
                                        class="w-full"
                                        onClick={() =>
                                            action_on_req(
                                                request.id,
                                                "accept",
                                                request.itemId,
                                                request.renter,
                                                request.rentee
                                            )}
                                    >
                                        Priimti
                                    </ActionButton>
                                    <ActionButton
                                        class="w-full"
                                        onClick={() =>
                                            action_on_req(
                                                request.id,
                                                "refuse",
                                                request.itemId,
                                                request.renter,
                                                request.rentee
                                            )}
                                    >
                                        Atmesti
                                    </ActionButton>
                                </div>
                            </Content>
                        </Card>

                        <Accordion>
                            <Panel color="secondary">
                                <Header
                                    >Atsiliepimai apie {request.rentee}</Header
                                >
                                <Content>
                                    {#if mappedReviewQueries[request.rentee] && mappedReviewQueries[request.rentee].status === "success"}
                                        {#if mappedReviewQueries[request.rentee].data.reviews.length === 0}
                                            Atsiliepimų apie šį vartotoją nėra.
                                        {/if}

                                        {#each mappedReviewQueries[request.rentee].data.reviews as review}
                                            <div
                                                class="flex items-center gap-8"
                                            >
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
                {/if}
            {/each}
        </div>
    {/if}
</div>
