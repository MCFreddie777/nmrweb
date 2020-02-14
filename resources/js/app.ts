import Vue from 'vue';
import router from "./router";
import VueHead from "vue-head";

import store from "./store";
import methods from "./methods";
import filters from "./filters";

import App from './components/App.vue'

import Axios, {AxiosStatic} from 'axios';
import * as _ from "lodash";
import {Route} from "vue-router";

declare global {
    // Extending the DOM Window Interface
    interface Window {
        axios: AxiosStatic;
        _: _.LoDashStatic
    }

    // Extending querySelector Element
    interface Element {
        content: string;
    }
}

declare var window: Window;

window.axios = Axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// vue-head
Vue.use(VueHead, {
    separator: '|',
    complement: 'NMR a HS'
});

// Methods
Vue.prototype.$methods = methods;

// Debug flag
Vue.prototype.$debug = true;

// Filters
Object.keys(filters).forEach((f) => {
    // @ts-ignore
    Vue.filter(f, filters[f]);
});

router.beforeEach((_to: Route, _from: Route, next: Function) => {
    store.dispatch('ModalStore/dismiss');
    store.dispatch('AlertStore/dismiss');
    next();
});

new Vue({
    el: '#app',
    components: {App},
    router,
    store,
});
