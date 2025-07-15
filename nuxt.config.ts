import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/icon",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxt/test-utils",
    "@pinia/nuxt",
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/app.css"],
  imports: {
    dirs: ['stores'],
  },
});
