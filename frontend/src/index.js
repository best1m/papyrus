import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import axios from 'axios'

Vue.use(VueRouter);
Vue.use(Vuetify);

new Vue({
  el: '#app',
  render: h => h(App)
})
