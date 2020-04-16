<template>
    <div>
        <apexchart type="heatmap" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'ThreatEvolution',
	data: function () {
        return {
            dictionaryCategoryInteger:{
            "NE":-1,
            "K":0,
            "DD": 0,
            "LC":10,
            "NT":20,
            "R":20,
            "CD":30,
             "LR/cd":30,
             "T":40,
             "V": 40,
             "VU": 40,
             "EN": 50,
             "E": 50,
             "CR": 60,
             "PEW":70,
             "EW":80,
             "LR/lc":10,
             "LR/nt":20
            },
            dictionaryScientificNames:{
             "Gorilla": "Gorilla gorilla",
             "Sea Turtle": "Chelonia mydas",
             "Orangutan": "Pongo pygmaeus",
             "Bengal Tiger": "Panthera tigris",
             "Snow Leopard": "Panthera uncia",
             "Asian Elephant": "Elephas maximus",
             "Blue Whale": "Balaenoptera musculus",
             "Giant Panda": "Ailuropoda melanoleuca",
             "Polar Bear": "Ursus maritimus",
             "Red Panda": "Ailurus fulgens",
             "African Penguin": "Spheniscus demersus",
             "Black Rhino": "Diceros bicornis"
            },
          series: [{
          name:"Undefined",
          data:[]
          }],
          chartOptions: {
            chart: {
              height: 350,
              type: 'heatmap'
            },
            plotOptions: {
              heatmap: {
                shadeIntensity: 0.5,
                radius: 0,
                useFillColorAsStroke: true,
                colorScale: {
                  ranges: [{
                      from: 0,
                      to: 0,
                      name: 'Data Deficient (DD)',
                      color: '#AAAAAA'
                    },
                    {
                      from: 10,
                      to: 10,
                      name: 'Least Concern (LC)',
                      color: '#0c4ddd'
                    },
                    {
                      from: 20,
                      to: 20,
                      name: 'Near Threatened (NT)',
                      color: '#0e8fcf'
                    },
                    {
                      from: 30,
                      to: 30,
                      name: 'Conservation Dependent (CD)',
                      color: '#0fdcc7'
                    },
                    {
                      from: 40,
                      to: 40,
                      name: 'Vulnerable (VU)',
                      color: '#0cc532'
                    },
                    {
                      from: 50,
                      to: 50,
                      name: 'Endangered (EN)',
                      color: '#a7ea0a'
                    },
                    {
                      from: 60,
                      to: 60,
                      name: 'Critically Endangered (CR)',
                      color: '#eef00d'
                    },
                    {
                      from: 70,
                      to: 70,
                      name: 'Possibly Extinct in the Wild (PEW)',
                      color: '#eb8208'
                    },
                    {
                      from: 80,
                      to: 80,
                      name: 'Extinct in the Wild (EW)',
                      color: '#f20404'
                    },
                    {
                      from: 90,
                      to: 90,
                      name: 'Possibly Extinct (PE)',
                      color: '#aa1271'
                    },
                    {
                      from: 100,
                      to: 100,
                      name: 'Extinct (EX)',
                      color: '#582369'
                    },
                    {
                      from: -1,
                      to: -1,
                      name: 'Not Evaluated (NE)',
                      color: '#555555'
                    }
                  ]
                }
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              width: 1
            },
            title: {
              text: 'Evolution of vulnerability by species'
            },
          },
        }
    },
    methods: {
        updateChart() {
			this.getInfoAnimal()
		},
		getInfoAnimal(){
			let self=this
            const activeAnimal = self.getActiveAnimal //fix error
            //console.log("getAnimal= "+self.getActiveAnimal)
            var newData = []
            
           
           activeAnimal.forEach(element => {
           fetch('http://apiv3.iucnredlist.org/api/v3/species/history/name/'+this.dictionaryScientificNames[element]+'?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee').then(res => res.json()).then(data => {
				console.log(data.result.map(el => (el.code!=undefined)?this.dictionaryCategoryInteger[el.code] : -1));
                
                newData.push({name:element, data:data.result.map(el => (el.code!=undefined)?this.dictionaryCategoryInteger[el.code] : -1).reverse()})
                
                this.chartOptions = {
                    xaxis: {
                        categories:data.result.map(el => el.year).sort((a,b) => (a-b))
                    }
                }
                
                self.series = newData
			})
            
           })
		}
    },
    computed:{
       ... mapGetters([
            'getActiveAnimal'
        ]),
    },
	mounted: function(){
        this.updateChart()
		this.$root.$on('ThreatEvolution', () => {
            this.updateChart()
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
