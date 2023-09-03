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
    path: '/communities',
    name: 'communities',
    component: () => import(/* webpackChunkName: "communities" */ '../views/CommunitiesPage.vue')
  },
  {
    path: '/devfest',
    name: 'devfest',
    component: () => import(/* webpackChunkName: "devfest" */ '../views/FindAnEventPage.vue')
  },
  {
    path: '/cfp',
    name: 'cfp',
    component: () => import(/* webpackChunkName: "cfp" */ '../views/CFPPage.vue')
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import(/* webpackChunkName: "faq" */ '../views/FAQPage.vue')
  },
  {
    path: '/devfest/:id',
    name: 'DevFestCommunityPage',
    component: () => import(/* webpackChunkName: "DevFestCommunityPage" */ '../views/DevFestEventPage.vue')
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
  routes
})

export default router
