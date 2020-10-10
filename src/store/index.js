import Vue from 'vue'
import Vuex from 'vuex'

import baseData from './baseData.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseData,
    blood: 20,
    bloodAll: 20,
    mana: 20,
    manaAll: 20,
    energy: 20,
    energyAll: 20,
    attrsNumObj: {
      defense: 0,
      backInjury: 0,
      treatment: 0,
      suckBlood: 0,
      criticalStrike: 0,
      weaken: 0
    }
  },
  mutations: {
    reduceAttrs (state, { name, num }) {
      const res = (state[name] - num).toFixed(2)
      state[name] = Number(res)
    },
    changeAttrsNumObj (state, { name, type, num }) {
      if (type === 'add') {
        const res = (state.attrsNumObj[name] + num).toFixed(2)
        state.attrsNumObj[name] = Number(res)
      } else if (type === 'reduce') {
        const res = (state.attrsNumObj[name] - num).toFixed(2)
        state.attrsNumObj[name] = Number(res)
      }
    }
  },
  actions: {},
  modules: {}
})
