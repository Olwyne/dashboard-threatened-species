<template>
    <div>
        <div class="id-head-title">
            <p>Animal informations</p>
        </div>
        <div class="id-bg">
            <div class="d-flex flex-column justify-content-center id-img-infos">
                <div class="id-img text-center">
                    <img class="p-2" v-bind:src="'http://www.bloowatch.org'+infoAnimal.image" />
                </div>
                <div class="id-name text-center">
                    <p>{{infoAnimal.name}}</p>
                </div>
                <div class="id-infos w-100">
                    <div>
                        <p class="id-title">Scientific name : </p> <p>{{infoAnimal.scientific_name}}</p>
                    </div>
                    <div>
                        <p class="id-title">Status : </p><p>{{infoAnimal.status}}</p>
                    </div>
                    <div>
                        <p class="id-title">Estimated population : </p><p>{{infoAnimal.population}}</p>
                    </div>
                    <div>
                        <p class="id-title">Location : </p><p> {{infoAnimal.location}}</p>
                    </div>
                    <div>
                        <p class="id-title">Habitat : </p><p>{{infoAnimal.habitat}}</p>
                    </div>
                </div>
            </div>
            <div class=" d-flex flex-column justify-content-center id-infos-text">
                <p>{{infoAnimal.description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'AnimalIDCard',

        props: ['animal'],
        data: function () {
            return {
                infoAnimal: {},
                options: []
            }
        },
        methods: {
            getInfoAnimal() {
                let self = this
                fetch('http://www.bloowatch.org/developers/json/species').then(res => res.json()).then(data => {
                    const result = data.allSpecies

                    for (var el in result) {
                        const name = result[el].name;
                        if (name == this.getActiveAnimal) {
                            self.infoAnimal = {
                                name: result[el].name,
                                scientific_name: result[el].scientific_name,
                                status: result[el].status,
                                population: result[el].population,
                                location: result[el].location,
                                habitat: result[el].habitat,
                                description: result[el].description,
                                image: result[el].image.url
                            }
                        }

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
            this.getInfoAnimal()
            this.$root.$on('ThreatEvolution', () => {
                 this.getInfoAnimal()
            })
        }
    }
</script>

<style scoped>
    .id-head-title {
        font-weight: 600;
        font-size: 14px;
       text-align: center;
        margin-top: 19px;
        margin-bottom: 20px;
    }

    .id-title {
        font-family: 'Fugaz One', Avenir, Arial;
        text-transform: uppercase;
        color: #dc3545;
    }

    .id-img {
        height: 30%;
    }

    .id-img img {
        width: 100%;
    }

    .id-name {
        font-size: 16px;
        font-family: 'Fugaz One', Avenir, Arial;
        text-transform: uppercase;
    }

    .id-bg {
        border: solid 3px #dc3545;
        border-radius: 20px;
        font-size: 14px;
    }

    .id-infos p {
        display: inline;
    }

    .id-infos div {
        margin: 10px 0;
    }

    .id-infos-text, .id-img-infos {
        margin: 20px;
    }

    .id-infos-text p{
        overflow: auto;
    }

    @media (min-width: 767.98px) {
        .id-bg {
            display: flex;
            height: 350px;
        }

        .id-img-infos {
            width: 50%
        }

        .id-img img {
            height: 90%;
            width: auto;
        }

        .id-infos-text {
            width: 50%;
        }

        .id-head-title {
            font-size: 20px;
        }
    }
</style>