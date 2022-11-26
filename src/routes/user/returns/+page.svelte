<script lang="ts">
    import ActionButton from "$components/ActionButton.svelte";
    import type ActionButtonRes from "$types/ActionButtonRes";
    import { getMonth, getDate, getYear } from "date-fns";

    export let data: any;
    type ContractDB = {
        id: number;
        name: string;
        url: string;
        fk_renter: string;
        fk_rentee: string;
        start_time: Date;
        end_time: Date | null;
    };
    let contracts: ContractDB[] = data.contracts;

    async function returnItem(contractId: number): ActionButtonRes {
        const res = await fetch("/api/db/contracts", {
            method: "PUT",
            body: JSON.stringify({
                contractId,
            }),
        });

        if (!res.ok) {
            return { state: "error", text: "Klaida!" };
        }

        setTimeout(() => {
            contracts.find((c) => c.id === contractId)!.end_time = new Date();
            contracts = contracts;
        }, 3000);
        return { state: "success", text: "Grąžinta!" };
    }
</script>

<div class="flex flex-col gap-8">
    {#if contracts.length === 0}
        <p>Išsinuomotų daiktų nėra!</p>
    {/if}

    {#each contracts as contract (contract.id)}
        <div class="flex gap-4 p-4 shadow border">
            <p class="grow text-lg">{contract.name}</p>
            <img
                src={contract.url}
                alt="nuotrauka"
                class="w-40 aspect-square p-4 rounded border"
            />
            <div class="flex flex-col justify-between shrink">
                <p
                    class="text-center bg-blue-300 rounded shadow border py-2 px-4"
                >
                    Išnuomota: {getYear(contract.start_time)}/{getMonth(
                        contract.start_time
                    )}/{getDate(contract.start_time)}
                </p>
                <div>
                    {#if contract.end_time}
                        <p
                            class="text-center bg-green-300 rounded shadow border py-2 px-4"
                        >
                            Grąžinta: {getYear(contract.end_time)}/{getMonth(
                                contract.end_time
                            )}/{getDate(contract.end_time)}
                        </p>
                    {:else}
                        <ActionButton
                            class="w-full"
                            onClick={() => returnItem(contract.id)}
                        >
                            Grąžinti
                        </ActionButton>
                    {/if}
                </div>
            </div>
        </div>
    {/each}
</div>
