import type { RouteRecordRaw } from 'vue-router';
import HomeView from './views/Home.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'root', redirect: '/home' },
  { path: '/home', name: 'homepage', component: HomeView }
];

export default routes;
