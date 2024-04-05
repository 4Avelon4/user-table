<template>
  <div v-if="this.$store.state.userListLoading">Данные загружаются...</div>
  <div v-else-if="this.$store.state.userListLoadingFailed">Произошла ошибка</div>
  <main v-else-if="users">
    <h1 class="title">Таблица пользователей</h1>
    <section class="section-user">
      <div class="user-container container">
        <UsersPerPage :users-per-page.sync="usersPerPage" />

        <BasePagination :page.sync="page" :count="countUsers" :per-page="usersPerPage" />

        <TablePage :users="users" :sorted-column.sync="column" :sorted-column-dir.sync="columnDir" />

        <BasePagination :page.sync="page" :count="countUsers" :per-page="usersPerPage" />
      </div>
    </section>
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TablePage from '@/components/TablePage.vue';
import BasePagination from '@/components/BasePagination.vue';
import UsersPerPage from '@/components/UsersPerPage.vue';

export default {
  data() {
    return {
      usersData: {},

      page: 1,
      usersPerPage: 10,

      column: 'fio',
      columnDir: true,
    };
  },
  computed: {
    ...mapGetters(['usersList']),

    usersArray() {
    // users() {
      return this.usersList
        ? this.usersList : [];
    },
    countUsers() {
      if (!this.usersArray.length) {
        return 0;
      }
      return this.usersArray.length;
    },
    users() {
      if (!this.usersArray.length) {
        return [];
      }

      const usersCopy = this.getSortUsers(this.column, this.columnDir);

      const offset = (this.page - 1) * this.usersPerPage;

      return usersCopy.slice(offset, offset + this.usersPerPage);
    },
  },
  methods: {
    ...mapActions(['loadUsers', 'userLoad', 'loadPagination']),
    // ...mapActions(['loadPagination']),

    // loadUsersMain() {
    //   this.loadUsers(100);
    //   // this.loadPagination({
    //   //   page: this.page,
    //   //   perPage: this.usersPerPage,
    //   // });
    // },
    getSortUsers(prop, dir) {
      const usersCopy = [...this.usersArray];

      return usersCopy.sort((userA, userB) => {
        const dirIf = dir === false ? userA[prop] < userB[prop] : userA[prop] > userB[prop];

        if (!dirIf) {
          return -1;
        }

        return 1;
      });
    },
  },
  watch: {
    usersPerPage: {
      handler() {
        this.page = 1;
        // this.loadUsersMain();
      },
      // immediate: true,
    },
    // page: {
    //   handler() {
    //     this.loadUsersMain();
    //   },
    //   // immediate: true,
    // },
    column() {
      this.getSortUsers(this.column, this.columnDir);
    },
    columnDir() {
      this.getSortUsers(this.column, this.columnDir);
    },
  },
  created() {
    this.loadUsers(100);
  },
  components: {
    TablePage, BasePagination, UsersPerPage,
  },
};

</script>

<style lang="scss">
.container {
  max-width: 1600px;
  margin: 0 auto;
}

.title {
  margin: 0;
  margin-bottom: 30px;
}
</style>
