<script type="ts">
    import CircularProgress from "@smui/circular-progress";
    import OkIcon from "$components/svg-icons/OkIcon.svelte";
    import WarnIcon from "$components/svg-icons/WarnIcon.svelte";
    import XIcon from "$components/svg-icons/XIcon.svelte";
    import type ActionButtonRes from "$types/ActionButtonRes";

    type ButtonState = "normal" | "in-progress" | "success" | "warn" | "error";
    export let onClick: () => ActionButtonRes;
    export let disabled: boolean = false

    let btnState: ButtonState = "normal";
    let btnInfoText = "";
    $: btnDisabled = btnState != "normal" || disabled;

    async function onButtonClick() {
        btnState = "in-progress";
        btnInfoText = "Vykdoma...";

        const { state, text } = await onClick();

        btnState = state;
        btnInfoText = text;

        setTimeout(() => {
            btnState = "normal";
        }, 3000);
    }
</script>

<button
    class={"inline-block bg-[#FF3E00] px-4 py-1.5 rounded text-white uppercase font-medium " + $$props.class}
    class:disabled:bg-[#E0E0E0]={btnState === "in-progress" || btnDisabled}
    class:disabled:text-[#929292]={btnState === "in-progress" || btnState === "normal"}
    class:disabled:bg-green-600={btnState === "success"}
    class:disabled:bg-yellow-600={btnState === "warn"}
    class:disabled:bg-red-600={btnState === "error"}
    on:click={onButtonClick}
    disabled={btnDisabled}
>
    <div class="flex items-center justify-center gap-2">
        {#if btnState === "normal"}
            <slot />
        {:else}
            {#if btnState === "in-progress"}
                <CircularProgress class="w-6 h-6" indeterminate />
            {:else if btnState === "success"}
                <OkIcon class="w-6 h-6" />
            {:else if btnState === "warn"}
                <WarnIcon class="w-6 h-6" />
            {:else if btnState === "error"}
                <XIcon class="w-6 h-6" />
            {/if}

            {btnInfoText}
        {/if}
    </div>
</button>
