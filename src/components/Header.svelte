<script lang="ts">
    import Button, { Label } from "@smui/button";
    import { A } from "@smui/common/elements";
    import { page } from "$app/stores";
    import HomeIcon from "./svg-icons/HomeIcon.svelte";

    const userName = $page.data.username;
    const userRole = $page.data.role;

    async function signOut() {
        await fetch("/api/auth/login", {
            method: "DELETE",
        });

        location.replace("/auth");
    }
</script>

<header class="my-4 mx-5 text-sm md:text-base">
    <div class="flex items-center">
        <div class="grow flex gap-8 items-center">
            <a href="/" class=""><HomeIcon /></a>
            {#if userRole}
                <Button variant="unelevated" href={`/${userRole}`}>
                    <Label>
                        {#if userRole === "user"}
                            Nuomuotis
                        {:else if userRole === "mod"}
                            Moderuoti
                        {:else if userRole === "renter"}
                            Nuomojami produktai
                        {/if}
                    </Label>
                </Button>

                {#if userRole === "renter"}
                    <Button variant="unelevated" href={`/renter/requests`}>
                        <Label>Užsakymai</Label>
                    </Button>
                    <Button variant="unelevated" href={`/renter/analytics`}>
                        <Label>Analitika</Label>
                    </Button>
                {/if}

                {#if userRole === "user"}
                    <Button variant="unelevated" href={`/user/returns`}>
                        <Label>Gražinti</Label>
                    </Button>
                {/if}
            {/if}
        </div>

        <div class="flex items-center gap-2 md:gap-4">
            {#if userName === null}
                <Button component={A} variant="unelevated" href="/auth">
                    Prisijungti
                </Button>
            {:else}
                <div class="flex flex-col items-center">
                    <p>
                        {userName}
                        <span class="font-bold text-orange-400"
                            >({userRole})</span
                        >
                    </p>

                    <Button color="secondary" on:click={signOut}>
                        Atsijungti
                    </Button>
                </div>
            {/if}
        </div>
    </div>

    <hr class="mt-4" />
</header>
