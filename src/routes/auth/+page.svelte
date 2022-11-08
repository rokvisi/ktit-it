<script lang="ts">
    import type UserData from "$types/UserData";
    import { trycatchasync } from "$utils/trycatch";
    import Button, { Label } from "@smui/button";
    import Card from "@smui/card";
    import CircularProgress from "@smui/circular-progress";
    import Textfield from "@smui/textfield";

    const userInfo = {
        username: "user_1",
        password: "pass1",
    };

    let error = "";
    let loading = false;

    $: buttonsDisabled = !userInfo.username || !userInfo.password || loading;

    async function authHandler(type: "login" | "register") {
        loading = true;

        //* Every auth type api returns a UserData JSON.
        const [body, authError] = await trycatchasync<UserData>(async () => {
            //* POST the auth api with login/register field data.
            const res = await fetch(`/api/auth/${type}`, {
                method: "POST",
                body: JSON.stringify(userInfo),
            });

            //* If it failed.
            if (!res.ok) {
                throw new Error((await res.json()).message);
            }

            //* Parse the result.
            return await res.json();
        });
        if (authError) {
            error = authError.message;
            loading = false;
            return;
        }

        location.replace(`/${body.role}`);
    }
</script>

<div
    class="inline-flex flex-col items-center gap-4 w-72 border p-4 rounded shadow"
>
    <p class="mr-auto">Įveskite prisijungimo duomenis</p>
    <Textfield
        class="w-full"
        bind:value={userInfo.username}
        type="text"
        label="Username"
        required
    />
    <Textfield
        class="w-full"
        bind:value={userInfo.password}
        type="password"
        label="Password"
        required
    />

    {#if error}
        <Card padded variant="outlined" class="text-red-600 w-full">
            {error}
        </Card>
    {/if}

    <div class="flex w-full gap-4">
        {#if loading}
            <CircularProgress class="h-10 w-10 mx-auto" indeterminate />
        {:else}
            <Button
                class="w-full"
                disabled={buttonsDisabled}
                variant="outlined"
                on:click={() => authHandler("login")}
            >
                <Label underline>Prisijungti</Label>
            </Button>
            <Button
                class="w-full"
                disabled={buttonsDisabled}
                variant="outlined"
                on:click={() => authHandler("register")}
            >
                <Label>Registruotis</Label>
            </Button>
        {/if}
    </div>
</div>
