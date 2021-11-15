import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import EventList from '../components/EventList'
import EventCreate from '../components/EventCreate'
import EventShow from '../components/EventShow'
import CommissionCardSamples from '../components/CommissionCardSamples'

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
    component: User,
    props: true
  },
  {
    path: '/',
    name: 'event-list',
    component: EventList
  },
  { // Notice this has to come before /event/:id
    path: '/event/create',
    name: 'event-create',
    component: EventCreate
  },
  {
    path: '/event/:id',
    name: 'event-show',
    component: EventShow,
    props: true
  },
  {
    path: '/card/:type',
    name: 'commission-card-samples',
    component: CommissionCardSamples,
    props: true
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
