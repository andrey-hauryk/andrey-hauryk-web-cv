import { createApp } from 'vue'
import App from './App.vue'
import "./styles.css"
import VueLazyload from 'vue-lazyload';
import i18n from './i18n';
import router from './router';

const app = createApp(App);

app.use(i18n);
app.use(router);

app.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1,
});

app.mount('#app')
