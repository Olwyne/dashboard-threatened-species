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
            "DD": 100,
            "LC":90,
            "NT":70,
             "V": 50,
             "VU": 50,
             "EN": 40,
             "E": 40,
             "CR": 30,
             "EW":20,
             "LR/lc":10,
             "LR/nt":5,
             "LR/cd":0
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
                      from: -30,
                      to: 5,
                      name: 'low',
                      color: '#00A100'
                    },
                    {
                      from: 6,
                      to: 20,
                      name: 'medium',
                      color: '#128FD9'
                    },
                    {
                      from: 21,
                      to: 45,
                      name: 'high',
                      color: '#FFB200'
                    },
                    {
                      from: 46,
                      to: 55,
                      name: 'extreme',
                      color: '#FF0000'
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
			//const newData = this.getActiveAnimal
            //this.series[0].name = newData
			this.getInfoAnimal()
		},
		getInfoAnimal(){
			let self=this
            var newData = []
            
           
           self.getActiveAnimal.forEach(element => {
           console.log(this.dictionaryScientificNames[element]);
           fetch('http://apiv3.iucnredlist.org/api/v3/species/history/name/'+this.dictionaryScientificNames[element]+'?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee').then(res => res.json()).then(data => {
				console.log(data.result.map(el => this.dictionaryCategoryInteger[el.code]));
                newData.push({name:element, data:data.result.map(el => this.dictionaryCategoryInteger[el.code])})
                this.chartOptions = {
				xaxis: {
					categories:data.result.map(el => el.year).sort((a,b) => (a-b))
				}
			}
			});
           })
           self.series = newData
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
