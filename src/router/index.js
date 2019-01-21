import Vue from 'vue'
import Router from 'vue-router'
import home from '../view/layout/Main/home.vue'
import login from '../components/login'
import basetable from '../components/basetable'
import chart from '../components/charts'
import mainactive from '../components/mainActive'
import register from '../components/register'

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
        },
        {
          path: '/home/mainActive',
          component: mainactive
        },
        {
          path: '/home/register',
          component: register
        }
      ]
    },
    {
      path: '/',
      component: login
    }

  ]
})
