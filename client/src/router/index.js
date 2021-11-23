import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/activity',
        name: 'activity',
        component: () => import(/* webpackChunkName: "about" */ '../views/activity.vue')
    },
    {
        path: '/collections',
        name: 'collections',
        component: () => import(/* webpackChunkName: "about" */ '../views/collections.vue')
    },
    {
        path: '/connect-wallet',
        name: 'connect-wallet',
        component: () => import(/* webpackChunkName: "about" */ '../views/connect-wallet.vue')
    },
    {
        path: '/creators',
        name: 'creators',
        component: () => import(/* webpackChunkName: "about" */ '../views/creators.vue')
    },
    {
        path: '/item-details/:id',
        name: 'item-details',
        component: () => import(/* webpackChunkName: "about" */ '../views/item-details.vue')
    },
    {
        path: '/marketplace',
        name: 'marketplace',
        component: () => import(/* webpackChunkName: "about" */ '../views/marketplace.vue')
    },
    {
        //path: '/profile/:wallet',
        path: '/profile/0x2C4C168A2fE4CaB8E32d1B2A119d4Aa8BdA377e7',
        name: 'profile',
        component: () => import(/* webpackChunkName: "about" */ '../views/profile.vue')
    },
    {
        path: '/upload',
        name: 'upload',
        component: () => import( /* webpackChunkName: "about" */ '../views/upload.vue')
    },
    {
        path: '/upload-type',
        name: 'upload-type',
        component: () => import( /* webpackChunkName: "about" */ '../views/upload-type.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
        return {x: 0, y: 0}
    }
})

export default router
