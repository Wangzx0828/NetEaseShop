// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import '../static/js/rem'
import router from './router/index'
import store from './store'

import '../src/mock/mockServer';
import 'swiper/dist/css/swiper.min.css'
import MainCountLine from './components/MainCountLine/MainCountLine.vue'

Vue.component('MainCountLine',MainCountLine)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
