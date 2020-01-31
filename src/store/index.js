import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    areaList: []
  },
  mutations: {
    SET_AREA: (state, data) => {
      state.areaList = data
    }
  },
  actions: {},
  modules: {}
})
