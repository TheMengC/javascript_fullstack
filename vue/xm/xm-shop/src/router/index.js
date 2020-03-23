import Vue from 'vue'
import Router from 'vue-router'
import Tab from '@/components/tab'
import Home from '@/components/tab/home'
import Class from '@/components/tab/Class'
import ShopCart from '@/components/tab/ShopCart'
import User from '@/components/tab/User'

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
          path: '/class',
          name: 'Class',
          component: Class,
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
        },
      ]
    }
  ]
})
