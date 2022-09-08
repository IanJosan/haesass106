import Cookies from 'js-cookie'

const TokenKey = 'hrsaas-ihrm-token' // 随意唯一

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
