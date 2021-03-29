import {createStore, createLogger} from "vuex";
import test from "./test";
const store = createStore({
    modules: {test},
    plugins: [createLogger()]
});

export default store;