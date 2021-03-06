import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path:'/',
    name:'Home',
    component: () => {
      return import('../views/Home.vue')
    }
  },
  {
    path: '/WeatherHome',
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
  },
  {
    path: '/hardcode',
    name: 'HardcodeHome',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/HardcodedCredsHome.vue')
    }
  },
  {
    path: '/hardcodei',
    name: 'HardcodeCredsInsecure',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/HardcodedCredsInsecure.vue')
    }
  },
  {
    path: '/hardcodes',
    name: 'HardcodeCredsSecure',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/HardcodedCredsSecure.vue')
    }
  },
  {
    path: '/encrypt',
    name: 'MissingEncryptionHome',
    component: function() {
      return import(/* webpackChunkName: "about" */ '../views/MissingEncryptionHome.vue')
    }
  },
  {
    path: '/encrypti',
    name: 'MissingEncryptionInsecure',
    component: function() {
      return import(/* webpackChunkName: "about" */ '../views/MissingEncryptionInsecure.vue')
    }
  },
  {
    path: '/encrypts',
    name: 'MissingEncryptionSecure',
    component: function() {
      return import(/* webpackChunkName: "about" */ '../views/MissingEncryptionSecure.vue')
    }
  },
  {
    path: '/hash',
    name: 'HashHome',
    component: () => {
      return import('../views/HashHome.vue')
    }
  },
  {
    path: '/hashs',
    name: 'HashSecure',
    component: function() {
      return import(/* webpackChunkName: "about" */ '../views/HashSecure.vue')
    }
  },
  {
    path: '/hashi',
    name: 'HashInsecure',
    component: function() {
      return import(/* webpackChunkName: "about" */ '../views/HashInsecure.vue')
    }
  },
  {
    path: '/loginAttempt',
    name:'LoginAttemptHome',
    component: function() {
      return import('../views/LoginAttemptHome.vue')
    }
  },
  {
    path: '/loginAttempts',
    name: 'LoginAttemptSecure',
    component: function() {
      return import(/* webpackChunkName: "about" */ '../views/LoginAttemptSecure.vue')
    }
  },
  {
    path: '/loginAttempti',
    name: 'LoginAttemptInsecure',
    component: function() {
      return import(/* webpackChunkName: "about" */ '../views/LoginAttemptInsecure.vue')
    }
  },
]

const router = new VueRouter({
  routes
})

export default router
