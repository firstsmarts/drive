import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

export function createRouter(){
    return new VueRouter({
        mode: 'history',
        routes: [
            {
                path: '/',
                component: () => import(/* webpackChunkName: "entry" */'./pages/index')
            },
            {
                path: '/test',
                component: () => import(/* webpackChunkName: "test" */'./pages/test')
            },

        ]
    })
}