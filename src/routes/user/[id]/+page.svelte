<script type="ts">
    import MoneyIcon from "$components/svg-icons/MoneyIcon.svelte";
    import PencilSquareIcon from "$components/svg-icons/PencilSquareIcon.svelte";
    import UserIcon from "$components/svg-icons/UserIcon.svelte";
    import type { Item, ReviewDB } from "$types/DBStructures";
    import Button, { Label } from "@smui/button";
    import Accordion, { Panel, Header, Content } from "@smui-extra/accordion";
    import IconButton, { Icon } from "@smui/icon-button";
    import { page } from "$app/stores";
    import { useQuery } from "@sveltestack/svelte-query";
    import queryClient from "$lib/query";

    export let data: Item;

    const dataStatus = useQuery("reviewData", () =>
        fetch(`${$page.url.origin}/api/db/reviews`).then((res) => res.json())
    );

    const primaryImage = data.images[0];
    const extraImages = data.images.slice(1);

    let reviewPanelOpen = false;
    let review: string = "";

    let buttonState: "neutral" | "active" | "error" = "neutral";
    let error = "";

    async function sendReview() {
        buttonState = "active";

        const res = await fetch("/api/db/reviews", {
            method: "POST",
            body: JSON.stringify({
                user: $page.data.username,
                renter: data.renter,
                review,
            }),
        });

        if (!res.ok) {
            buttonState = "error";
            error = (await res.json()).message
            return;
        }

        buttonState = "neutral";
        review = "";
        queryClient.invalidateQueries('reviewData')
    }
</script>

<div class="flex flex-col gap-8 mb-10">
    <div class="flex gap-8">
        <div class="space-y-4">
            <img src={primaryImage} alt="primary" class="w-96 border rounded" />

            {#each extraImages as image (image)}
                <img class="w-96 border rounded" src={image} alt="product" />
            {/each}
        </div>
        <div class="w-full space-y-8">
            <h1 class="text-3xl">{data.name}</h1>
            <div class="space-y-2">
                <div class="flex items-center">
                    <PencilSquareIcon className="inline-block w-6 h-6 mr-2" />
                    <h2 class="inline-block">Aprašymas</h2>
                </div>
                <hr class="shadow" />
                <p>{data.description}</p>
            </div>
            <div class="space-y-2">
                <div class="flex items-center">
                    <MoneyIcon className="inline-block w-6 h-6 mr-2" />
                    <h2 class="inline-block">Kaina</h2>
                </div>
                <hr class="shadow" />
                <p>{data.price} eur</p>
            </div>
            <div class="space-y-2">
                <div class="flex items-center">
                    <UserIcon className="inline-block w-6 h-6 mr-2" />
                    <h2 class="inline-block">Nuomininkas</h2>
                </div>

                <hr class="shadow" />
                <p>{data.renter}</p>
            </div>
            <div>
                <h2 class="mb-2">Grupės</h2>
                <hr class="shadow mb-4" />
                <div class="space-x-4">
                    {#each data.groups as group (group)}
                        <span class="rounded-full py-1 px-4 bg-blue-200"
                            >{group}</span
                        >
                    {/each}
                </div>
            </div>
            <Button class="w-full" variant="raised">
                <Label underline>Nuomuotis!</Label>
            </Button>
        </div>
    </div>
    <div class="flex flex-col gap-4">
        <p class="text-xl">Atsiliepimai</p>
        <Accordion class="w-full">
            <Panel bind:open={reviewPanelOpen}>
                <Header>
                    Palikti atsiliepimą apie nuomininką
                    <IconButton slot="icon" toggle pressed={reviewPanelOpen}>
                        <Icon class="material-icons" on>expand_less</Icon>
                        <Icon class="material-icons">expand_more</Icon>
                    </IconButton>
                </Header>
                <Content class="space-y-2">
                    <div class="flex items-center">
                        <UserIcon className="inline-block w-6 h-6 mr-2" />
                        <span>{data.renter}</span>
                    </div>
                    <textarea
                        class="border w-full p-4 "
                        bind:value={review}
                        placeholder="Rašyti čia..."
                    />
                    <Button
                        class="w-full"
                        variant="raised"
                        on:click={sendReview}
                        disabled={buttonState === "active" ||
                            buttonState === "error" ||
                            review.length < 4}
                    >
                        <Label underline>
                            {#if buttonState === "neutral"}
                                Siųsti
                            {:else if buttonState === "active"}
                                Siunčiama...
                            {:else if buttonState === "error"}
                                {error}
                            {/if}
                        </Label>
                    </Button>
                </Content>
            </Panel>
        </Accordion>
        {#if $dataStatus.isLoading}
            <span>Kraunama...</span>
        {:else if $dataStatus.error}
            <span>Klaida: {$dataStatus.error}</span>
        {:else}
            {#each $dataStatus.data.reviews as review (review.id)}
                <div class="flex flex-col border rounded p-4">
                    <div class="flex items-center">
                        <UserIcon className="inline-block w-6 h-6 mr-2" />
                        <span>{review.fk_reviewer}</span>
                    </div>
                    <p>{review.review}</p>
                </div>
            {/each}
        {/if}
    </div>
</div>
