import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';

Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)

new Vue({
  render: h => h(App),
}).$mount('#app')
