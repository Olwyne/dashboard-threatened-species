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