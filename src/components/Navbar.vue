<template>
    <div class="navigation" >
                <b-nav  align="center" class="bg-danger myNav">
                    <!-- Those are animal filers, the user can select none, one or several of them, so several animals can be "active"-->
                    <!-- The name of the animals must be replaced by their icons from the API -->
                    <b-nav-item @click="setActiveAnimal('Bengal Tiger')">Bengal Tiger</b-nav-item>
                    <b-nav-item  @click="setActiveAnimal('Giant Panda')">Giant Panda</b-nav-item>
                    <b-nav-item  @click="setActiveAnimal('Blue Whale')">Blue Whale</b-nav-item>
                    <b-nav-item @click="setActiveAnimal('Asian Elephant')">Asian Elephant</b-nav-item>
                    <b-nav-item @click="setActiveAnimal('Gorilla')">Gorilla</b-nav-item>
                    <b-nav-item @click="setActiveAnimal('Snow Leopard')">Snow Leopard</b-nav-item>
                    <b-nav-item @click="setActiveAnimal('Orangutan')">Orangutan</b-nav-item>
                    <b-nav-item @click="setActiveAnimal('Sea Turtle')">Sea Turtle</b-nav-item>
                    <b-nav-item @click="setActiveAnimal('Black Rhino')">Black Rhino</b-nav-item>
                    <b-nav-item @click="setActiveAnimal('African Penguin')">African Penguin</b-nav-item>
                    <b-nav-item @click="setActiveAnimal('Red Panda')">Red Panda</b-nav-item>
                    <b-nav-item @click="setActiveAnimal('Polar Bear')">Polar Bear</b-nav-item>
                </b-nav>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'Navbar',
	props: {
		activeAnimal: String
	},
	data: function () {
        return {
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
    }
}
</script>

<style>
    .myNav a {
        color: white;
    }

</style>