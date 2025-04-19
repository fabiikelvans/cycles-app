// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
    resolve: {
      alias: {
        '@phosphor-icons/vue/dist/icons/PhGift.vue.mjs': '',
        '@phosphor-icons/vue/dist/icons/PhGif.vue.mjs': '',
        '@phosphor-icons/vue/dist/icons/PhPaintBrush.vue.mjs': '',
      }
    }
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    'shadcn-nuxt'
  ],
  plugins: [{ src: "~/plugins/apexcharts.ts", mode: "client" }],
  app: {
    head: {
      title: `Cycles `,
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { property: "og:title", content: "Cycles App" },
        { property: "og:description", content: "Cycles App" },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Cycles App" },
        { name: 'description', content: "Cycles App" },
      ],
    }
  },

})
