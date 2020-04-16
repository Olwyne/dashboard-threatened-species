<template>
    <div class="navigation" >
                <b-nav  align="center" class="bg-danger myNav">
                    <!-- Those are animal filers, the user can select none, one or several of them, so several animals can be "active"-->
                    <!-- The name of the animals must be replaced by their icons from the API -->
                    <b-nav-item @click="toogleActiveAnimal('Bengal Tiger')" :class="getActiveAnimal.find(element=> element == 'Bengal Tiger') ?'active':''">
                        <img width="50px" class="placeImage" v-bind:src="'http://www.bloowatch.org'+iconAnimal[0]" />
                        </b-nav-item>
                    <b-nav-item @click="toogleActiveAnimal('Giant Panda')" :class="getActiveAnimal.find(element=> element == 'Giant Panda') ?'active':''">
                        <img width="50px" class="placeImage" v-bind:src="'http://www.bloowatch.org'+iconAnimal[1]" />
                    </b-nav-item>
                    <b-nav-item @click="toogleActiveAnimal('Blue Whale')" :class="getActiveAnimal.find(element=> element == 'Blue Whale') ?'active':''">
                        <img width="50px" class="placeImage" v-bind:src="'http://www.bloowatch.org'+iconAnimal[2]" />
                    </b-nav-item>
                    <b-nav-item @click="toogleActiveAnimal('Asian Elephant')" :class="getActiveAnimal.find(element=> element == 'Asian Elephant') ?'active':''">
                        <img width="50px" class="placeImage" v-bind:src="'http://www.bloowatch.org'+iconAnimal[3]" />
                    </b-nav-item>
                    <b-nav-item @click="toogleActiveAnimal('Gorilla')" :class="getActiveAnimal.find(element=> element == 'Gorilla') ?'active':''">
                        <img width="50px" class="placeImage" v-bind:src="'http://www.bloowatch.org'+iconAnimal[4]" />
                    </b-nav-item>
                    <b-nav-item @click="toogleActiveAnimal('Snow Leopard')" :class="getActiveAnimal.find(element=> element == 'Snow Leopard') ?'active':''">
                        <img width="50px" class="placeImage" v-bind:src="'http://www.bloowatch.org'+iconAnimal[5]" />
                    </b-nav-item>
                    <b-nav-item @click="toogleActiveAnimal('Orangutan')" :class="getActiveAnimal.find(element=> element == 'Orangutan') ?'active':''">
                        <img width="50px" class="placeImage" v-bind:src="'http://www.bloowatch.org'+iconAnimal[6]" />
                    </b-nav-item>
                    <b-nav-item @click="toogleActiveAnimal('Sea Turtle')" :class="getActiveAnimal.find(element=> element == 'Sea Turtle') ?'active':''">
                        <img width="50px" class="placeImage" v-bind:src="'http://www.bloowatch.org'+iconAnimal[7]" />
                    </b-nav-item>
                    <b-nav-item @click="toogleActiveAnimal('Black Rhino')" :class="getActiveAnimal.find(element=> element == 'Black Rhino') ?'active':''">
                        <img width="50px" class="placeImage" v-bind:src="'http://www.bloowatch.org'+iconAnimal[8]" />
                    </b-nav-item>
                    <b-nav-item @click="toogleActiveAnimal('African Penguin')" :class="getActiveAnimal.find(element=> element == 'African Penguin') ?'active':''">
                        <img width="50px" class="placeImage" v-bind:src="'http://www.bloowatch.org'+iconAnimal[9]" />
                    </b-nav-item>
                    <b-nav-item @click="toogleActiveAnimal('Red Panda')" :class="getActiveAnimal.find(element=> element == 'Red Panda') ?'active':''">
                        <img width="50px" class="placeImage" v-bind:src="'http://www.bloowatch.org'+iconAnimal[10]" />
                    </b-nav-item>
                    <b-nav-item @click="toogleActiveAnimal('Polar Bear')" :class="getActiveAnimal.find(element=> element == 'Polar Bear') ?'active':''">
                        <img width="50px" class="placeImage" v-bind:src="'http://www.bloowatch.org'+iconAnimal[11]" />
                    </b-nav-item>
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
            this.$root.$emit('AnimalIDCard') 
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
    .active{
        background-color:blue;
    }

</style>