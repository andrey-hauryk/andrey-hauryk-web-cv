import { createRouter, createWebHistory, } from 'vue-router';
import type {RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
import Portfolio from '../views/Portfolio.vue';
import i18n from '../i18n';

const SUPPORTED_LANGUAGES = ['en', 'ru'];

const routes = [
  {
    path: '/:lang',
    component: Portfolio,
    beforeEnter: (to: RouteLocationNormalized, _: any, next: NavigationGuardNext) => {
      const lang = to.params.lang as string;

      if (!SUPPORTED_LANGUAGES.includes(lang)) {
        return next('ru');
      }

      i18n.global.locale.value = lang;
      next();
    },
  },
];

const router = createRouter({
  history: createWebHistory('/andrey-hauryk-web-cv/'),
  routes,
});

export default router;
