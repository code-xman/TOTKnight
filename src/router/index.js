import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

const routes = [
  {
    path: '/setout',
    name: 'setout',
    component: () => import('@/page/mainPage/setout.vue')
  },
  {
    path: '/start',
    name: 'start',
    component: () => import('@/page/mainPage/start.vue')
  },
  {
    path: '/center',
    name: 'center',
    component: () => import('@/page/mainPage/center.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/page/mainPage/about.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/page/mainPage/test.vue')
  },
  {
    path: '/cards',
    name: 'cards',
    component: () => import('@/page/mainPage/cards.vue')
  },
  {
    path: '/sponsorship',
    name: 'sponsorship',
    component: () => import('@/page/mainPage/sponsorship.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
