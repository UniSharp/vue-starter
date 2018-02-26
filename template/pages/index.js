export default {
  asyncData ({ store, redirect }) {
    redirect(`/${store.getters.locale}`)
  }
}
