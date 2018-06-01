export default ({ store, redirect }) => {
  if (store.state.auth.check) {
    redirect('/')
  }
}
