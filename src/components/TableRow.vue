<template>
  <tr @click="goToUserPage">
    <td class="table-user__row">{{ fio }}</td>
    <td class="table-user__row">{{ user.login.username }}</td>
    <td class="table-user__row">{{ user.dob.age }}</td>
    <td class="table-user__row">{{ user.location.country }}</td>
    <td class="table-user__row">{{ user.location.city }}</td>
    <td class="table-user__row">{{ user.registered.age }}</td>
  </tr>
</template>

<script>
export default {
  props: ['user'],
  computed: {
    fio() {
      return `${this.user.name.title} ${this.user.name.first} ${this.user.name.last}`;
    },
  },
  methods: {
    goToUserPage() {
      this.$router.push({ name: 'user', params: { id: this.user.itemId } });
    },
  },
};
</script>

<style lang="scss">
.table-user__row {
  padding: 10px;
  font-size: 17px;
  font-weight: 400;
  border: solid 1px rgb(222, 226, 230);
}
</style>
