import { createApp } from 'vue';
import {createRouter, createWebHistory} from 'vue-router';
import { createPinia } from 'pinia';
import routes from '~config/router';
import App from './App';
import '~styles/index.scss';
import mediaLazy from './plugins/mediaLazy';
import clipboard from './plugins/clipboard';
const router = createRouter({
    history: createWebHistory(),
    routes
});
createApp(App)
    .use(createPinia())
    .use(mediaLazy)
    .use(clipboard)
    .use(router)
    .mount('#app');
