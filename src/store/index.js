import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userProfile: {name:null},
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val
    },
  },
  actions: {
    async fetchUserProfile({commit}, user) {
      commit('setUserProfile', user.displayName)
},
  },
})
