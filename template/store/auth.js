export const state = () => ({
  check: false,
  user: {}
})

export const mutations = {
  login (state, user) {
    state.user = user
    state.check = true
  },
  logout (state) {
    state.user = {}
    state.check = false
  }
}
