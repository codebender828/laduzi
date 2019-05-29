import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  getters: {
    getAllUsers (state) {
      return state.users
    }
  },
  // -----------------------------------------------------------------------------
  state: () => ({
    users: undefined
  }),
  mutations: {
    UPDATE_USER (state, users) {
      state.users = users
    },
    DELETE_USER (state, payload) {
      const user = state.users.find(user => user === payload.user)
      const newUsers = state.users.filter(eachUser => eachUser !== user)
      state.users = newUsers
    }
  },
  actions: {
    getUsers ({ commit }) {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => commit('UPDATE_USER', users))
        .catch(err => console.error(err))
    }
  }
})

export default store
