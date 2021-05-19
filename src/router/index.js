import Vue          from "vue";
import VueRouter    from "vue-router";
import VueMeta      from "vue-meta";
import store        from "../store";
import pipe         from "./pipe";

import publicRouter from "./public";
import adminRouter  from "./admin";

Vue.use(VueRouter)
Vue.use(VueMeta, {
    refreshOnceOnNavigation: true
})

const router = new VueRouter({
    mode: 'history',
    routes: [{...adminRouter},{...publicRouter}],
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
});
router.beforeEach((to, from, next) => {
    const middlewares = to.matched.reduce((results, obj) => {
        if (obj.meta.middleware) return results = results.concat(obj.meta.middleware);
        return results;
    }, []);
    return pipe({middlewares: middlewares, index: 0, store: store, next: next});
})

export default router;