import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import LoginPage from './views/Login.vue'
import UsersPage from './views/Users.vue'
import SignupPage from './views/Signup.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupPage
    },
    {
      path: '/users',
      name: 'users',
      component: UsersPage,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    let auth = store.state.userIsLoggedIn

    if (auth) {
      next()
    } else if (!auth) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
})

export default router
