import Cookie from 'js-cookie'

export default function ({ $axios }) {
  $axios.onRequest(config => {
    let token = Cookie.get('api_token')

    if (token) {
      $axios.setToken(token, 'Bearer')
    }
  })

  $axios.onResponse(response => {
    let authorization = response.headers.authorization

    if (authorization) {
      Cookie.set('api_token', authorization.split(' ').pop())
    }

    return response
  })
}
