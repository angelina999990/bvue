// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'

import appHeader from '@/components/appHeader'

import './style/app.scss'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

Vue.component('appHeader', appHeader)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
