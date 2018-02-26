import Cookie from 'js-cookie'

export default function ({ isHMR, app, store, route, params, error, redirect }) {
  // If middleware is called from hot module replacement, ignore it
  if (isHMR) {
    return
  }

  // Get locale
  const locale = params.locale || Cookie.get('locale') || 'en'

  if (Object.keys(store.getters.locales).indexOf(locale) === -1) {
    return error({ message: 'This page could not be found.', statusCode: 404 })
  }

  // Set locale
  Cookie.set('locale', locale)
  store.commit('setLocale', locale)
  app.i18n.locale = store.state.locale
}
