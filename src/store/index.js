import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {},
  state: {
    name: ''
  },
  mutations: {
    username(state, data) {
      state.name = data
    }
  },
  strict: debug
})
