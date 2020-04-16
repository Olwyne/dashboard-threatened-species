<template>
    <div class="navigation" >
                <b-nav  align="center" class="bg-danger myNav">
                    <!-- Those are animal filers, the user can select none, one or several of them, so several animals can be "active"-->
                    <!-- The name of the animals must be replaced by their icons from the API -->
                    <b-nav-item @click="toogleActiveAnimal('Bengal Tiger')"><img width="50px" class="placeImage" v-bind:src="'http://www.bloowatch.org'+iconAnimal[0]" /></b-nav-item>
                    <b-nav-item @click="toogleActiveAnimal('Giant Panda')"><img width="50px" class="placeImage" v-bind:src="'http://www.bloowatch.org'+iconAnimal[1]" /></b-nav-item>
                    <b-nav-item  @click="toogleActiveAnimal('Blue Whale')"><img width="50px" class="placeImage" v-bind:src="'http://www.bloowatch.org'+iconAnimal[2]" /></b-nav-item>
                    <b-nav-item @click="toogleActiveAnimal('Asian Elephant')"><img width="50px" class="placeImage" v-bind:src="'http://www.bloowatch.org'+iconAnimal[3]" /></b-nav-item>
                    <b-nav-item @click="toogleActiveAnimal('Gorilla')"><img width="50px" class="placeImage" v-bind:src="'http://www.bloowatch.org'+iconAnimal[4]" /></b-nav-item>
                    <b-nav-item @click="toogleActiveAnimal('Snow Leopard')"><img width="50px" class="placeImage" v-bind:src="'http://www.bloowatch.org'+iconAnimal[5]" /></b-nav-item>
                    <b-nav-item @click="toogleActiveAnimal('Orangutan')"><img width="50px" class="placeImage" v-bind:src="'http://www.bloowatch.org'+iconAnimal[6]" /></b-nav-item>
                    <b-nav-item @click="toogleActiveAnimal('Sea Turtle')"><img width="50px" class="placeImage" v-bind:src="'http://www.bloowatch.org'+iconAnimal[7]" /></b-nav-item>
                    <b-nav-item @click="toogleActiveAnimal('Black Rhino')"><img width="50px" class="placeImage" v-bind:src="'http://www.bloowatch.org'+iconAnimal[8]" /></b-nav-item>
                    <b-nav-item @click="toogleActiveAnimal('African Penguin')"><img width="50px" class="placeImage" v-bind:src="'http://www.bloowatch.org'+iconAnimal[9]" /></b-nav-item>
                    <b-nav-item @click="toogleActiveAnimal('Red Panda')"><img width="50px" class="placeImage" v-bind:src="'http://www.bloowatch.org'+iconAnimal[10]" /></b-nav-item>
                    <b-nav-item @click="toogleActiveAnimal('Polar Bear')"><img width="50px" class="placeImage" v-bind:src="'http://www.bloowatch.org'+iconAnimal[11]" /></b-nav-item>
                </b-nav>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'Navbar',
	data: function () {
        return {
            activeAnimal: [],
            iconAnimal:[]
        }
    },
    methods: {
        ... mapActions([
            'setActiveAnimal',
            'removeActiveAnimal'
        ]),
        toogleActiveAnimal(animal){
           const res = this.activeAnimal.filter((item) => item == animal)
           if(res.length>0){
               this.removeActiveAnimal(animal)
           }
           else{
               this.setActiveAnimal(animal)
           }
            this.activeAnimal = this.getActiveAnimal
            this.$root.$emit('HorizontalBarChart') 
        },
        getIconAnimal(){
            fetch('http://www.bloowatch.org/developers/json/species').then(res => res.json()).then(data => {
                const result = data.allSpecies
                for(var el in result){
                   this.iconAnimal.push(result[el].image.url)
                }
            });
            
        }
    },
    computed:{
        ... mapGetters([
            'getActiveAnimal'
        ]),
    },
	mounted: function(){
        this.activeAnimal = this.getActiveAnimal
        this.getIconAnimal()
    }
}
</script>

<style>
    .myNav a {
        color: white;
    }

</style>