// 若不需要考虑兼容性可以不包含babel-polyfill，仅需在入口文件包含,
// ES6在Array对象上新增了Array.from方法。Babel就不会转码这个方法。如果想让这个方法运行，必须使用babel-polyfill，为当前环境提供一个垫片。
import "babel-polyfill";
import "./main.scss";
import "utils/interceptors";
import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
// import store from "./store";
// import routes from "./routes";

import index from "./views/index.vue";
import tabBar from "../../components/tabBar/tab-bar.vue";


Vue.use(VueRouter);
Vue.use(Vuex);

const app = new Vue({
    components: {
        index,
        tabBar
    },
    // store: new Vuex.Store(store),
    // router: new VueRouter(routes),

}).$mount("#app");
