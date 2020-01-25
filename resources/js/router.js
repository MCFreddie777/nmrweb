import Vue from 'vue';
import VueRouter from "vue-router";
import BaseView from "./views/BaseView";
import LoginView from "./views/LoginView";
import SampleList from "./views/App/Sample/SampleList";
import ChangePasswordView from "./views/App/ChangePasswordView";
import UserList from "./views/App/Admin/User/UserList";
import FileList from "./views/App/File/FileList";
import UserEdit from "./views/App/Admin/User/UserEdit";
import UserCreate from "./views/App/Admin/User/UserCreate";
import SampleCreate from "./views/App/Sample/SampleCreate";
import SampleEdit from "./views/App/Sample/SampleEdit";

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
                    component: {
                        render(h) {
                            return h('router-view')
                        }
                    },
                    children: [
                        {
                            path: '/',
                            component: SampleList,
                            meta: {
                                title: 'Vzorky'
                            }
                        },
                        {
                            path: 'new',
                            component: SampleCreate,
                            meta: {
                                title: 'Nová vzorka'
                            },
                        },
                        {
                            path: ':id',
                            component: SampleEdit,
                            meta: {
                                title: 'Vzorka'
                            }
                        },
                    ],
                },
                {
                    path: 'files',
                    component: FileList,
                    meta: {
                        title: 'Súbory'
                    }
                },
                {
                    path: 'users',
                    component: {
                        render(h) {
                            return h('router-view')
                        }
                    },
                    children: [
                        {
                            path: '/',
                            component: UserList,
                            meta: {
                                title: 'Správa užívateľov'
                            },
                        },
                        {
                            path: 'new',
                            component: UserCreate,
                            meta: {
                                title: 'Nový používateľ'
                            },
                        },
                        {
                            path: ':id',
                            component: UserEdit,
                            meta: {
                                // Todo: right name
                                title: 'Používateľ'
                            }
                        },
                    ]
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
