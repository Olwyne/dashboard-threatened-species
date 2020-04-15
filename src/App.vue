<template>
    <div id="app">
        <Navbar />
    </div>
</template>

<script>
    import Navbar from './components/Navbar.vue'
    import { mapActions, mapGetters } from 'vuex'


    export default {
        name: 'App',
        components: {
            Navbar
        },
        data: function () {
            return {
            }
        },
        methods: {
            ...mapActions([
                'addLocationToStore',
                'setActivePage',
                'addWalkToStore',
                'setActiveTitle'
            ]),
        },
        computed: {
            ...mapGetters([
                'getActivePage',
                'getActiveTitle',
                'getGameState',
                'getPreviousPage'
            ]),
        },
        mounted: function () {
        }
    }
</script>

<style>
    #app {
    }
</style>