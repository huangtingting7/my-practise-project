// Getters：

// Getter相当于vue中的computed计算属性，
// getter 的返回值会根据它的依赖被缓存起来，
// 且只有当它的依赖值发生了改变才会被重新计算，
// 这里我们可以通过定义vuex的Getter来获取，
// Getters 可以用于监听、state中的值的变化，
// 返回计算后的结果，这里我们修改Hello World.vue文件如下：
const mutations = {
  // menuList: state => state.menu.menuList,
  // leftmenuList: state => state.menu.leftmenuList,
  // showSearchAll: state => state.menu.showSearchAll,
  // userData: state => state.user.userData,
  // buttonStatusList: state => state.user.buttonStatusList,
  // userRoleData: state => state.user.userRoleData,
  // betaAccountList: state => state.login.betaAccountList,
  // showOrderSearchAll: state => state.menu.showOrderSearchAll,
  // guest (state) {
  //     if (localStorage.getItem('guest')) {
  //         state.user.guest = localStorage.getItem('guest')
  //     }
  //     return state.user.guest
  // }
  add (state) {
    state.count = state.count + 3
  },
  reduce (state) {
    state.count = state.count + 8
  }
}

export default mutations
