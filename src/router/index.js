import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../contaniners/Home.vue'
import Cars from '../contaniners/Cars.vue'
import Cities from '../contaniners/Cities.vue'
import Login from '../contaniners/Login.vue'
import Navigation from '../contaniners/Navigation.vue'
import Reports from '../contaniners/Reports.vue'
import Trackings from '../contaniners/Trackings.vue'
import Users from '../contaniners/Users.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cars',
    name: 'Cars',
    component: Cars
  },
  {
    path: '/cities',
    name: 'Cities',
    component: Cities
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/navigation',
    name: 'Navigation',
    component: Navigation
  },
  {
    path: '/reports',
    name: 'Reports',
    component: Reports
  },
   {
    path: '/trackings',
    name: 'Trackings',
    component: Trackings
  }, {
    path: '/users',
    name: 'Users',
    component: Users
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
