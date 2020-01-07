import Vue from 'vue';
import router from "./router";
import App from './components/App'

window._ = require('lodash');
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const app = new Vue({
    el: '#app',
    components: {
        App,
    },
    router
});
