<script lang="ts">
    type ValueOptions = {
        text: string;
        variant: "success" | "warn" | "error";
        hidden: boolean;
    };
    const options: ValueOptions = {
        text: "",
        variant: "warn",
        hidden: true,
    };

    export let divClass: string | undefined = undefined;

    export const showInfoBox = (
        text: string,
        variant: "success" | "warn" | "error",
        ms: number
    ) => {
        options.text = text;
        options.variant = variant;
        options.hidden = false;

        setTimeout(() => (options.hidden = true), ms);
    };
</script>

<div
    hidden={options.hidden}
    class={`shadow-inner  p-2 ${divClass}`}
    class:success={options.variant === "success"}
    class:warn={options.variant === "warn"}
    class:error={options.variant === "error"}
>
    <p class="text-center">{options.text}</p>
</div>

<style type="postcss">
    .success {
        @apply bg-green-200 text-green-700;
    }
    .error {
        @apply bg-red-200 text-red-700;
    }
    .warn {
        @apply bg-yellow-200 text-yellow-700;
    }
</style>
