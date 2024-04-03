<template>
  <div v-if="this.$store.state.userLoading">Данные загружаются...</div>
  <div v-else-if="this.$store.state.userLoadingFailed">Произошла ошибка</div>
  <main v-else-if="user">
    <section class=" section-user user">
      <div class="user-container container">
        <div class="user-top">
          <img class="image user-image" href="#" :src="user.picture.large" :alt="user.name.first" />
        </div>
        <div class="user-content">
          <h2 class="user-title">{{ fio }}</h2>

          <p class="user-descr">{{ user.dob.age }}</p>
          <p class="user-descr">{{user.email}}</p>
          <p class="user-descr">
            <span class="user-location">{{user.location.state}}</span>
            <span class="user-location">{{user.location.country}}</span>
            <span class="user-location">{{user.location.city}}</span>
          </p>
          <p class="user-descr"></p>
          <p class="user-descr"></p>
          <p class="user-descr"></p>
        </div>

      </div>
    </section>
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      userData: {},
    };
  },
  methods: {
    ...mapActions(['userLoad']),

    loadUsersInfo() {
      this.userLoad(this.$route.params.id);
    },
  },

  computed: {
    ...mapGetters(['userInfo']),

    user() {
      return this.userInfo[0];
    },

    fio() {
      return `${this.user.name.title} ${this.user.name.first} ${this.user.name.last}`;
    },
  },
  created() {
    this.loadUsersInfo();
  },
};
</script>

<style lang="scss">
.user-location:not(:last-child) {
  margin-right: 20px;
}
</style>
