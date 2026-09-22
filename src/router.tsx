import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    // Matches vite.config.ts's `base` automatically (Vite injects BASE_URL) so
    // links/navigation work whether the app is served at "/" or a subpath.
    basepath: import.meta.env.BASE_URL,
  });

  return router;
};
