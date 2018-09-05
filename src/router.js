import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Users from './views/Users.vue'
import Signup from './views/Signup.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    }
  ]
})
