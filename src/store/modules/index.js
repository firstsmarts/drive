
const state = {
  username: '',
  avatar: 'world'
}

const getters = {

}

const mutations = {
  setUser (state, payload) {
    state.username = payload.username
    state.avatar = payload.avatar
  }
}

const actions = {
  login ({ commit }, payload) {
    commit('setUser',{username: 'ck',avatar: '123'})
  }
}

export default {
namespaced: 'index',
  state,
  getters,
  mutations,
  actions
}