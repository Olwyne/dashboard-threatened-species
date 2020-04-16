<template>
    <div id="app">
        <Navbar />
        <Dashboard />
		<HelloWorld></HelloWorld>
    </div>
	
</template>

<script>
    import Navbar from './components/Navbar.vue'
    import Dashboard from './components/Dashboard.vue'
    import { mapActions, mapGetters } from 'vuex'
	import HelloWorld from './components/HelloWorld.vue'

export default {
	name: 'App',
	components: {
		Navbar,
		HelloWorld,
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
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
