import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  { path: '/', component: Home },
  { path: '/one', name: 'One', component: () => import('../views/One.vue') },
  { path: '/two', name: 'Two', component: () => import('../views/Two.vue') },
  { path: '/three', name: 'Three', component: () => import('../views/Three.vue') }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
