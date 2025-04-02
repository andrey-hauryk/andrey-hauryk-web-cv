import { createApp } from 'vue'
import App from './App.vue'
import "./styles.css"
import VueLazyload from 'vue-lazyload';

const app = createApp(App);

app.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1,
});

app.mount('#app')
