<template>
  <table class="table-user">
    <caption class="table-title">Список пользователей</caption>
    <thead class="table-user__header">
      <tr class="table-user__header-row">
        <th class="table-user__column">ФИО пользователя</th>
        <th class="table-user__column">Логин</th>
        <th class="table-user__column">Возраст</th>
        <th class="table-user__column">Страна</th>
        <th class="table-user__column">Город</th>
        <th class="table-user__column">Срок регистрации</th>
      </tr>
    </thead>
    <TableRow v-for="user in users" :key="user.itemId" :user="user" />
  </table>
</template>

<script>
import TableRow from './TableRow.vue';

export default {
  props: ['users'],
  components: {
    TableRow,
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
