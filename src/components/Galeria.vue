<template>
    <v-carousel>
        <v-carousel-item v-for="(item, index) in items" :key="index" 
                reverse-transition="fade-transition" 
                transition="fade-transition" >

            <v-img :src="item.src" :alt="item.alt" contain="" height="100%" width="100%"> </v-img>
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
                    src:require("@/assets/grupal.jpeg"),
                    alt:"Grupal en la estación de renfe de Alcobendas" 
                },
                {
                    src:require('../assets/manofest.jpeg'),
                    alt:"Grupal en el festival de cine de la mano negra" 
                },
                {
                    src:require('../assets/manualidades.jpeg'),
                    alt:"Preparando los disfraces para el festival de Carnaval" 
                },
                {
                    src:require('../assets/plazaMayor.jpeg'),
                    alt:"Esperando el bocadillo en la plaza Mayor de Madrid" 
                },
                {
                    src:require('../assets/renfe.jpeg'),
                    alt:"Yendo hace Cercedilla en renfe" 
                },
                                {
                    src:require('../assets/rugby.jpeg'),
                    alt:"Jugando al rugby" 
                },



                
            ]
        }
    }
}

</script>
<style>

</style>
