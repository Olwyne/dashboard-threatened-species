<template>
    <div class="navigation" >
                <b-nav  align="center" class="bg-danger myNav">
                    <!-- Those are animal filers, the user can select none, one or several of them, so several animals can be "active"-->
                    <!-- The name of the animals must be replaced by their icons from the API -->
                    <b-nav-item>Panda</b-nav-item>
                    <b-nav-item>Monkey</b-nav-item>
                    <b-nav-item>Gorilla </b-nav-item>
                    <b-nav-item>Panthera</b-nav-item>
                    <b-nav-item>Panda</b-nav-item>
                    <b-nav-item>Monkey</b-nav-item>
                    <b-nav-item>Gorilla </b-nav-item>
                    <b-nav-item>Panthera</b-nav-item>
                    <b-nav-item>Panda</b-nav-item>
                    <b-nav-item>Monkey</b-nav-item>
                    <b-nav-item>Gorilla </b-nav-item>
                    <b-nav-item>Panthera</b-nav-item>
                </b-nav>
    </div>
</template>
<script>

    export default {
	name: 'Navbar',
	props: {
		msg: String
	},
	data: function () {
        return {
        }
    },
    methods: {

    },
    computed:{

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