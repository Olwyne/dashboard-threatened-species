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
                        <p>{{animal}}</p>
                    </div>
                </b-col>
                <b-col  class="d-flex justify-content-center align-items-center m-4">
                    <div class="id-infos w-100">
                        <div>
                            <p>Scientific name : {{infoAnimal.scientific_name}}</p>
                        </div>
                        <div>
                            <p>Status : {{infoAnimal.status}}</p>
                        </div>
                        <div>
                            <p>Estimated population : {{infoAnimal.population}}</p>
                        </div>
                        <div>
                            <p>Location: {{infoAnimal.location}}</p>
                        </div>
                        <div>
                            <p>Habitat: {{infoAnimal.habitat}}</p>
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
        this.selected=this.getActiveAnimal[0]
        this.getActiveAnimal.forEach(element => {
            const res = {value: element, text : element}
            this.options.push(res)
        })
        this.getInfoAnimal()
        this.$root.$on('HorizontalBarChart', () => {
            this.options=[]
            this.selected=this.getActiveAnimal[0]
            this.getActiveAnimal.forEach(element => {
                const res = {value: element, text : element}
                this.options.push(res)
            })
            this.getInfoAnimal()
        })
 
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .id-name {
        font-size: 25px;
    }
    .id-bg {
        background-color: #dc3545;
    }
</style>
