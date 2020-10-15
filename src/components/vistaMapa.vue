<template>
    <mapa :configMapa="configMapa"
            apiKey="AIzaSyAHxWqUJC1KmBMYiUU-zf-0OE05m_6yz64" >
        <template slot-scope="{ google, map }">
            <Marcadores
            v-for="marker in markers"
            :key="marker.id"
            :marker="marker"
            :google="google"
            :map="map"
            />
        </template> 
    </mapa>                                           

</template>

<script>

import mapa from '../components/mapa.vue'
import Marcadores from '../components/Marcadores.vue'
import { configMapa } from "@/constants/configMapa";

export default {

    components: {
        mapa,
        Marcadores
    },

    computed: {

        configMapa() {
            return {
                ...configMapa,
                center: this.mapCenter
            }
        },

        mapCenter() {
        return this.markers[0].position;
        }
    },

    data(){
        return{
            markers: [
                {
                id: "0",
                position: { lat: -13.1583635, lng: -72.603623 },
                title: "Machu Pichu - Cusco"
                },
                {
                id: "1",
                position: { lat: -12.025827, lng: -77.2679817 },
                title: "Lima - Perú"
                }
            ],

        }
    }

}

</script>