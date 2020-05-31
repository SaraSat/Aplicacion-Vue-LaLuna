<template>
<v-content>
    <v-layout wrap v-if="!eva &&  !luneros && !registro">
        <v-flex xs12 mb-1>
            <v-card dark class="jumbotron">
                <v-card-title><h1>Listado de luner@s</h1></v-card-title>
                <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, hic.</v-card-text>
                <v-card-actions>
                    <v-btn class="info" large @click="luneros=true" >Listado</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
        <v-flex xs12 mb-1>
            <v-card dark class="jumbotron">
                <v-card-title><h1>Evaluaciones</h1></v-card-title>
                <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, hic.</v-card-text>
                <v-card-actions>
                    <v-btn class="info" large @click="eva=true" >Listado de Evaluaciones</v-btn>
                </v-card-actions>

            </v-card>
        </v-flex>
        <v-flex xs12 mb-1>
            <v-card dark class="jumbotron">
                <v-card-title><h1>Registro</h1></v-card-title>
                <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, hic.</v-card-text>
                <v-card-actions>
                    <v-btn class="info" large @click="registro=true">Registrar</v-btn>
                </v-card-actions>

            </v-card>
        </v-flex>
    </v-layout>
    <Evaluaciones v-if="eva"></Evaluaciones>
    <Luneros v-if="luneros"></Luneros>
    <Registro v-if="registro"></Registro>
    </v-content>
</template>
<script>
import Evaluaciones from './Evaluaciones.vue'
import Luneros from './Luneros.vue'
import Registro from './Registro.vue'

export default {
    name:'Logado',
    components:{
        Luneros,
        Evaluaciones,
        Registro
    },
    data() {
        return {
            luneros:false,
            eva:false,
            registro:false
        }
    }
}
</script>
