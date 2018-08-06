import { getList } from '../service/index';
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
  },
  saveItem(state,{item}){
    console.log(2)
    state.username = item
  }
}

const actions = {
  login ({ commit }, payload) {
    commit('setUser',{username: 'ck',avatar: '123'})
  },
  fetchItem({commit},{id}) {
    console.log(1)
    commit('saveItem', { item: 'lixing' })
  
  }

}

export default {
namespaced: 'index',
  state,
  getters,
  mutations,
  actions
}