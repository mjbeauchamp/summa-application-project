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
      console.log(state.userIsLoggedIn)
    },

    loggedOut (state) {
      state.userIsLoggedIn = false
      console.log(state.userIsLoggedIn)
    }
  },
  actions: {

  }
})
