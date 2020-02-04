import Vue from 'vue'
import Vuex from 'vuex'

// Stores definition
import AlertStore from './modules/alert.store'
import SampleStore from './modules/sample.store'
import TableStore from "./modules/table.store";
import AppStore from "./modules/app.store";
import AuthStore from "./modules/auth.store";
import UserStore from "./modules/user.store";
import ModalStore from "./modules/modal.store";

const debug = process.env.NODE_ENV !== 'production';
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        AppStore,
        AuthStore,
        SampleStore,
        UserStore,
        TableStore,
        AlertStore,
        ModalStore,
    },
    strict: debug,
})

