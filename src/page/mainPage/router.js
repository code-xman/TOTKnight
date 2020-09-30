/*
 * @Author: xiangjie
 * @Date: 2020-09-30 14:13:44
 * @Last Modified by: xiangjie
 * @Last Modified time: 2020-09-30 14:57:07
 */

export default [
  {
    path: '/setout',
    name: 'setout',
    component: () => import('./setout.vue')
  },
  {
    path: '/start',
    name: 'start',
    component: () => import('./start.vue')
  },
  {
    path: '/center',
    name: 'center',
    component: () => import('./center.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('./about.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('./test.vue')
  },
  {
    path: '/cards',
    name: 'cards',
    component: () => import('./cards.vue')
  },
  {
    path: '/eventCards',
    name: 'eventCards',
    component: () => import('./eventCards.vue')
  },
  {
    path: '/sponsorship',
    name: 'sponsorship',
    component: () => import('./sponsorship.vue')
  }
]
