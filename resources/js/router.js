import Vue from 'vue';
import VueRouter from "vue-router";
import BaseView from "./views/BaseView";
import LoginView from "./views/LoginView";
import SamplesView from "./views/App/SamplesView";
import ChangePasswordView from "./views/App/ChangePasswordView";
import UsersView from "./views/App/Admin/UsersView";
import FilesView from "./views/App/FilesView";

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
                },
                {
                    path: 'files',
                    component: FilesView,
                    meta: {
                        title: 'Súbory'
                    }
                },
                {
                    path: 'users',
                    component: UsersView,
                    meta: {
                        title: 'Správa užívateľov'
                    }
                },
                {
                    path: 'change-password',
                    component: ChangePasswordView,
                    meta: {
                        title: 'Zmena hesla'
                    }
                },
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
