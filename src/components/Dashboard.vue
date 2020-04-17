<template>
    <div>
        <b-container fluid>
            <b-row>
                <b-col cols="12" md="6">
                    <HorizontalBarChart />
                </b-col>
                <b-col cols="12" md="6">
                    <ThreatEvolution />
                </b-col>
                <b-col cols="12" md="6">
                    <Pie />
                </b-col>
                <b-col cols="12" md="6">
                    <AnimalIDCard />
                </b-col>
            </b-row>
        </b-container>
        <DashboardLegend />
    </div>
</template>

<script>
    import DashboardLegend from './DashboardLegend.vue'
    import HorizontalBarChart from './HorizontalBarChart.vue'
    import Pie from './Pie.vue'
    import ThreatEvolution from './ThreatEvolution.vue'
    import AnimalIDCard from './AnimalIDCard.vue'
export default {
    name: 'Dashboard', 
        components: {
        DashboardLegend,
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
