<template>
    <div>
        <div class="id-scroll">
            <b-form-select @change="getInfoAnimal()" v-model="selected" :options="options"></b-form-select>
        </div>
        <div class="id-bg">
            <b-row>
                <b-col class="d-flex justify-content-center align-items-center flex-column">
                    <div class="id-img">
                        <img class="w-100 p-5" v-bind:src="'http://www.bloowatch.org'+infoAnimal.image" />
                    </div>
                    <div class="id-name">
                        <p>{{infoAnimal.name}}</p>
                    </div>
                </b-col>
                <b-col  class="d-flex justify-content-center align-items-center m-4">
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
                </b-col>
                <b-col class="d-flex justify-content-center align-items-center">
                    <div class="id-infos-text w-100 m-4">
                        <p>{{infoAnimal.description}}</p>
                    </div>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
 import { mapGetters } from 'vuex'

export default {
    name: 'AnimalIDCard',
    
    props:['animal'],
	data: function () {
        return {
            infoAnimal:{},
            selected: null,
            options: []
        }
    },
    methods: {
        getInfoAnimal(){
			let self=this
			fetch('http://www.bloowatch.org/developers/json/species').then(res => res.json()).then(data => {
				const result = data.allSpecies

				for(var el in result){
					const name = result[el].name;
						if(name==this.selected){
                            self.infoAnimal = {
                                name: result[el].name,
                                scientific_name: result[el].scientific_name,
                                status: result[el].status,
                                population: result[el].population,
                                location: result[el].location,
                                habitat: result[el].habitat,
                                description: result[el].description,
                                image : result[el].image.url
                            }
						}

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
        fetch('http://www.bloowatch.org/developers/json/species').then(res => res.json()).then(data => {
            const result = data.allSpecies
            const newData = []
            for(var el in result){
                newData.push(result[el].name)
            }
            this.options=newData
            this.selected=this.options[0]
        })
        this.getInfoAnimal()
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .id-title {
        font-family: 'Fugaz One', Avenir, Arial;
        text-transform: uppercase;
        color: #dc3545;
    }

    .id-name {
        font-size: 25px;
    }

    .id-bg {
        border: solid 3px #dc3545 ;
        border-radius: 20px;
    }

    .id-infos p {
        display: inline;
    }

    .id-infos div {
        margin: 10px 0;
    }

</style>
