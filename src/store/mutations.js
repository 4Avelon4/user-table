export default {
  updateUserListData(state, usersDataInfo) {
    state.userData = {};

    state.userListData = usersDataInfo;
  },
  userDetailInfo(state, user) {
    state.userData = user.results;
  },
  userLoadingChecking(state, flag) {
    state.userLoading = flag;
  },
  userLoadingFailedChecking(state, flag) {
    state.userLoadingFailed = flag;
  },
  userListLoadingChecking(state, flag) {
    state.userLoading = flag;
  },
  userListLoadingFailedChecking(state, flag) {
    state.userLoadingFailed = flag;
  },
};
