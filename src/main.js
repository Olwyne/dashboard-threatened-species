import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import VueApexCharts from 'vue-apexcharts'
import Vue from 'vue'
import App from './App.vue'
import store from "./store/store";


// Install BootstrapVue
Vue.use(BootstrapVue)

// Install ApexCharts
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store:store,
}).$mount('#app')

// API RedList

/*fetch('http://www.bloowatch.org/developers/json/species').then(res => res.json()).then(data => {
    console.log(data);
    const result = data.allSpecies
    for(var el in result){
        const scientific_name = result[el].scientific_name;
        const name = result[el].name;
        
        fetch("http://apiv3.iucnredlist.org/api/v3/species/history/name/"+scientific_name+"?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee").then(res => res.json()).then(data => {
            console.log("History for "+name);
            console.log(data)
        });
    }
});*/

fetch("http://www.bloowatch.org/developers/json/species").then(res => res.json()).then(data => console.log(data));
