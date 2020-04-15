import Vue from 'vue'
import App from './App.vue'

// Config RedList API
import {
  Country,
  //GrowthForms,
  //Habitat,
  //Measure,
  //Region,
  Species,
  //Threat,
} from 'iucn-red-list';
import { setRedListToken } from 'iucn-red-list';
setRedListToken('9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee')
import { redListVersion } from 'iucn-red-list';
redListVersion().then(data => console.log(data));

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// API RedList

/** Example without npm **/ 

/*fetch("http://apiv3.iucnredlist.org/api/v3/species/region/northern_africa/page/0?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee").then(res => res.json()).then(data => console.log(data));*/

/** With npm **/

Species
  .fetch({ page: 2, region: 'europe' })
  .then(data => console.log(data))
  .catch(err => console.log(err));

Country
  .species({ country: 'AZ' })
  .then(data => console.log(data))
  .catch(err => console.log(err));