import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'en',
    messages: {
      en: require('~/locales/en.js'),
      'zh-tw': require('~/locales/zh-tw.js'),
      'zh-cn': require('~/locales/zh-cn.js')
    }
  })

  app.i18n.path = (link) => {
    return `/${app.i18n.locale}${link}`.replace(/\/+$/, '')
  }
}
