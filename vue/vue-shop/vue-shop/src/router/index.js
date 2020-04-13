import Vue from 'vue'
import Router from 'vue-router'
import Tab from '@/components/tab'
import Home from '@/components/tab/home/Home'
import Topic from '@/components/tab/topic/Topic'
import Sort from '@/components/tab/sort/Sort'
import ShopCart from '@/components/tab/shopCart/ShopCart'
import User from '@/components/tab/user/User'
import Map from '@/components/tab/home/map/Map'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Tab',
      component: Tab,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home,
        },
        {
          path: '/topic',
          name: 'Topic',
          component: Topic,
        },
        {
          path: '/sort',
          name: 'Sort',
          component: Sort,
        },
        {
          path: '/shopCart',
          name: 'ShopCart',
          component: ShopCart,
        },
        {
          path: '/user',
          name: 'User',
          component: User,
        }
      ]
    },
    {
      path: '/map',
      name: 'Map',
      component: Map,
    }
  ]
})
