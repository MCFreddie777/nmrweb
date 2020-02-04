import Vue from 'vue';
import VueRouter from "vue-router";
import BaseView from "./views/BaseView.vue";
import LoginView from "./views/LoginView.vue";
import SampleList from "./views/App/Sample/SampleList.vue";
import ChangePasswordView from "./views/App/ChangePasswordView.vue";
import UserList from "./views/App/Admin/User/UserList.vue";
import FileList from "./views/App/File/FileList.vue";
import UserEdit from "./views/App/Admin/User/UserEdit.vue";
import UserCreate from "./views/App/Admin/User/UserCreate.vue";
import SampleCreate from "./views/App/Sample/SampleCreate.vue";
import SampleEdit from "./views/App/Sample/SampleEdit.vue";
import PageNotFoundView from "./views/PageNotFoundView.vue";

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
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
    ]
});
