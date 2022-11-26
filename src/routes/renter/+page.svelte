<script type="ts">
    import ItemEdit from "./ItemEdit.svelte";

    export let data: any;
    let items = data.items;
    let groups = data.groups;
</script>

<section class="flex flex-col gap-4">
    {#if items.length === 0}
        <p>Neturite daiktų nuomai!</p>
    {/if}
    {#each items as item (item.id)}
        <ItemEdit {item} {groups} />
    {/each}
</section>
