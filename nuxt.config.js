export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'portfolio',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['element-ui/lib/theme-chalk/index.css', '@/assets/scss/index.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/element-ui'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyBoA8ECjHaj8wZxiLFt_DxJdL2rv1eB6X0',
          authDomain: 'portfilio-4f019.firebaseapp.com',
          projectId: 'portfilio-4f019',
          storageBucket: 'portfilio-4f019.appspot.com',
          messagingSenderId: '803698262342',
          appId: '1:803698262342:web:6c22e0afa6748c6368e547',
        },
        services: {
          auth: true,
        },
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },
}
