import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import communityJSON from '@/assets/data/community.json'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/speakers',
    name: 'speakers',
    component: () => import(/* webpackChunkName: "speakers" */ '../views/SpeakersPage.vue'),
    meta: {
      title: 'Speakers'
    }
  },
  {
    path: '/schedule',
    name: 'schedule',
    component: () => import(/* webpackChunkName: "schedule" */ '../views/SchedulePage.vue'),
    meta: {
      title: 'Schedule'
    }
  },
  {
    path: '/team',
    name: 'team',
    component: () => import(/* webpackChunkName: "schedule" */ '../views/TeamPage.vue'),
    meta: {
      title: 'Team'
    }
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import(/* webpackChunkName: "faq" */ '../views/FAQPage.vue'),
    meta: {
      title: 'FAQ'
    }
  },
  {
    path: '/coc',
    name: 'CodeofConduct',
    component: () => import(/* webpackChunkName: "coc" */ '../views/CoCPage.vue'),
    meta: {
      title: 'Code of Conduct'
    }
  },
  {
    path: '/badge',
    name: 'badge',
    component: () => import(/* webpackChunkName: "badge" */ '../views/BadgePage.vue'),
    meta: {
      title: 'Badge'
    }
  },
  {
    path: '*',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Home'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes
})

const DEFAULT_TITLE = 'DevFest 2023';

router.afterEach((to) => {
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  Vue.nextTick(() => {
    document.title = to.meta.title + " | " + communityJSON.community_name || DEFAULT_TITLE;
  });
});

export default router
