import { defineConfig } from 'astro/config';
export default defineConfig({
  site: "https://datumint.no",
  server: { host: true },
  // base: "/datumint_consulting", // Removed for root domain deployment
});
