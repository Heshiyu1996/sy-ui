import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const router = new VueRouter({
    // mode: 'history',
    routes: [
        {
            path: '/',
            name: 'main',
            component: require('@/pages/main').default
        },
        {
            path: '/demo',
            name: 'demo',
            component: () => import('@/pages/demo')
        }
    ]
})

export default router
