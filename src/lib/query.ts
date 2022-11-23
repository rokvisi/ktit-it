import { QueryClient } from "@sveltestack/svelte-query";

const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

export default queryClient;