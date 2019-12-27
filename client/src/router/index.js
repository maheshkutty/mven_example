import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ToDo from '@/components/ToDo'
import TempCheck from '@/components/TempCheck'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hellotodo',
      name: 'ToDo',
      component: ToDo
    },
    {
      path: '/TempCheck/:city',
      name: 'TempCheck',
      component: TempCheck
    }
  ]
})
