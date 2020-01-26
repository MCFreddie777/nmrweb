import Vue from 'vue';
import router from "./router";
import VueHead from "vue-head";

import store from "./store";
import methods from "./methods";
import filters from "./filters";

import App from './components/App'

window._ = require('lodash');
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// vue-head
Vue.use(VueHead, {
    separator: '|',
    complement: 'NMR a HS'
});

// Methods
Vue.prototype.$methods = methods;

// Filters
Object.keys(filters).forEach(f => {
    Vue.filter(f, filters[f]);
});

const app = new Vue({
    el: '#app',
    components: {
        App,
    },
    router,
    store,
});
