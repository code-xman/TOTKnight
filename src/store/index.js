import Vue from 'vue'
import Vuex from 'vuex'

import baseData from './baseData.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseData,
    attrsBarObj: {
      blood: 20,
      bloodAll: 20,
      mana: 20,
      manaAll: 20,
      energy: 20,
      energyAll: 20
    },
    attrsNumObj: {
      defense: 0,
      backInjury: 0,
      treatment: 0,
      suckBlood: 0,
      criticalStrike: 0,
      weaken: 0
    },
    bossAttrObj: {
      blood: 100,
      bloodAll: 100
    }
  },
  mutations: {
    // 改变玩家红黄蓝属性
    changeAttrsBarObj (state, { name, type, num }) {
      if (type === 'add') {
        const res = (state.attrsBarObj[name] + num).toFixed(2)
        state.attrsBarObj[name] =
          Number(res) >= state.attrsBarObj[name + 'All']
            ? state.attrsBarObj[name + 'All']
            : Number(res)
      } else if (type === 'reduce') {
        const res = (state.attrsBarObj[name] - num).toFixed(2)
        state.attrsBarObj[name] = Number(res)
      }
    },
    // 改变玩家属性
    changeAttrsNumObj (state, { name, type, num }) {
      if (type === 'add') {
        const res = (state.attrsNumObj[name] + num).toFixed(2)
        state.attrsNumObj[name] = Number(res)
      } else if (type === 'reduce') {
        const res = (state.attrsNumObj[name] - num).toFixed(2)
        state.attrsNumObj[name] = Number(res)
      }
    },
    // 改变boss属性
    changeBossAttrObj (state, { name, type, num }) {
      if (type === 'add') {
        const res = (state.bossAttrObj[name] + num).toFixed(2)
        state.bossAttrObj[name] = Number(res)
      } else if (type === 'reduce') {
        const res = (state.bossAttrObj[name] - num).toFixed(2)
        state.bossAttrObj[name] = Number(res)
      }
    }
  },
  actions: {},
  modules: {}
})
