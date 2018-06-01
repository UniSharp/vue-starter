import Cookie from 'js-cookie'

export default {
  asyncData ({ store, redirect }) {
    Cookie.remove('api_token')

    store.commit('auth/logout')

    redirect('/')
  }
}
