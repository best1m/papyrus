import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'

Vue.use(VueRouter);
Vue.use(Vuetify);

new Vue({
  el: '#app',
  render: h => h(App)
})
