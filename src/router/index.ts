import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
// import Experience from '../views/Experience.vue';
// import Involvements from '../views/Involvements.vue';
// import Projects from '../views/Projects.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    // { path: '/experience', component: Experience },
    // { path: '/involvements', component: Involvements },
    // { path: '/projects', component: Projects },
  ],
});

export default router;