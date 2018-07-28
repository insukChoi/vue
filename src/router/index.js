import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test1 from '@/components/Test1'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'First Router',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'test Router',
      component: Test1
    },
    {
      path: '*',
      name: 'notFound Router',
      component: NotFound
    }
  ]
})
