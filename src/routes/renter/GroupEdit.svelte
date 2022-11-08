<script type="ts">
    import InfoBox from "$components/InfoBox.svelte";
    import type { Item } from "$types/DBStructures";
    import { trycatchasync } from "$utils/trycatch";
    import Button, { Label } from "@smui/button";
    import Checkbox from "@smui/checkbox";
    import FormField from "@smui/form-field";
    import _ from "underscore";

    export let item: Item;
    export let groups: string[];

    let showInfoBox: (
        text: string,
        variant: "success" | "warn" | "error",
        ms: number
    ) => void;

    let selectedGroups = [...item.groups];
    let saveButtonStatus: "neutral" | "active" = "neutral";

    $: saveDisabled =
        _.difference(item.groups, selectedGroups).length === 0 &&
        _.difference(selectedGroups, item.groups).length === 0;

    async function onGroupUpdate() {
        const removedGroups = _.difference(item.groups, selectedGroups);
        const addedGroups = _.difference(selectedGroups, item.groups);

        if (removedGroups.length === 0 && addedGroups.length === 0) {
            showInfoBox("Nerą jokių atliktų pakeitimų.", "warn", 3000);
            return;
        }

        saveButtonStatus = "active";
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
        saveButtonStatus = "neutral";

        if (error || !res.ok) {
            if (!error) {
                const { message } = await res.json();
                showInfoBox(message, "error", 4000);
            } else {
                showInfoBox(error.message, "error", 4000);
            }

            return;
        }

        item.groups = [...selectedGroups];
        showInfoBox("Sėkmingai pakeistos grupės!", "success", 2000);
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
    <Button
        class="w-full"
        on:click={onGroupUpdate}
        variant="unelevated"
        disabled={saveButtonStatus === "active" || saveDisabled}
    >
        <Label>Išsaugoti Pakeitimus</Label>
    </Button>
    <InfoBox bind:showInfoBox />
</div>
