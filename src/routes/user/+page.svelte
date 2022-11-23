<script type="ts">
    import { goto } from "$app/navigation";
    import UserIcon from "$components/svg-icons/UserIcon.svelte";
    import type { Item } from "$types/DBStructures";
    import { useQuery } from "@sveltestack/svelte-query";
    import { page } from "$app/stores";

    const dataStatus = useQuery("repoData", () =>
        fetch(`${$page.url.origin}/api/db/items`).then((res) => res.json())
    );
    $: items = $dataStatus.data;

    let textSearch = "";
    let filteredItems: Item[] = [];

    $: {
        if (items) {
            const itemsMatchingName = items.filter((item: Item) => item.name.toLowerCase().includes(textSearch.toLowerCase()));
            const itemsMatchingDescription = items.filter((item: Item) => item.description.toLowerCase().includes(textSearch.toLowerCase()));
            const itemsMatchingGroup = items.filter((item: Item) => item.groups.some((group => group.toLowerCase().includes(textSearch.toLowerCase()))));

            filteredItems = [];
            
            for (const item of itemsMatchingName) {
                if (filteredItems.findIndex((unique_item) => item.name === unique_item.name) === -1) {
                    filteredItems.push(item);
                }
            }
            for (const item of itemsMatchingGroup) {
                if (filteredItems.findIndex((unique_item) => item.name === unique_item.name) === -1) {
                    filteredItems.push(item);
                }
            }
            for (const item of itemsMatchingDescription) {
                if (filteredItems.findIndex((unique_item) => item.name === unique_item.name) === -1) {
                    filteredItems.push(item);
                }
            }
        }
    }
</script>

{#if $dataStatus.isLoading}
    <span>Kraunama...</span>
{:else if $dataStatus.error}
    <span>Klaida: {$dataStatus.error}</span>
{:else}
    <input class="w-full mb-4 border rounded p-4" type="text" placeholder="Ieškoti..." bind:value={textSearch}/>
    <div class="flex flex-col gap-4">
        {#each filteredItems as item (item.id)}
            <div class="flex p-4 border rounded gap-4 hover:bg-gray-200 cursor-pointer" on:click={() => goto(`/user/${item.id}`)}>
                <img class="aspect-auto w-40" src={item.images[0]} alt="product" />
                <div class="flex flex-col grow">
                    <div class="mb-auto">
                        <span class="text-lg mr-2">{item.name}</span>
                        <span class="inline-flex gap-2">
                            {#each item.groups as group}
                                <span class="bg-blue-200 rounded-full px-2">
                                    {group}
                                </span>
                            {/each}
                        </span>

                        <p>{item.description}</p>
                    </div>
                    <div class="flex justify-between">
                        <p>{item.price} eur / mėn.</p>
                        <span>
                            <UserIcon class="inline-block w-6 h-6" />
                            <span>{item.renter}</span>
                        </span>
                    </div>
                </div>
            </div>
        {/each}
    </div>
{/if}
