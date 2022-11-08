<script type="ts">
    import type { User } from "$types/DBStructures";
    import Tab, { Label } from "@smui/tab";
    import TabBar from "@smui/tab-bar";
    import Button from "@smui/button";
    import { page } from "$app/stores";
    import { useQuery } from "@sveltestack/svelte-query";
    import queryClient from "$lib/query";

    const dataStatusImages = useQuery("imagesAPI", () =>
        fetch(`${$page.url.origin}/api/db/images`).then((res) => res.json())
    );
    const dataStatusReviews = useQuery("reviewsAPI", () =>
        fetch(`${$page.url.origin}/api/db/reviews`).then((res) => res.json())
    );

    let deleteButtonState: "neutral" | "active" | "error" = "neutral";
    let active = "Nuotraukos";

    async function deleteImage(url: string) {
        deleteButtonState = "active";

        const res = await fetch("/api/db/images", {
            method: "DELETE",
            body: JSON.stringify({
                url,
            }),
        });

        if (!res.ok) {
            deleteButtonState = "error";
            return;
        }

        queryClient.invalidateQueries("imagesAPI");
        deleteButtonState = "neutral";
    }

    async function deleteReview(id: number) {
        deleteButtonState = "active";

        const res = await fetch("/api/db/reviews", {
            method: "DELETE",
            body: JSON.stringify({
                id,
            }),
        });

        if (!res.ok) {
            deleteButtonState = "error";
            return;
        }
        queryClient.invalidateQueries("reviewsAPI");
        deleteButtonState = "neutral";
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
                            class="w-40 mx-auto"
                            src={image.url}
                            alt="product"
                        />
                        <Button
                            class="w-full"
                            variant="raised"
                            disabled={deleteButtonState === "active" ||
                                deleteButtonState === "error"}
                            on:click={() => deleteImage(image.url)}
                        >
                            <Label>Naikinti</Label>
                        </Button>
                    </div>
                {/each}
            </div>
        {/if}
    {:else if $dataStatusReviews.isLoading}
        <span>Kraunama...</span>
    {:else if $dataStatusReviews.error}
        <span>Klaida: {$dataStatusReviews.error}</span>
    {:else}
        <div class="flex flex-col gap-10">
            {#each $dataStatusReviews.data.reviews as review (review.review)}
                <div class="flex rounded gap-4">
                    <div class="border rounded shadow grow p-4">
                        <p>{review.review}</p>
                    </div>
                    <Button
                        class=""
                        variant="raised"
                        disabled={deleteButtonState === "active" ||
                            deleteButtonState === "error"}
                        on:click={() => deleteReview(review.id)}
                    >
                        <Label>Naikinti</Label>
                    </Button>
                </div>
                <hr />
            {/each}
        </div>
    {/if}
</div>
