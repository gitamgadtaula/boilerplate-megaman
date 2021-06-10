import Vue from "vue";
import App from "./App.vue";

import "font-awesome/css/font-awesome.min.css"

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.component('VueFontawesome', require('vue-fontawesome-icon/VueFontawesome.vue').default);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
