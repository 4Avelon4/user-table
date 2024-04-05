<template>
  <tr @click="goToUserPage" class="table-user__row">
    <td class="table-user__cell">{{ fio }}</td>
    <td class="table-user__cell">{{ user.login }}</td>
    <td class="table-user__cell">{{ user.userAge }}</td>
    <td class="table-user__cell">{{ user.location.country }}</td>
    <td class="table-user__cell">{{ user.location.city }}</td>
    <td class="table-user__cell">{{ user.registeredAge }}</td>
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
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, .075);
  }
}

.table-user__cell {
  padding: 10px;
  font-size: 17px;
  font-weight: 400;
  border: solid 1px rgb(222, 226, 230);
}
</style>
