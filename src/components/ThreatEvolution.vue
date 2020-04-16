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
          series: [{
              name: 'Jan',
              data: [20 ,30 ,40, 80 , 70, 20 ,30 ,40, 80, 70, 20 ,30 ,40, 80 , 70, 20 ,30 ,40, 80 , 70, 20 ,30 ,40, 80 , 70]
            },
            {
              name: 'Feb',
              data: [20 ,30 ,40, 80 , 70, 20 ,30 ,40, 80, 70, 20 ,30 ,40, 80 , 70, 20 ,30 ,40, 80 , 70, 20 ,30 ,40, 80 , 70]
            },
            {
              name: 'Mar',
              data: [20 ,30 ,40, 80 , 70, 20 ,30 ,40, 80, 70, 20 ,30 ,40, 80 , 70, 20 ,30 ,40, 80 , 70, 20 ,30 ,40, 80 , 70]
            },
            {
              name: 'Apr',
              data: [20 ,30 ,40, 80 , 70, 20 ,30 ,40, 80, 70, 20 ,30 ,40, 80 , 70, 20 ,30 ,40, 80 , 70, 20 ,30 ,40, 80 , 70]
            },
            {
              name: 'May',
              data: [20 ,30 ,40, 80 , 70, 20 ,30 ,40, 80, 70, 20 ,30 ,40, 80 , 70, 20 ,30 ,40, 80 , 70, 20 ,30 ,40, 80 , 70]
            },
            {
              name: 'Jun',
              data: [20 ,30 ,40, 80 , 70, 20 ,30 ,40, 80, 70, 20 ,30 ,40, 80 , 70, 20 ,30 ,40, 80 , 70, 20 ,30 ,40, 80 , 70]
            },
            {
              name: 'Jul',
              data: [20 ,30 ,40, 80 , 70, 20 ,30 ,40, 80, 70, 20 ,30 ,40, 80 , 70, 20 ,30 ,40, 80 , 70, 20 ,30 ,40, 80 , 70]
            },
            {
              name: 'Aug',
              data: [20 ,30 ,40, 80 , 70, 20 ,30 ,40, 80, 70, 20 ,30 ,40, 80 , 70, 20 ,30 ,40, 80 , 70, 20 ,30 ,40, 80 , 70]
            },
            {
              name: 'Sep',
              data:[20 ,30 ,40, 80 , 70, 20 ,30 ,40, 80, 70, 20 ,30 ,40, 80 , 70, 20 ,30 ,40, 80 , 70, 20 ,30 ,40, 80 , 70]
            }
          ],
          chartOptions: {
            chart: {
              height: 350,
              type: 'heatmap',
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
              text: 'HeatMap Chart with Color Range'
            },
          },
        }
    },
    methods: {

    },
    computed:{
       ... mapGetters([
            'getActiveAnimal'
        ]),
    },
	mounted: function(){
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
