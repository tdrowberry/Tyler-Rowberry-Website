// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { fileURLToPath } from "node:url";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// The wrapper's own "@" alias resolves against process.cwd(), which is only this
// project's root when something is actually launched from inside it. A launcher
// that starts the dev server from elsewhere (passing this folder as an argument,
// not as its own cwd) leaves process.cwd() pointed at the wrong directory, and
// every "@/..." import fails to resolve. Override it with a path resolved from
// this config file's own location instead, which is correct regardless of cwd.
const srcDir = fileURLToPath(new URL("./src", import.meta.url));

// GitHub Pages serves a project repo (not a <user>.github.io repo) from a subpath
// matching the repo name, e.g. https://tdrowberry.github.io/Tyler-Rowberry-Website/.
// The deploy workflow sets GH_PAGES_BASE; local dev/build defaults to "/" so
// `npm run dev` / `npm run build` behave normally without it.
const base = process.env["GH_PAGES_BASE"] || "/";
const isStaticBuild = base !== "/";

export default defineConfig({
  tanstackStart: {
    // src/server.ts is a custom SSR error wrapper written for a *live* server
    // (originally Cloudflare Workers). It has no role in a fully prerendered
    // static build (no server runs at request time), and its dynamic
    // `import("@tanstack/react-start/server-entry")` indirection is
    // incompatible with the in-process server the prerenderer boots to
    // crawl routes (fails with "server.fetch is not a function"). Only
    // redirect to it for the live-server build; let prerendering use
    // TanStack Start's own default entry.
    ...(isStaticBuild ? {} : { server: { entry: "server" } }),
    // Prerender every route to static HTML at build time so the site can be hosted
    // on GitHub Pages (or any static host) with no server process at all.
    // crawlLinks follows every same-origin <a href>, including the plain
    // (non-Link) résumé download href — filter out anything with a file
    // extension so only real app routes get queued as pages to render.
    prerender: {
      enabled: isStaticBuild,
      crawlLinks: true,
      autoStaticPathsDiscovery: true,
      filter: (page: { path: string }) => !/\.[a-z0-9]+$/i.test(page.path),
    },
    // GitHub Pages has no server to run TanStack Start's own route matching,
    // so unmatched paths need a static fallback. `spa` prerenders a route-
    // neutral app shell (headers: TSS_SHELL) to _shell.html, instead of
    // reusing one specific page's prerendered (and route-specific) HTML --
    // reusing a real page's output here throws a hydration "Invariant
    // failed" once the browser URL doesn't match that page's baked-in
    // router state. The deploy workflow copies _shell.html to 404.html.
    spa: isStaticBuild ? { enabled: true } : undefined,
  },
  vite: { base, resolve: { alias: { "@": srcDir } } },
});
