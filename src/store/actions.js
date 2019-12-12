const actions = {
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
  addFun (state) {
    state.count = state.count + 3
  },
  reduceFun (state) {
    state.count = state.count + 8
  }
}

export default actions
