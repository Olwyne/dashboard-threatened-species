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
                <b-col cols="12" md="6">
                    <NumberSpeciesChar />
                </b-col>
                <b-col cols="12" md="6">
                    <RegionChar />
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import NumberSpeciesChar from './NumberSpeciesChar.vue'
    import RegionChar from './RegionChar.vue'
    import ThreatEvolution from './ThreatEvolution.vue'
    import AnimalIDCard from './AnimalIDCard.vue'
    export default {
        name: 'Dashboard',
        components: {
            NumberSpeciesChar,
            RegionChar,
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
