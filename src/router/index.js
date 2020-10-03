import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/views/MainPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/basket',
      name: 'Basket',
      component: () => import('@/views/Basket')
    }
  ]
})
