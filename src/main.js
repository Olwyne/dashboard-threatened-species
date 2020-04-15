import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// API function
fetch('https://api.gbif.org/v1/species')
  .then(response => response.json())
  .then(data => console.log(JSON.stringify(data)))
