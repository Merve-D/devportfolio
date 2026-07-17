// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://merve-d.github.io",
  base: "/devportfolio/",
  vite: {
    plugins: [tailwindcss()],
  },
});