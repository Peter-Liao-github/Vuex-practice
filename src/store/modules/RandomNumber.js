export default {
  namespaced: true,
  state: {
    number: 0

  },
  mutations: {
    SET_RANDOM_NUMBER () {

    }
  },
  actions: {
    GET_RANDOM_NUMBER ({ rootState, commit }, payload) {
      // 當模組需要讀全域時， 使用 rootState
      // console.log(context)
      if (rootState) {

      }
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // let num = Math.random()
          commit('SET_RANDOM_NUMBER')
        }, 3000)
      })
    }
  }
}
