<script type="ts">
    import ActionButton from "$components/ActionButton.svelte";
    import type ActionButtonRes from "$types/ActionButtonRes";
    import type { Item } from "$types/DBStructures";
    import Textfield from "@smui/textfield";

    export let item: Item;

    const fields = {
        name: item.name,
        description: item.description,
        price: item.price,
    };

    //* The save button is disabled if no fields changed.
    $: disabled =
        item.name === fields.name &&
        item.price === fields.price &&
        item.description === fields.description;

    async function onSave(): ActionButtonRes {
        const res = await fetch("/api/db/items", {
            method: "PUT",
            body: JSON.stringify({
                item_id: item.id,
                ...fields,
            }),
        });
        if (!res.ok) return { state: "error", text: res.statusText };

        //* Update the "old" data.
        item.name = fields.name;
        item.description = fields.description;
        item.price = fields.price;

        return { state: "success", text: "Išsaugota sėkmingai!" };
    }
</script>

<div class="grid grid-cols-2 gap-8">
    <div>
        <p>Pavadinimas:</p>
        <Textfield
            class="w-full"
            variant="outlined"
            type="text"
            bind:value={fields.name}
        />
    </div>
    <div>
        <p>Kaina (eur / mėn):</p>
        <Textfield
            class="w-full"
            variant="outlined"
            type="number"
            bind:value={fields.price}
        />
    </div>

    <div class="col-span-full">
        <p>Aprašymas:</p>
        <Textfield
            class="w-full"
            helperLine$style="width: 100%;"
            textarea
            bind:value={fields.description}
        />
    </div>
    <ActionButton class="col-span-full" {disabled} onClick={onSave}
        >Išsaugoti Pakeitimus</ActionButton
    >
</div>
