import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/weather',
    name: 'Weather',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/WeatherSecure.vue')
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/LoginSecure.vue')
    }
  },
  {
    path: '/weatheri',
    name: 'WeatherInsecure',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/WeatherInsecure.vue')
    }
  },
  {
    path: '/logini',
    name: 'LoginInsecure',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/WeatherInsecure.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
