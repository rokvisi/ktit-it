<script type="ts">
    import InfoBox from "$components/InfoBox.svelte";
    import type { Item } from "$types/DBStructures";
    import Button, { Label } from "@smui/button";
    import Textfield from "@smui/textfield";

    export let item: Item;

    let showInfoBox: (
        text: string,
        variant: "success" | "warn" | "error",
        ms: number
    ) => void;

    let newName = item.name;
    let newDescription = item.description;
    let newPrice = item.price;

    //* Text data state button disable state.
    let disabled = true;
    $: {
        //* Check if title, price or description edited.
        if (
            item.name === newName &&
            item.price === newPrice &&
            item.description === newDescription
        ) {
            disabled = true;
        } else {
            disabled = false;
        }
    }

    async function onSave() {
        disabled = true;

        const res = await fetch("/api/db/items", {
            method: "PUT",
            body: JSON.stringify({
                item_id: item.id,
                newName: newName,
                newDescription: newDescription,
                newPrice: newPrice,
            }),
        });

        disabled = false;

        if (!res.ok) {
            showInfoBox(res.statusText, "error", 3000);
            return;
        }

        //* Update the "old" data.
        item.name = newName;
        item.description = newDescription;
        item.price = newPrice;

        //* Show success text.
        showInfoBox("Išsaugota sėkmingai!", "success", 2000);

        disabled = false;
    }

    
</script>

<div class="grid grid-cols-2 gap-8">
    <div>
        <p>Pavadinimas:</p>
        <Textfield
            class="w-full"
            variant="outlined"
            type="text"
            bind:value={newName}
        />
    </div>
    <div>
        <p>Kaina (eur / mėn):</p>
        <Textfield
            class="w-full"
            variant="outlined"
            type="number"
            bind:value={newPrice}
        />
    </div>

    <div class="col-span-full">
        <p>Aprašymas:</p>
        <Textfield
            class="w-full"
            helperLine$style="width: 100%;"
            textarea
            bind:value={newDescription}
        />
    </div>

    <Button
        class="col-span-full"
        {disabled}
        on:click={onSave}
        variant="unelevated"
    >
        <Label>Išsaugoti Pakeitimus</Label>
    </Button>
    <InfoBox divClass="col-span-full" bind:showInfoBox />
</div>
