import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import WebRes from '@/components/WebRes'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {
          path: '/',
          component: WebRes,
        }]
    }
  ]
})
