import Cookie from 'js-cookie'

export default async ({ app, store, req, redirect, route }) => {
  let user = store.state.auth.user
  let token = Cookie.get('api_token')

  if (!token || user.email) {
    return
  }

  app.$axios.setToken(token, 'Bearer')

  // fetch user data
  try {
    let { user } = await app.$axios.$get('user/me')

    if (!user) {
      Cookie.remove('api_token')

      console.error('user fetch error')

      return true
    }

    store.commit('auth/login', user)
  } catch (e) {
    if (e.response.data.error.code === 401) {
      Cookie.remove('api_token')

      store.commit('auth/logout')
    }
  }
}
