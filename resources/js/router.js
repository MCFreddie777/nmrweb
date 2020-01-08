import Vue from 'vue';
import VueRouter from "vue-router";
import BaseView from "./views/BaseView";
import SamplesView from "./views/SamplesView";
import LoginView from "./views/LoginView";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: BaseView,
            redirect: '/samples',
            children: [
                {
                    path: 'samples',
                    component: SamplesView,
                    meta: {
                        title: 'Vzorky'
                    }
                }
            ]
        },
        {
            path: '/login',
            component: LoginView,
            meta: {
                title: 'Prihlásenie'
            }
        }
    ],
    mode: 'history'
});
