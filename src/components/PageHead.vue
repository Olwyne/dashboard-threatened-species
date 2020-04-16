<template>
    <div class="bg-danger">
        <div class="headLine d-flex justify-content-center">
            <div class="logo">
                <img src="../assets/white-logo.png" />
            </div>
            <div class="d-flex justify-content-center flex-column ml-3"> <p class="m-0">OBSERVE . STUDY . PROTECT</p></div>
        </div>
    </div>
</template>

<script>

export default {
	name: 'PageHead',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap');
    .headLine{
        font-family : 'Fugaz One', Avenir, Arial;
        font-size: 20px;
        color: white;
        height:60px;
    }

    .logo img, .logo {
        height:100%;
    }
    
</style>
