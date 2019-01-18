import Vue from 'vue'
import Vuex from 'vuex'
import system from '@/modules/system/store'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    system
  }
})

export default store
