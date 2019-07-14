import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
require('../node_modules/bootstrap/dist/css/bootstrap.css')

Vue.config.productionTip = false
require('../src/assets/main.scss')
Vue.use(Vuetify, {
  iconfont: 'md'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
