<script type="ts">
    import Tab, { Label } from "@smui/tab";
    import TabBar from "@smui/tab-bar";
    import { page } from "$app/stores";
    import { useQuery } from "@sveltestack/svelte-query";
    import queryClient from "$lib/query";
    import ActionButton from "$components/ActionButton.svelte";
    import type ActionButtonRes from "$types/ActionButtonRes";

    const dataStatusImages = useQuery("imagesAPI", () =>
        fetch(`${$page.url.origin}/api/db/images`).then((res) => res.json())
    );
    const dataStatusReviews = useQuery("reviewsAPI", () =>
        fetch(`${$page.url.origin}/api/db/reviews`).then((res) => res.json())
    );

    let active = "Nuotraukos";

    async function deleteImage(url: string): ActionButtonRes {
        const res = await fetch("/api/db/images", {
            method: "DELETE",
            body: JSON.stringify({
                url,
            }),
        });

        if (!res.ok) {
            return { state: "error", text: "Ištrinti nepavyko!" };
        }

        setTimeout(() => queryClient.invalidateQueries("imagesAPI"), 2000)
        return { state: "success", text: "Ištrinta!" };
    }

    async function deleteReview(id: number): ActionButtonRes {
        const res = await fetch("/api/db/reviews", {
            method: "DELETE",
            body: JSON.stringify({
                id,
            }),
        });

        if (!res.ok) {
            return { state: "error", text: "Ištrinti nepavyko!" };
        }

        setTimeout(() => queryClient.invalidateQueries("reviewsAPI"), 2000)
        return { state: "success", text: "Ištrinta!" };
    }
</script>

<div class="space-y-8">
    <TabBar tabs={["Nuotraukos", "Atsiliepimai"]} let:tab bind:active>
        <Tab {tab}>
            <Label>{tab}</Label>
        </Tab>
    </TabBar>

    {#if active === "Nuotraukos"}
        {#if $dataStatusImages.isLoading}
            <span>Kraunama...</span>
        {:else if $dataStatusImages.error}
            <span>Klaida: {$dataStatusImages.error}</span>
        {:else}
            <div class="grid grid-cols-5 gap-10">
                {#each $dataStatusImages.data.images as image (image.url)}
                    <div class="rounded space-y-4">
                        <img
                            class="w-40 aspect-square mx-auto"
                            src={image.url}
                            alt="product"
                        />
                        <ActionButton class="w-full" onClick={() => deleteImage(image.url)}>Naikinti</ActionButton>
                    </div>
                {/each}
            </div>
        {/if}
    {:else if $dataStatusReviews.isLoading}
        <span>Kraunama...</span>
    {:else if $dataStatusReviews.error}
        <span>Klaida: {$dataStatusReviews.error}</span>
    {:else}
        <div class="flex flex-col gap-6">
            {#each $dataStatusReviews.data.reviews as review (review.review)}
                <div class="flex rounded gap-4">
                    <div class="border rounded shadow grow p-2">
                        <p class="text-gray-500">{review.fk_reviewer} -> {review.fk_renter}</p>
                        <p>{review.review}</p>
                    </div>
                    <ActionButton class="" onClick={() => deleteReview(review.id)}>Naikinti</ActionButton>
                </div>
                <hr />
            {/each}
        </div>
    {/if}
</div>
