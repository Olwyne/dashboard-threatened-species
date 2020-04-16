<template>
  <div class="example">
    <apexchart ref="donut" width="350" type="donut" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
export default {
  name: 'DonutExample',
  data: function() {
    return {
      chartOptions: {
        labels: [],
        title: {
          text: "Category of species classified with IUCN criteria",
          align: 'left',
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize:  '14px',
            fontWeight:  'bold',
            fontFamily:  undefined,
            color:  '#263238'
          },
        },
        colors: [function({ value }) {
            if (value < 82) {
                return '#f20404'
            }
            else if (value >= 82 && value < 916) {
              return '#582369'
            }
            else if (value >= 916 && value < 6338) {
              return '#0e8fcf'
            }
            else if (value >= 6338 && value < 6842) {
              return '#eef00d'
            }
            else if (value >= 6842 && value < 11487) {
              return '#a7ea0a'
            }
            else if (value >= 11487 && value < 14092) {
              return '#0cc532'
            }
            else if (value >= 14092 && value < 17407) {
              return '#AAAAAA'
            }
            else if (value >= 17407 && value < 59860) {
              return '#0c4ddd'
            }
            else {
                return '#dc3545'
            }
          }]
       },
       series: [{
        data:[]
        }],
    }
  },
  methods: {
    updateChart() {
        this.getInfoAnimal();
      },
     getInfoAnimal(){
        this.chartOptions = { labels: [],}
        this.series = [];
        const arrayOfId = ["EX", "EW", "CR", "EN", "VU", "NT", "LC", "DD"];
        for (let i = 0; i < arrayOfId.length; i++) {
            fetch('http://apiv3.iucnredlist.org/api/v3/species/category/'+arrayOfId[i]+'?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee').then(res => res.json()).then(data => {
            const result = data;
            this.chartOptions.labels.push(arrayOfId[i]);
            this.series.push(result.count);
          });
        }
        //console.log(this.chartOptions.colors);
     }
  },
  mounted: function(){

    this.updateChart()
    this.$root.$on('Pie', () => {
            this.updateChart()
        })


    }
}
</script>