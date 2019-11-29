import Vue from 'vue'
import Vuex from 'vuex'
// import RandomNumber from './modules/RandomNumber'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: { // 類似 data， 給 state 目的是拿來做比較， 不是拿來寫入
    globalMsg: 'Hello World',
    name: 'peter'
  },
  getters: { // 大推用 map， 因為只有很單純的讀取而已， 資料處理規則

  },
  mutations: {// 類似function， 視為「事件」
    // emit commit dispatch
    SET_GLOBAL_MSG (state, msg) {
      state.globalMsg = msg
    }

  }
  // modules: {
  //   RandomNumber
  // }
})
