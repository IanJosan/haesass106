import { getToken, setToken, removeToken } from '@/utils/auth'
import { login } from '@/api/user'
// 放置状态
const state = {
  token: getToken() // 设置token为共享
}
const mutations = {
  setToken(state, token) {
    state.token = token
    setToken(token) // 数据持久化
  },
  removeToken(state) {
    state.token = null
    removeToken()
  }
}
const actions = {
  async login(context, data) {
    const result = await login(data)
    if (result.data) {
      context.commit('setToken', result.data.data)
    }
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
