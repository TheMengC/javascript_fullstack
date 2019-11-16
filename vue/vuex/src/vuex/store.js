import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1
}

const mutations = {
  add (state, n) {
    state.count += n
  },
  reduce (state) {
    state.count --
  }
}
//mutations 和 actions 都是来调用方法 ， mutations中的所有方法是同步的， actions中的所有方法是异步的
const actions = {
  addAction (context, status) {
    context.commit('add', status)
  },
  reduceAction ({commit}) {
    setTimeout(() => {
      commit('reduce')
    }, 3000)
    console.log('我比reduce先执行')
  }
}

//计算属性
const getters = {
  getCount: (state) => {
    return state.count + 100
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})