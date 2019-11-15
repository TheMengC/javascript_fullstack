import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
//js 懒加载
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/page/home/Home')
    },
    {
      path: '/city',
      name: 'City',
      component: () => import('@/page/city/City'),
      children: [
        {
          path: '/city/in',
          name: 'Cityin',
          component: () => import('@/page/city/cityIn')
        },
        {
          path: '/city/out',
          name: 'CityOut',
          component: () => import('@/page/city/cityOut')
        }
      ]
    }
  ]
})
