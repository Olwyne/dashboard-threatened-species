<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'App',
	components: {
		HelloWorld
	},
	data: function () {
        return {
        }
    },
    methods: {
        ... mapActions([
                'addLocationToStore',
                'setActivePage',
                'addWalkToStore',
                'setActiveTitle'
        ]),
    },
    computed:{
            ... mapGetters([
                'getActivePage',
                'getActiveTitle',
                'getGameState',
                'getPreviousPage'
            ]),
    },
	mounted: function(){
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
