import { createApp } from "vue";
import {createRouter, createWebHistory} from "vue-router";
import "@styles/index.scss";
import routes from "@config/router";
import store from "./store";
import App from "./App";
const router = createRouter({
    history: createWebHistory(),
    routes
});
createApp(App)
    .use(router)
    .use(store)
    .mount("#app");
