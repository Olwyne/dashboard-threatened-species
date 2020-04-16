<template>
  <div >
      <HorizontalBarChart />
      <Pie />
      <ThreatEvolution />
      <AnimalIDCard />
  </div>
</template>

<script>

    import HorizontalBarChart from './HorizontalBarChart.vue'
    import Pie from './Pie.vue'
    import ThreatEvolution from './ThreatEvolution.vue'
    import AnimalIDCard from './AnimalIDCard.vue'
export default {
    name: 'Dashboard', 
    components: {
        HorizontalBarChart,
        Pie,
        ThreatEvolution,
        AnimalIDCard
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
