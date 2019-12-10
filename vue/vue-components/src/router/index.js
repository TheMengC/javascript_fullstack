import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import A from '@/components/pages/A'
import Parent from '@/components/views/parent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Parent',
      component: Parent
    }
  ]
})
