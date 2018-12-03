// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueLazyload from 'vue-lazyload'
import '../static/js/rem'
import router from './router/index'
import store from './store'
import loading from '../static/image/lazy.gif'

import '../src/mock/mockServer';
import 'swiper/dist/css/swiper.min.css'

import MainCountLine from './components/MainCountLine/MainCountLine.vue'
import GoodHeader from './components/GoodHeader/GoodHeader.vue'

Vue.component('MainCountLine',MainCountLine)
Vue.component('GoodHeader',GoodHeader)

Vue.config.productionTip = false

Vue.use(VueLazyload, {
  loading
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
