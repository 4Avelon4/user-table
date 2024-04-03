export default {
  usersList(state) {
    return state.userListData;
  },
  userInfoReload(state) {
    return state.userData;
  },
  userInfo: (state) => (id) => state.userListData.find((item) => item.itemId === id),
};
