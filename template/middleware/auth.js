export default ({ app, store, redirect, params }) => {
  if (!store.state.auth.check) {
    redirect(`/${params.locale}/login`)
  }
}
