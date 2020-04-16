<template>
    <div>
        <div class="id-scroll">
            <b-form-select v-model="selected" :options="options"></b-form-select>
        </div>
        <div class="id-bg">
            <b-row>
                <b-col class="d-flex justify-content-center align-items-center flex-column">
                    <div class="id-img">
                        <img class="w-100 p-5" src="http://www.bloowatch.org/images/bengal-tiger_image.png" />
                    </div>
                    <div class="id-name">
                        <p>Bengal Tiger</p>
                    </div>
                </b-col>
                <b-col  class="d-flex justify-content-center align-items-center m-4">
                    <div class="id-infos w-100">
                        <div>
                            <p>Scientific name : PANTHERA TIGRIS TIGRIS</p>
                        </div>
                        <div>
                            <p>Status : ENDANGERED</p>
                        </div>
                        <div>
                            <p>Estimated population : 2,500</p>
                        </div>
                        <div>
                            <p>Location: SOUTHEAST ASIA</p>
                        </div>
                        <div>
                            <p>Habitat: TROPICAL RAINFORESTS, MARSHES, AND TALL GRASSES</p>
                        </div>
                    </div>
                </b-col>
                <b-col class="d-flex justify-content-center align-items-center">
                    <div class="id-infos-text w-100 m-4">
                        <p>The Bengal tiger lives in the Indian subcontinent. It is one of the biggest wild cats alive and is the national animal of India and Bangladesh. This species is at the top of the food chain in the wild and plays a vital link in maintaining the rich diversity of nature. It is listed as endangered species since 2008 and there are only about 2,500 individuals left. Most live in India, but there are a few hundered also in Bangladesh, Nepal and Bhutan. The species is threatened by poaching and loss of habitat caused by climat change.</p>
                    </div>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>

export default {
	name: 'AnimalIDCard',
	data: function () {
        return {
            selected: 'a',
        options: [
          { value: 'a', text: 'animal1' },
          { value: 'b', text: 'animal2' },
          { value: 'c', text: 'animal3' },
          { value: 'd', text: 'animal4' },
          { value: 'e', text: 'animal5' }
        ]
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .id-name {
        font-size: 25px;
    }
    .id-bg {
        background-color: #dc3545;
    }
</style>
