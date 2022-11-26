<script type="ts">
    import ActionButton from "$components/ActionButton.svelte";
    import type ActionButtonRes from "$types/ActionButtonRes";
    import { isValidHttpUrl } from "$utils/utils";
    import Textfield from "@smui/textfield";

    export let images: string[];
    export let itemId: number;

    async function onImageDelete(url: string): ActionButtonRes {
        const res = await fetch("/api/db/images", {
            method: "DELETE",
            body: JSON.stringify({ url }),
        });
        if (!res.ok) return { state: "error", text: res.statusText };

        setTimeout(
            () => (images = images.filter((image) => image != url)),
            2000
        );
        return { state: "success", text: "Nuotrauka sėkmingai ištrinta!" };
    }

    let newImageUrl = "";
    let urlInvalid: boolean;
    async function addNewImage(): ActionButtonRes {
        if (newImageUrl.length === 0 || urlInvalid) {
            return { state: "warn", text: "Įvestas neteisingo formato URL!" };
        }

        const res = await fetch("/api/db/images", {
            method: "POST",
            body: JSON.stringify({
                url: newImageUrl,
                itemId,
            }),
        });
        if (!res.ok)
            return { state: "error", text: (await res.json()).message };

        images = [...images, newImageUrl];
        newImageUrl = "";

        return { state: "success", text: "Nuotrauka sėkmingai pridėta!" };
    }
</script>

<div class="space-y-4">
    <p>Nuotraukos:</p>
    {#each images as image}
        <div class="flex gap-8 border rounded p-4 items-center">
            <img class="w-40" src={image} alt="product" />
            <p class="grow">{image}</p>
            <ActionButton onClick={() => onImageDelete(image)}
                >Naikinti</ActionButton
            >
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
        <ActionButton
            class="w-full"
            disabled={newImageUrl.length === 0 || !isValidHttpUrl(newImageUrl)}
            onClick={addNewImage}>Pridėti</ActionButton
        >
    </div>
</div>
