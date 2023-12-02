// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.css', '@fortawesome/fontawesome-svg-core/styles.css'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_colors.scss" as *;'
        }
      }
    }
  },
  build: {
    transpile: ['vuetage']
  },
  modules: [
    'nuxt-particles',
    '@nuxt/content'
  ],
  content: {
    markdown: {
      tags: {
        p: 'P'
      }
    },
    highlight: {
      theme: 'github-light'
    },
  },
  plugins: [
    '~/plugins/fontawesome.ts'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
})
