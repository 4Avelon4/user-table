<template>
  <div class="form__block">
    <legend class="form__legend">Элементов на странице</legend>
    <label class="form__label form__label--select form__label--page" for="select">
      <select class="form__select form__select--page" type="text" name="category" id="select"
        v-model.number="currentUsersPerPage" @change="onChangeSelect">
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
      </select>
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentUsersPerPage: this.usersPerPage || 6,
    };
  },
  props: ['usersPerPage'],
  watch: {
    usersPerPage(value) {
      this.currentUsersPerPage = value;
    },
  },
  methods: {
    onChangeSelect() {
      this.$emit('update:usersPerPage', this.currentUsersPerPage);
    },
  },
};
</script>

<style lang="scss">
.form__block {
  margin-bottom: 15px;
}
</style>
