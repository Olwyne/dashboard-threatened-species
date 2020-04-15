<template>
  <div >
      <HorizontalBarChart />
  </div>
</template>

<script>
    import HorizontalBarChart from './HorizontalBarChart.vue'
export default {
    name: 'Dashboard', 
    components: {
            HorizontalBarChart
     },
	props: {
		msg: String
	},
	data: function () {
        return {
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
