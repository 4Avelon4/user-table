<template>
  <table class="table-user">
    <caption>Список пользователей</caption>
    <thead class="table-user__header">
      <tr class="table-user__header-row">
        <th class="table-user__column" data-column="fio">ФИО пользователя</th>
        <th class="table-user__column" data-column="login">Логин</th>
        <th class="table-user__column" data-column="birthday">Возраст</th>
        <th class="table-user__column" data-column="country">Страна</th>
        <th class="table-user__column" data-column="city">Город</th>
        <th class="table-user__column" data-column="registerAge">Срок регистрации</th>
      </tr>
    </thead>
    <TableRow v-for="user in users" :key="user.itemId" :user="user" />
  </table>
</template>

<style lang="scss">
.table-user {
  margin: 0 auto;
  border-collapse: collapse;
  caption-side: top;
  table-layout: fixed;

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

<script>
import TableRow from './TableRow.vue';

export default {
  props: ['users'],
  components: {
    TableRow,
  },
};
</script>
