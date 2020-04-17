<template>
    <div>
        <b-container fluid class="dashboard-container">
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
        <div class="laptop-legend">
            <DashboardLegend />
        </div>
        <div class="fixed-bottom mobile-legend">
            <b-collapse id="collapse-1">
                <DashboardLegend />
            </b-collapse>
            <b-button v-b-toggle.collapse-1 class="btn btn-danger legend-button w-100">Legend</b-button>
        </div>
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
    .dashboard-container {
        margin-bottom: 150px;
    }

    .laptop-legend {
        display: none;
    }

    @media (min-width: 767.98px) {
        .mobile-legend{
            display: none;
        }

        .laptop-legend{
            display: block;
        }

    }

</style>
