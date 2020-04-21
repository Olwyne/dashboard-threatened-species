<template>
    <div>
        <b-container fluid class="dashboard-container">
            <b-row>
                <b-col cols="12" md="6">
                    <AnimalIDCard />
                </b-col>
                <b-col cols="12" md="6">
                    <ThreatEvolution />
                </b-col>
                <!--<b-col cols="12" md="6">
                    <Pie />
                </b-col>
                <b-col cols="12" md="6">
                    <Pie2 />
                </b-col>-->
            </b-row>
        </b-container>
    </div>
</template>

<script>
   /* import Pie2 from './Pie2.vue'
    import Pie from './Pie.vue'*/
    import ThreatEvolution from './ThreatEvolution.vue'
    import AnimalIDCard from './AnimalIDCard.vue'
    export default {
        name: 'Dashboard',
        components: {
         /*   Pie,
            Pie2,*/
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
        computed: {

        },
        mounted: function () {
        }
    }
</script>

<style scoped>
    .dashboard-container {
        margin-bottom: 50px;
    }

    .laptop-legend {
        display: none;
    }

    @media (min-width: 767.98px) {
        .mobile-legend {
            display: none;
        }

        .laptop-legend {
            display: block;
        }

        .dashboard-container {
            margin-bottom: 150px;
        }
    }
</style>
