import Vue from 'vue'
import Router from 'vue-router'
import home from '../view/layout/Header/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: home
    }
  ]
})
