import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/speakers',
    name: 'speakers',
    component: () => import(/* webpackChunkName: "speakers" */ '../views/SpeakersPage.vue')
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import(/* webpackChunkName: "faq" */ '../views/FAQPage.vue')
  },
  {
    path: '/coc',
    name: 'CodeofConduct',
    component: () => import(/* webpackChunkName: "coc" */ '../views/CoCPage.vue')
  },
  {
    path: '/badge',
    name: 'badge',
    component: () => import(/* webpackChunkName: "badge" */ '../views/BadgePage.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes
})

export default router
