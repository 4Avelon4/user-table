import { listRequest, userRequest, listRequestPagination } from '@/api/list';
import { nanoid } from 'nanoid';

export default {
  async loadUsers(context, numberUsers) {
    context.commit('userListLoadingChecking', true);
    context.commit('userListLoadingFailedChecking', false);

    try {
      await new Promise((resolve) => setTimeout(resolve, 0));
      const response = await listRequest(numberUsers);

      const userListId = response.data.results.map((item) => ({
        ...item,
        fio: `${item.name.title} ${item.name.first} ${item.name.last}`,
        login: item.login.username,
        userAge: item.dob.age,
        registeredAge: item.registered.age,
        country: item.location.country,
        city: item.location.city,
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
};
