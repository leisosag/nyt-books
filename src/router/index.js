import Vue from 'vue';
import VueRouter from 'vue-router';
import Book from '../views/Book.vue';
import MoreBooks from '../views/MoreBooks.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/book',
    name: 'Book',
    component: Book,
  },
  {
    path: '/morebooks',
    name: 'MoreBooks',
    component: MoreBooks,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
