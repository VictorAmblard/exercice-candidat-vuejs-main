import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listCompanyA: [],
    listCompanyB: []
  },
  mutations: {
    setListCompanyA (state, companies) {
      state.listCompanyA = companies
    },
    moveItem (state) {
      if (state.listCompanyA.length > 0) {
        state.listCompanyB.push(state.listCompanyA[state.listCompanyA.length - 1])
        state.listCompanyA.pop()
      }
    }
  },
  actions: {
    moveCompany (context) {
      context.commit('moveItem')
    }
  },
  modules: {
  }
})
