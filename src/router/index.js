import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'WeatherHome',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/WeatherHome.vue')
    }
  },
  {
    path: '/WeatherSecure',
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
    path: '/logini',
    name: 'LoginInsecure',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/LoginInsecure.vue')
    }
  },
  {
    path: '/fileDownloadHome',
    name: 'LoginInsecure',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/FileDownloadHome.vue')
    }
  },
  {
    path: '/fileDownloadi',
    name: 'LoginInsecure',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/FileDownloadInsecure.vue')
    }
  },
  {
    path: '/fileDownload',
    name: 'FileDownload',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/FileDownloadSecure.vue')
    }
  }

]

const router = new VueRouter({
  routes
})

export default router
