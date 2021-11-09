import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CommissionCard from '../components/CommissionCard.vue'

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
    component: () => import(/* webpackChunkName: "about" */ '../views/Folio.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  },
  {
    path: '/ToS',
    name: 'Terms of Service',
    component: () => import(/* webpackChunkName: "about" */ '../views/ToS.vue')
  },
  {
    path: '/buy',
    name: 'Buy',
    component: () => import(/* webpackChunkName: "about" */ '../views/Buy.vue')
  },
  {
    path: '/buy/:commissionCard',
    name: 'CommissionCard',
    component: CommissionCard,
    props: true
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
