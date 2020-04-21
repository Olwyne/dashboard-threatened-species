<template>
    <div class="navigation">
        <b-nav align="center" class="bg-danger myNav">
            <b-nav-item @click="toogleActiveAnimal('Bengal Tiger')" :class="getActiveAnimal== 'Bengal Tiger' ?'active':''">
                <img class="placeImage" v-bind:src="'http://www.bloowatch.org'+iconAnimal[0]" />
            </b-nav-item>
            <b-nav-item @click="toogleActiveAnimal('Giant Panda')" :class="getActiveAnimal== 'Giant Panda' ?'active':''">
                <img class="placeImage" v-bind:src="'http://www.bloowatch.org'+iconAnimal[1]" />
            </b-nav-item>
            <b-nav-item @click="toogleActiveAnimal('Blue Whale')" :class="getActiveAnimal == 'Blue Whale' ?'active':''">
                <img class="placeImage" v-bind:src="'http://www.bloowatch.org'+iconAnimal[2]" />
            </b-nav-item>
            <b-nav-item @click="toogleActiveAnimal('Asian Elephant')" :class="getActiveAnimal== 'Asian Elephant' ?'active':''">
                <img class="placeImage" v-bind:src="'http://www.bloowatch.org'+iconAnimal[3]" />
            </b-nav-item>
            <b-nav-item @click="toogleActiveAnimal('Gorilla')" :class="getActiveAnimal== 'Gorilla' ?'active':''">
                <img class="placeImage" v-bind:src="'http://www.bloowatch.org'+iconAnimal[4]" />
            </b-nav-item>
            <b-nav-item @click="toogleActiveAnimal('Snow Leopard')" :class="getActiveAnimal== 'Snow Leopard' ?'active':''">
                <img class="placeImage" v-bind:src="'http://www.bloowatch.org'+iconAnimal[5]" />
            </b-nav-item>
            <b-nav-item @click="toogleActiveAnimal('Orangutan')" :class="getActiveAnimal == 'Orangutan' ?'active':''">
                <img class="placeImage" v-bind:src="'http://www.bloowatch.org'+iconAnimal[6]" />
            </b-nav-item>
            <b-nav-item @click="toogleActiveAnimal('Sea Turtle')" :class="getActiveAnimal == 'Sea Turtle' ?'active':''">
                <img class="placeImage" v-bind:src="'http://www.bloowatch.org'+iconAnimal[7]" />
            </b-nav-item>
            <b-nav-item @click="toogleActiveAnimal('Black Rhino')" :class="getActiveAnimal== 'Black Rhino' ?'active':''">
                <img class="placeImage" v-bind:src="'http://www.bloowatch.org'+iconAnimal[8]" />
            </b-nav-item>
            <b-nav-item @click="toogleActiveAnimal('African Penguin')" :class="getActiveAnimal == 'African Penguin' ?'active':''">
                <img class="placeImage" v-bind:src="'http://www.bloowatch.org'+iconAnimal[9]" />
            </b-nav-item>
            <b-nav-item @click="toogleActiveAnimal('Red Panda')" :class="getActiveAnimal == 'Red Panda' ?'active':''">
                <img class="placeImage" v-bind:src="'http://www.bloowatch.org'+iconAnimal[10]" />
            </b-nav-item>
            <b-nav-item @click="toogleActiveAnimal('Polar Bear')" :class="getActiveAnimal== 'Polar Bear' ?'active':''">
                <img class="placeImage" v-bind:src="'http://www.bloowatch.org'+iconAnimal[11]" />
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
                iconAnimal: []
            }
        },
        methods: {
            ...mapActions([
                'setActiveAnimal',
                'removeActiveAnimal'
            ]),
            toogleActiveAnimal(animal) {
                this.setActiveAnimal(animal)
                this.activeAnimal = this.getActiveAnimal
                this.$root.$emit('HorizontalBarChart')
                this.$root.$emit('ThreatEvolution')
            },
            getIconAnimal() {
                fetch('http://www.bloowatch.org/developers/json/species').then(res => res.json()).then(data => {
                    const result = data.allSpecies
                    for (var el in result) {
                        this.iconAnimal.push(result[el].image.url)
                    }
                });

            }
        },
        computed: {
            ...mapGetters([
                'getActiveAnimal'
            ]),
        },
        mounted: function () {
            this.activeAnimal = this.getActiveAnimal
            this.getIconAnimal()
        }
    }
</script>

<style scoped>
    .active {
        background-color: white;
    }

    .myNav {
        height: 50px;
        margin-bottom: 20px;
    }

        .myNav .nav-link {
            padding: 0;
        }

        .myNav li, .myNav a {
            height: 100%;
            text-align: center;
        }

        .myNav li {
            width: 8%;
            display: inline;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 5px;
        }

        .myNav a {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .myNav img {
            max-width: 100%;
            max-height: 100%;
            display: block;
            margin: auto;
        }

    @media (min-width: 767.98px) {
        .myNav li {
            width: 4%;
            padding: 5px 10px;
        }
    }
</style>