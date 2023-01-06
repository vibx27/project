import { createPinia } from "pinia";
import Antd from 'ant-design-vue';
import { createApp } from "vue";
import router from './router'
import App from './App.vue';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(Antd);

app.mount('#app');
