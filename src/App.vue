<template>
  <div id="app">
	<Navbar activeAnimal="Panda"/>
	<HelloWorld :activeAnimal="getActiveAnimal"></HelloWorld>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import HelloWorld from './components/HelloWorld.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'App',
	components: {
		Navbar,
		HelloWorld
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
