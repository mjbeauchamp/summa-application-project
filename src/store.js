import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userIsLoggedIn: false
  },
  mutations: {
    loggedIn (state) {
      state.userIsLoggedIn = true
    },

    loggedOut (state) {
      state.userIsLoggedIn = false
    }
  },
  actions: {

  }
})
