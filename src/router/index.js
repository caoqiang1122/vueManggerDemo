import Vue from 'vue'
import Router from 'vue-router'
import home from '../view/layout/Main/home.vue'
import login from '../components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: home
    },
    {
      path: '/',
      component: login
    }

  ]
})
