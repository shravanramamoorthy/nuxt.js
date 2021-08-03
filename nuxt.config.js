export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'my-nuxt-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/date-filter.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: "https://nuxt-blog-7c432-default-rtdb.firebaseio.com"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  axios: {
    baseURL: "https://nuxt-blog-7c432-default-rtdb.firebaseio.com"
  },
  router: {
    middleware: 'log'
  },
  env: {
    fbAPIkey: 'AIzaSyDBUfhztM3q3lmQgwfRzpr7kLuLIfnBUrE'
  }
}
