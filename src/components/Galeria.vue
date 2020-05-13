<template>
    <v-carousel>
        <v-carousel-item v-for="(item, index) in items" :key="index" 
                reverse-transition="fade-transition"
                transition="fade-transition">

            <v-img :src="item.src" contain aspect-ratio=1.7> </v-img>
        </v-carousel-item>
    </v-carousel> 
</template>

<script>
export default {
    name:'Galeria',
    data() {
        return {
            items: [
                {
                    src:require("@/assets/test1.jpg")
                },
                {
                    src:require('../assets/test2.jpg')
                },
                {
                    src:require('../assets/team1.jpg')
                },
                {
                    src:require('../assets/team3.jpg')
                },

                
            ]
        }
    }
}

</script>
<style>

</style>
