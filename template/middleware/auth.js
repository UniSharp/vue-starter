export default ({ app, store, redirect, params }) => {
  if (!store.state.auth.check) {
    {{# i18n }}
    redirect(`/${params.locale}/auth/login`)
    {{ else }}
    redirect('/auth/login')
    {{/ i18n }}
  }
}
