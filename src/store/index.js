import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

// State

// vuex中的数据源，我们需要保存的数据就保存在这里，可以在页面通过 this.$store.state来获取我们定义的数据
// 创建一个vuex实例

const store = new Vuex.Store({
  state: {
    count: 2
  },
  mutations,
  actions,
  // modules: {
  //     menu,
  //     user,
  //     login
  // },
  getters
})
// 导出
export default store
