<template>
    <div class="navigation" >
                <b-nav  align="center" class="bg-danger myNav">
                    <!-- Those are animal filers, the user can select none, one or several of them, so several animals can be "active"-->
                    <!-- The name of the animals must be replaced by their icons from the API -->
                    <b-nav-item @click="toogleActiveAnimal('Bengal Tiger')">Bengal Tiger</b-nav-item>
                    <b-nav-item  @click="toogleActiveAnimal('Giant Panda')">Giant Panda</b-nav-item>
                    <b-nav-item  @click="toogleActiveAnimal('Blue Whale')">Blue Whale</b-nav-item>
                    <b-nav-item @click="toogleActiveAnimal('Asian Elephant')">Asian Elephant</b-nav-item>
                    <b-nav-item @click="toogleActiveAnimal('Gorilla')">Gorilla</b-nav-item>
                    <b-nav-item @click="toogleActiveAnimal('Snow Leopard')">Snow Leopard</b-nav-item>
                    <b-nav-item @click="toogleActiveAnimal('Orangutan')">Orangutan</b-nav-item>
                    <b-nav-item @click="toogleActiveAnimal('Sea Turtle')">Sea Turtle</b-nav-item>
                    <b-nav-item @click="toogleActiveAnimal('Black Rhino')">Black Rhino</b-nav-item>
                    <b-nav-item @click="toogleActiveAnimal('African Penguin')">African Penguin</b-nav-item>
                    <b-nav-item @click="toogleActiveAnimal('Red Panda')">Red Panda</b-nav-item>
                    <b-nav-item @click="toogleActiveAnimal('Polar Bear')">Polar Bear</b-nav-item>
                </b-nav>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'Navbar',
	data: function () {
        return {
            activeAnimal: []
        }
    },
    methods: {
        ... mapActions([
            'setActiveAnimal',
            'removeActiveAnimal'
        ]),
        toogleActiveAnimal(animal){
           const res = this.activeAnimal.filter((item) => item == animal)
           console.log(res)
           if(res.length>0){
               this.removeActiveAnimal(animal)
           }
           else{
               this.setActiveAnimal(animal)
           }
            this.activeAnimal = this.getActiveAnimal
        }
    },
    computed:{
        ... mapGetters([
            'getActiveAnimal'
        ]),
    },
	mounted: function(){
        this.activeAnimal = this.getActiveAnimal
    }
}
</script>

<style>
    .myNav a {
        color: white;
    }

</style>