import Vue from 'vue';
import VueRouter from 'vue-router';
import UserView from '@/views/UserView.vue';
import MainView from '../views/MainView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView,
  },
  {
    name: 'user',
    component: UserView,
    path: '/user/:id',
  },
];

const router = new VueRouter({
  routes,
});

export default router;
