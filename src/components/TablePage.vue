<template>
  <table class="table-user">
    <caption class="table-title">Список пользователей</caption>
    <thead class="table-user__header">
      <tr class="table-user__header-row">
        <th class="table-user__column" @click="sortedTable('fio')">ФИО пользователя</th>
        <th class="table-user__column" @click="sortedTable('login')">Логин</th>
        <th class="table-user__column" @click="sortedTable('userAge')">Возраст</th>
        <th class="table-user__column" @click="sortedTable('country')">Страна</th>
        <th class="table-user__column" @click="sortedTable('city')">Город</th>
        <th class="table-user__column" @click="sortedTable('registeredAge')">Срок регистрации</th>
      </tr>
    </thead>
    <TableRow v-for="user in users" :key="user.itemId" :user="user" />
  </table>
</template>

<script>
import TableRow from './TableRow.vue';

export default {
  data() {
    return {
      currentSortedColumnDir: true,
    };
  },
  props: ['users', 'sortedColumn', 'sortedColumnDir'],
  components: {
    TableRow,
  },
  methods: {
    sortedTable(value) {
      this.$emit('update:sortedColumn', value);
      this.$emit('update:sortedColumnDir', !this.currentSortedColumnDir);
    },
  },
  watch: {
    sortedColumnDir(value) {
      this.currentSortedColumnDir = value;
    },
  },
};
</script>

<style lang="scss">
.table-title {
  margin-bottom: 15px;
}

.table-user {
  margin: 0 auto;
  border-collapse: collapse;
  caption-side: top;
  table-layout: fixed;
  width: 100%;

  &__header {
    background-color: #cfe2ff;
  }

  &__column {
    border: solid 1px rgb(186, 203, 230);
    padding: 10px;
    font-size: 20px;
  }
}
</style>
