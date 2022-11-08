<script lang="ts">
    import "../app.css";
    import Header from "$components/Header.svelte";
    import queryClient from "$lib/query";
    import { QueryClientProvider } from '@sveltestack/svelte-query'
</script>

<QueryClientProvider client={queryClient}>
    <Header />
    <main class="mx-5">
        <slot />
    </main>
</QueryClientProvider>
