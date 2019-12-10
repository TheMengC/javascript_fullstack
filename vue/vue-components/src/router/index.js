import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import A from '@/components/pages/A'
import Parent from '@/components/views/parent'
import Show from '@/components/form/show'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Show',
      component: Show
    }
  ]
})
