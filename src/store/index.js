import Vue from 'vue';
import Vuex from 'vuex';
import { listRequest, userRequest, listRequestPagination } from '@/api/list';
import { nanoid } from 'nanoid';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userListData: {},
    userData: {},

    userLoading: false,
    userLoadingFailed: false,

    userListLoading: false,
    userListLoadingFailed: false,
  },
  getters: {
    usersList(state) {
      return state.userListData;
    },
    userInfo(state) {
      return state.userData;
    },
  },
  mutations: {
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
  },
  actions: {
    async loadUsers(context, numberUsers) {
      context.commit('userListLoadingChecking', true);
      context.commit('userListLoadingFailedChecking', false);

      try {
        await new Promise((resolve) => setTimeout(resolve, 0));
        const response = await listRequest(numberUsers);

        const userListId = response.data.results.map((item) => ({
          ...item,
          itemId: nanoid(),
        }));

        context.commit('updateUserListData', (userListId));
      } catch {
        context.commit('userListLoadingFailedChecking', true);
      }

      context.commit('userListLoadingChecking', false);
    },
    async userLoad(context, id) {
      context.commit('userLoadingChecking', true);
      context.commit('userLoadingFailedChecking', false);

      try {
        await new Promise((resolve) => setTimeout(resolve, 0));
        const response = await userRequest(id);

        context.commit('userDetailInfo', (response.data));
      } catch {
        context.commit('userLoadingFailedChecking', true);
      }

      context.commit('userLoadingChecking', false);
    },
    async loadPagination(context, { page, perPage }) {
      clearTimeout(this.loadProductsTimer);

      this.loadProductsTimer = setTimeout(async () => {
        const response = await listRequestPagination(page, perPage);

        context.commit('updateUserListData', (response.data));
      }, 0);
    },
  },
  modules: {
  },
});
