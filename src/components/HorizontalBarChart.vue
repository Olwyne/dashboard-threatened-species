<template>
  <div >
    <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'HorizontalBarChart',
	data: function () {
		return {
			series: [{
				data: []
			}],
			chartOptions: {
				chart: {
					type: 'bar',
					height: 380
				},
				plotOptions: {
					bar: {
						barHeight: '100%',
						distributed: true,
						horizontal: true,
						dataLabels: {
						position: 'bottom'
						},
					}
				},
			colors: ["#33b2df"],
			dataLabels: {
				enabled: true,
				textAnchor: 'start',
				style: {
				colors: ['#000']
				},
				formatter: function (val, opt) {
				return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
				},
				offsetX: 0,
				dropShadow: {
				enabled: false
				}
			},
			stroke: {
				width: 1,
				colors: ['#fff']
			},
			xaxis: {
				categories: ["Hello"],
			},
			yaxis: {
				labels: {
				show: false
				}
			},
			title: {
				text: 'Population',
				align: 'center',
				floating: true
			},
			tooltip: {
				theme: 'dark',
				x: {
				show: false
				},
				y: {
				title: {
					formatter: function () {
					return ''
					}
				}
				}
			}
			}
		}
	},
    methods: {
		updateChart() {	
			const newData = this.getActiveAnimal
			this.chartOptions = {
				xaxis: {
					categories:newData
				}
			}
			this.getInfoAnimal()
		},
		getInfoAnimal(){
			let self=this
			fetch('http://www.bloowatch.org/developers/json/species').then(res => res.json()).then(data => {
				const result = data.allSpecies
				const newData = []
				const colors = []
				for(var el in result){
					const name = result[el].name;
					self.getActiveAnimal.forEach(element => {
						if(name==element){
							const population = result[el].population.replace(',', '')
							newData.push(population)
							self.series = [{
								data: newData
							}]
							switch (result[el].status) {
								case 'Vulnerable':
									colors.push("#e7c869")
									break;
								case 'Endangered':
									colors.push("#f48024")
									break;
								case 'Critically Endangered':
									colors.push("#f01a33")
									break;
								default:
									colors.push("#33b2df")
									break;
							}
							this.chartOptions = {
								colors: colors
							}
						}
					});
				}
			});
		}
    },
    computed:{
		... mapGetters([
            'getActiveAnimal'
		]),
		
    },
	mounted: function(){

		this.updateChart()
		this.$root.$on('HorizontalBarChart', () => {
            this.updateChart()
        })


    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
