const webpack = require('webpack')
const StylelintPlugin = require('stylelint-webpack-plugin')
const polyfills = [
  'Promise',
  'Object.assign',
  'Object.values',
  'Array.prototype.find',
  'Array.prototype.findIndex',
  'Array.prototype.includes',
  'String.prototype.includes',
  'String.prototype.padStart',
  'String.prototype.padEnd',
  'String.prototype.repeat',
  'String.prototype.startsWith',
  'String.prototype.endsWith'
]

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '{{ name }}',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '{{ escape description }}' },
      { hid: 'author', name: 'author', content: '{{ name }}' },
      { hid: 'description', name: 'description', content: '{{ escape description }}' },
      { hid: 'og:title', property: 'og:title', content: '{{ name }}' },
      { hid: 'og:description', property: 'og:description', content: '{{ escape description }}' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:site_name', property: 'og:site_name', content: '{{ name }}' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: `https://cdn.polyfill.io/v2/polyfill.min.js?features=${polyfills.join(',')}` },
      { src: 'https://maps.googleapis.com/maps/api/js' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Global css
  */
  css: [
    { src: '~/assets/scss/main.scss', lang: 'scss' }
  ],
  /*
  ** Plugins
  */
  plugins: [
    '~/plugins/FontAwesome',
    '~/plugins/Skrollr',
    '~/plugins/Aos',
    {{# i18n }}
    '~/plugins/VueI18n',
    {{/ i18n }}
    {{# auth }}
    '~/plugins/Axios',
    {{/ auth }}
    '~/plugins/Helpers'
  ],
  {{# auth }}
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  /*
  ** Axios configuration
  */
  axios: {
    baseURL: process.env.API_BASE || '/api/v1'
  },
  {{/ auth }}
  /*
  ** Router configuration
  */
  router: {
    middleware: [
      {{# i18n }}
      'i18n'{{# auth }},{{/ auth }}
      {{/ i18n }}
      {{# auth }}
      'check-auth'
      {{/ auth }}
    ],
    {{# travis }}
    base: '/vue-starter/',
    {{/ travis }}
    scrollBehavior (to, from, savedPosition) {
      return new Promise(resolve => {
        let scrollTo = (selector) => {
          let scrollTop = 0

          if (to.hash !== '#' && $(to.hash).length) {
            scrollTop = $(to.hash).offset().top
          }

          $('html, body').stop(true, true).animate({ scrollTop })

          return resolve(false)
        }

        if (savedPosition) {
          return resolve(savedPosition)
        }

        if (from.path !== to.path && to.hash) {
          return window.$nuxt.$once('pageMounted', () => {
            return scrollTo(to.hash)
          })
        }

        if (to.hash) {
          return scrollTo(to.hash)
        }

        if (from.path === to.path && !from.hash) {
          return resolve(false)
        }

        return resolve({ x: 0, y: 0 })
      })
    }
  },
  /*
  ** SPA mode
  */
  mode: 'spa',
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Babel configuration
    */
    babel: {
      plugins: [
        '@unisharp/helpers.js/plugin/lib'
      ]
    },
    /*
    ** Plugins
    */
    vendor: [
      'jquery',
      'popper.js',
      'bootstrap',
      'mobile-detect',
      'skrollr',
      'aos',
      {{# i18n }}
      'vue-i18n',
      {{/ i18n }}
      {{# auth }}
      'js-cookie',
      'axios',
      {{/ auth }}
      '@unisharp/helpers.js'
    ],
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery',
        Popper: 'popper.js'
      })
    ],
    /*
    ** Run PUGLINT, ESLINT and STYLELINT on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(vue)$/,
          loader: 'vue-pug-lint-loader',
          options: require('./.puglintrc.js'),
          exclude: /(node_modules)/
        })

        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })

        config.plugins.push(new StylelintPlugin({
          files: ['**/*.scss', '**/*.vue'],
          syntax: 'scss'
        }))
      }
    }
  }
}
