<script type="ts">
    import InfoBox from "$components/InfoBox.svelte";
    import { isValidHttpUrl } from "$utils/utils";
    import Button, { Label } from "@smui/button";
    import Textfield from "@smui/textfield";

    export let images: string[];
    export let itemId: number;

    let showInfoBox: (
        text: string,
        variant: "success" | "warn" | "error",
        ms: number
    ) => void;

    let imageDeleteButtonState: "neutral" | "active" = "neutral";
    async function onImageDelete(url: string) {
        imageDeleteButtonState = "active";

        const res = await fetch("/api/db/images", {
            method: "DELETE",
            body: JSON.stringify({ url }),
        });

        imageDeleteButtonState = "neutral";
        if (!res.ok) {
            showInfoBox(res.statusText, "error", 2000);
            return;
        }

        showInfoBox("Nuotrauka sėkmingai ištrinta!", "success", 2000);
        images = images.filter((image) => image != url);
    }

    let newImageUrl = "";
    let urlInvalid: boolean;
    let imageAddButtonState: "neutral" | "active" = "neutral";
    async function addNewImage() {
        if (newImageUrl.length === 0 || urlInvalid) {
            showInfoBox("Įvestas neteisingo formato URL!", "warn", 3000);
            return;
        }

        imageAddButtonState = "active";
        const res = await fetch("/api/db/images", {
            method: "POST",
            body: JSON.stringify({
                url: newImageUrl,
                itemId,
            }),
        });
        imageAddButtonState = "neutral";

        if (!res.ok) {
            const err = await res.json();

            showInfoBox(err.message, "error", 3000);
            return;
        }

        showInfoBox("Nuotrauka sėkmingai pridėta!", "success", 2000);
        images = [...images, newImageUrl];
        newImageUrl = "";
    }
</script>

<div class="space-y-4">
    <p>Nuotraukos:</p>
    {#each images as image}
        <div class="flex gap-8 border rounded p-4 items-center">
            <img class="w-40" src={image} alt="product" />
            <p class="grow">{image}</p>
            <Button
                disabled={imageDeleteButtonState === "active"}
                on:click={() => onImageDelete(image)}
                variant="unelevated"
                color="secondary"
            >
                <Label>-</Label>
            </Button>
        </div>
    {/each}
    <div class="space-y-4">
        <div class="w-full">
            <p>Naujos nuotraukos URL:</p>
            <Textfield
                bind:invalid={urlInvalid}
                type="url"
                class="w-full"
                helperLine$style="width: 100%;"
                bind:value={newImageUrl}
                variant="outlined"
            />
        </div>

        <Button
            class="w-full"
            disabled={imageAddButtonState === "active" ||
                newImageUrl.length === 0 || !isValidHttpUrl(newImageUrl)}
            on:click={addNewImage}
            variant="unelevated"
        >
            <Label>Pridėti</Label>
        </Button>
    </div>
    <InfoBox bind:showInfoBox />
</div>
