import Vue from 'vue';
import VueRouter from "vue-router";
import BasicView from "./views/BasicView";
import SamplesView from "./views/SamplesView";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: BasicView,
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
    ],
    mode: 'history'
});
