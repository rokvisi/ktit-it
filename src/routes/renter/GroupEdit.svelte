<script type="ts">
    import ActionButton from "$components/ActionButton.svelte";
    import type ActionButtonRes from "$types/ActionButtonRes";
    import type { Item } from "$types/DBStructures";
    import { trycatchasync } from "$utils/trycatch";
    import Checkbox from "@smui/checkbox";
    import FormField from "@smui/form-field";
    import _ from "underscore";

    export let item: Item;
    export let groups: string[];

    let selectedGroups = [...item.groups];

    $: saveDisabled =
        _.difference(item.groups, selectedGroups).length === 0 &&
        _.difference(selectedGroups, item.groups).length === 0;

    async function onGroupUpdate(): ActionButtonRes {
        const removedGroups = _.difference(item.groups, selectedGroups);
        const addedGroups = _.difference(selectedGroups, item.groups);

        if (removedGroups.length === 0 && addedGroups.length === 0) {
            return { state: "warn", text: "Nerą jokių atliktų pakeitimų." };
        }

        const [res, error] = await trycatchasync(
            async () =>
                await fetch("/api/db/groups", {
                    method: "DELETE",
                    body: JSON.stringify({
                        itemId: item.id,
                        addedGroups,
                        removedGroups,
                    }),
                })
        );

        if (error || !res.ok) {
            if (!error)
                return { state: "error", text: (await res.json()).message };
            return { state: "error", text: error.message };
        }

        item.groups = [...selectedGroups];
        return { state: "success", text: "Sėkmingai pakeistos grupės!" };
    }
</script>

<div class="space-y-4">
    <p>Grupės:</p>
    <div class="space-x-4">
        {#each groups as group}
            <FormField>
                <Checkbox bind:group={selectedGroups} value={group} />
                <span slot="label">{group}</span>
            </FormField>
        {/each}
    </div>
    <ActionButton class="w-full" disabled={saveDisabled} onClick={onGroupUpdate}
        >Išsaugoti Pakeitimus</ActionButton
    >
</div>
