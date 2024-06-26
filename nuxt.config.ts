// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/mixins/index.scss" as *;'
        }
      }
    }
  },
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      datoCmsToken: ''
    }
  }
})
