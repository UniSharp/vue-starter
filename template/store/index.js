export const state = () => ({
  locale: 'en',
  locales: {
    en: 'EN',
    'zh-tw': '繁中',
    'zh-cn': '简中'
  }
})

export const getters = {
  locale: state => state.locale,
  locales: state => state.locales
}

export const mutations = {
  setLocale (state, locale) {
    if (Object.keys(state.locales).indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}
