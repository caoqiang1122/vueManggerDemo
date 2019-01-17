import Vue from 'vue'
import Router from 'vue-router'
import home from '../view/layout/Main/home.vue'
import login from '../components/login'
import basetable from '../components/basetable'
import chart from '../components/charts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: home,
      children: [
        {
          path: '/home/basetable',
          component: basetable
        },
        {
          path: '/home/charts',
          component: chart
        }
      ]
    },
    {
      path: '/',
      component: login
    }

  ]
})
