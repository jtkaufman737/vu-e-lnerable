import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bulma/css/bulma.css'
import Prism from 'prismjs';

Vue.config.productionTip = false
Vue.use(Prism)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
