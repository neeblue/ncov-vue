import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/basicLayout'),
    children: [
      {
        path: '/',
        redirect: '/column'
      },
      {
        path: '/column',
        name: 'column',
        component: () =>
          import(/* webpackChunkName: "column" */ '@/components/column')
      },
      {
        path: '/line',
        name: 'line',
        component: () =>
          import(/* webpackChunkName: "line" */ '@/components/line')
      },
      {
        path: '/pie',
        name: 'pie',
        component: () =>
          import(/* webpackChunkName: "pie" */ '@/components/pie')
      },
      {
        path: '/map',
        name: 'map',
        component: () =>
          import(/* webpackChunkName: "map" */ '@/components/map')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
