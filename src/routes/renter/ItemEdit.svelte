<script type="ts">
    import type { Item } from "$types/DBStructures";
    import DataEdit from "./DataEdit.svelte";
    import GroupEdit from "./GroupEdit.svelte";
    import ImageEdit from "./ImageEdit.svelte";

    export let item: Item;
    export let groups: string[];
</script>

<div class="border rounded shadow mb-10">
    <p class="text-2xl p-4 bg-orange-100"><span class="italic text-gray-400">SKU: {item.id}</span> | {item.name}</p>
    <div class="p-8 space-y-8">
        <DataEdit {item}/>
        <GroupEdit {item} {groups}/>
        <ImageEdit images={item.images} itemId={item.id} />
    </div>
</div>
