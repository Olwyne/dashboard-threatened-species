<template>
    <div id="app">
        <PageHead />
        <Navbar />
        <Pie />
        <Dashboard />
    </div>
	
</template>

<script>
    import PageHead from './components/PageHead.vue'
    import Navbar from './components/Navbar.vue'
    import Pie from './components/Pie.vue'
    import Dashboard from './components/Dashboard.vue'
    import { mapActions, mapGetters } from 'vuex'
    
export default {
	name: 'App',
        components: {
        PageHead,
		Navbar,
        Pie,
		Dashboard
	},
	data: function () {
        return {
			activeAnimal : 'Bengal Tiger'

        }
    },
    methods: {
        ... mapActions([
			'setActiveAnimal'
        ]),
    },
    computed:{
		... mapGetters([
			'getActiveAnimal'
		]),
    },
	mounted: function(){
		this.setActiveAnimal(this.activeAnimal)
    },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
