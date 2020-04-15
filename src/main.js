import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// API GBIF
fetch('https://api.gbif.org/v1/dataset/search?country=FR&facet=DECADE&limit=0')
  .then(response => response.json())
  .then(data => {
    console.log("Nombre d'espèces depuis 1920 :");
    const result = data.facets[0].counts; // tableau date-nb d'espèces
    
    for(var el in result.sort((a, b) => (a.name > b.name) ? 1 : -1)){ // tri par date croissante
        console.log("En "+result[el].name+" : "+result[el].count+" espèces.");
    }
})

fetch('https://api.gbif.org/v1/species/search?isExtinct=true')
  .then(response => response.json())
  .then(data => {
    console.log("Espèces éteintes :");
    const result = data.results; // tableau espèces
    
    for(var el in result){
        console.log(result[el].scientificName);
    }
})

fetch("http://apiv3.iucnredlist.org/api/v3/species/region/northern_africa/page/0?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee").then(res => res.json()).then(data => console.log(data));

// API Bloowatch

/*async function getData() {
      try {
          const res = await fetch('http://bloowatch.org/developers/json/species');
          const data = await res.json();
          console.log(data);
      } catch(err) {
          console.log(err);
      }
  }
console.log("ok");
  getData();
fetch('http://bloowatch.org/developers/json/species')
      .then(res => res.json())
      .then(jsonRes => console.log(jsonRes))
      .catch(error => console.log(error));*/

/*fetch('http://bloowatch.org/developers/json/species', {
  headers: { "Content-Type": "application/json" },
  method: 'GET'
})*/

/*async function getData() {
      try {
          const res = fetch('http://localhost:8080/developers/json/species/giant-panda');
          //const data = res.json();
          //console.log(res.arrayBuffer());
          console.log(res.json());
      } catch(err) {
          console.log(err);
      }
  }
  getData();*/
  /*fetch('http://localhost:8080/developers/json/species')
      .then(res => res.json())
      .then(jsonRes => console.log(jsonRes))
      .catch(error => console.log(error));*/
fetch('http://localhost:8080/developers/json/species')
  .then(response => console.log(response))
  .then(data => console.log(data))