<template>
  <div >
      <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
export default {
	name: 'HorizontalBarChart',
	props: {
		msg: String
     },
        data: function () {
            return {
            series: [{
                data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380] // replace by the number of individuals of the spiece
            }],
            chartOptions: {
                chart: {
                    type: 'bar',
                    height: 350
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    }
                },
                dataLabels: {
                    enabled: false
                },
                xaxis: {
                    categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                        'United States', 'China', 'Germany'], // replace by the animal icon
                }
            }
            }
        },
    methods: {

    },
    computed:{

    },
	mounted: function(){
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
