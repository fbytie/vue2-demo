import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// eslint-disable-next-line no-undef
/* TODO: Vue.component('FeatherIcon', FeatherIcon) < this doesn't work */

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about-me',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/about',
    redirect: { name: 'About' }
  },
  {
    path: '/folio',
    name: 'Folio',
    component: () => import(/* webpackChunkName: "folio" */ '../views/Folio.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '/ToS',
    name: 'Terms of Service',
    component: () => import(/* webpackChunkName: "tos" */ '../views/ToS.vue')
  },
  {
    path: '/buy',
    name: 'Buy',
    component: () => import(/* webpackChunkName: "buy" */ '../views/Buy.vue')
  },
  {
    path: '/buy/:type',
    name: 'CommissionCard',
    component: () => import(/* webpackChunkName: "commissionCard" */ '../components/CommissionCard.vue'),
    props: true
  },
  {
    path: '/user/:username',
    name: 'user',
    component: () => import(/* webpackChunkName: "commissionCard" */ '../views/User.vue'),
    props: true
  },
  {
    path: '/',
    name: 'event-list',
    component: () => import(/* webpackChunkName: "commissionCard" */ '../components/EventList.vue')
  },
  { // Notice this has to come before /event/:id
    path: '/event/create',
    name: 'event-create',
    component: () => import(/* webpackChunkName: "commissionCard" */ '../components/EventCreate.vue')
  },
  {
    path: '/event/:id',
    name: 'event-show',
    component: () => import(/* webpackChunkName: "commissionCard" */ '../components/EventShow.vue'),
    props: true
  },
  {
    path: '/commission/:type',
    name: 'commission-card-samples',
    component: () => import(/* webpackChunkName: "commissionCard" */ '../components/CommissionCardSamples.vue'),
    props: true
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
