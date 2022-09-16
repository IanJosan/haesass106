import Cookies from 'js-cookie'

const TokenKey = 'hrsaas-ihrm-token' // 随意唯一
const TimeKey = 'hrsaas-timestamp-key'
export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

// 获取时间戳
export function getTimeStamp() {
  return Cookies.get(TimeKey)
}

// 读取时间戳
export function setTimeStamp() {
  return Cookies.set(TimeKey, Date.now())
}
