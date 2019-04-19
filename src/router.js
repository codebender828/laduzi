import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Food from '@/views/Food'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/food',
      name: 'Food',
      component: Food
    }
  ]
})
