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
import PageNotFoundView from "./views/PageNotFoundView";

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
                        },
                        {
                            path: 'new',
                            component: SampleCreate,
                        },
                        {
                            path: ':id',
                            component: SampleEdit,
                        },
                    ],
                },
                {
                    path: 'files',
                    component: FileList,
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
                        },
                        {
                            path: 'new',
                            component: UserCreate,
                        },
                        {
                            path: ':id',
                            component: UserEdit,
                        },
                    ]
                },
                {
                    path: 'change-password',
                    component: ChangePasswordView,
                },
            ]
        },
        {
            path: '/login',
            component: LoginView,
        },
        {
            path: "*",
            component: PageNotFoundView
        }
    ],
    mode: 'history'
});
