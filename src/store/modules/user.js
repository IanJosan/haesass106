import { getToken, setToken, removeToken, setTimeStamp } from '@/utils/auth'
import { login, getUserInfo, getUserDetailById } from '@/api/user'
// 放置状态
const state = {
  token: getToken(), // 设置token为共享
  userInfo: {}
}
const mutations = {
  setToken(state, token) {
    state.token = token
    setToken(token) // 数据持久化
  },
  removeToken(state) {
    state.token = null
    removeToken()
  },
  setUserInfo(state, result) {
    state.userInfo = result
  },
  removeUserInfo(state) {
    state.userInfo = {}
  }
}
const actions = {
  async login(context, data) {
    const result = await login(data) // 拿到token

    context.commit('setToken', result) // 设置token
    setTimeStamp()
  },
  async getUserInfo(context) {
    const result = await getUserInfo()
    const baseInfo = await getUserDetailById(result.userId)
    context.commit('setUserInfo', { ...result, ...baseInfo }) // 合并提交到mutations
    return result
  },
  logout(context) {
    context.commit('removeToken')
    context.commit('removeUserInfo')
  }

}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
