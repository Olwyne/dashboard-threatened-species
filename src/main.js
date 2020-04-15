import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// API function
fetch('https://api.gbif.org/v1/dataset/search?country=FR&facet=DECADE&limit=0')
  .then(response => response.json())
  .then(data => {
    console.log("Nombre d'espèces menacées depuis 1920 :");
    const result = data.facets[0].counts; // tableau date-nb d'espèces
    
    for(var el in result.sort((a, b) => (a.name > b.name) ? 1 : -1)){ // tri par date croissante
        console.log("En "+result[el].name+" : "+result[el].count+" espèces.");
    }
})
