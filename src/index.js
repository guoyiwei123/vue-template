import { createApp } from "vue";
import {createRouter, createWebHistory} from "vue-router";
import { createPinia } from "pinia";
import routes from "~config/router";
import App from "./App";
import "~styles/index.scss";
const router = createRouter({
    history: createWebHistory(),
    routes
});
createApp(App)
    .use(createPinia())
    .use(router)
    .mount("#app");
