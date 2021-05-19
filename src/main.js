import Vue      from 'vue';
import App      from './App.vue';
import router   from "./router";
import store    from "./store";

export default () => {
    const app = new Vue({
        router,
        store,
        render: h => {
            return h(App)
        }
    })
    return { app, router, store }
}