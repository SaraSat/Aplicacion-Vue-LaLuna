<template>
    <v-container>
        <v-toolbar class="text-uppercase" dark>
            <v-toolbar-title class="text-uppercase">
                <span class="font-weight-light">Lista de </span>
                <span>Luneros</span>
            </v-toolbar-title>
             <v-spacer/>
            <v-text-field 
                    v-model="filter" label="Buscar..."
                    hide-details 
                    single-line
                    append-icon="mdi-magnify">
                </v-text-field>
                <v-spacer/>
                
            </v-toolbar>

        <v-spacer/>

        <v-data-table :headers="headers" :items="items"  hide-default-footer :search="filter" show-select
                            v-model="selected" dark :sort-by="['name']" 
                            :expanded.sync="expanded" show-expand  :single-expand="true">

            <!--Plantilla del desplegable con más información de la tarea -->
            <template v-slot:expanded-item="{headers, item}">
                    <td :colspan="2">Tutores: {{item.tutores}}</td>
                    <td >Patologias: {{item.patologias}}</td>
                    <td >Segundo Teléfono:{{item.telf2}} </td>
                    <td >Comentarios: {{item.coment}} </td>
            </template>


        </v-data-table>
    </v-container>
</template>

<script>
export default {
    name:'Luneros',
    mounted(){
       return this.$store.dispatch('loadLuneros')
    },
    computed:{
        items(){
            return this.$store.getters.luneros
        }
    },
    data(){
        return{
            selected:[],
            expanded:[],
            filter:'',
            headers:[    
                { text: "Nombre", value: "nombre" },
                { text: "Apellidos", value: "apellidos" },
                { text: "Teléfono", value: "telf" },
                { text: "", value: "data-table-expand" }
                ]
        }
    }
}
</script>
