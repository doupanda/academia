/*!

 =========================================================
 * Nuxt Black Dashboard PRO - v1.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/nuxt-black-dashboard-pro
 * Copyright 2019 Creative Tim (https://www.creative-tim.com)

 * Coded by Creative Tim

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */
export default {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nuxt Black Dashboard PRO by Creative Tim',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700,800'},
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css'}
    ],
    bodyAttrs: {
      class: 'sidebar-mini' // delete the class to have the sidebar expanded by default. Add `white-content` class here to enable "white" mode.
    }
  },
  router: {
    linkExactActiveClass: 'active'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    'assets/css/demo.css',
    'assets/css/nucleo-icons.css',
    'assets/sass/black-dashboard-pro.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    `~/plugins/dashboard-plugin.js`,
    { src: '~/plugins/full-calendar.js', ssr: false },
    { src: '~/plugins/world-map.js', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next',
    '@nuxtjs/axios'
  ],

  axios: {
    baseURL: process.env.BASE_URL
  },

  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    babel: {
      plugins: [
        [
          'component',
          {
            'libraryName': 'element-ui',
            'styleLibraryName': 'theme-chalk'
          }
        ]
      ]
    }
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          required: true,
          type: '',
          maxAge: 2592000
        },
        user: {
          property: 'userData',
          autoFetch: true
        },
        endpoints: {
          login: { url: '/user-login', method: 'post' },
          user: { url: '/user-get', method: 'get' },
          logout: { url: '/user-logout', method: 'post' }
        },
        redirect: {
          login: '/login',
          logout: '/',
          callback: '/login',
          home: '/miscursos'
        },
        tokenType: ''

      }
    }
  }
}
