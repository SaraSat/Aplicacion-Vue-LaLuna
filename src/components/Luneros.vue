<template>
    <v-content>
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
                            v-model="selected" dark>

        </v-data-table>
    </v-content>
</template>

<script>
export default {
    name:'Luneros',
    mounted(){

    },
    computed:{
        items(){

        }
    },
    data(){
        return{
            selected:[],
            filter:'',
            headers:[    
                { text: "Nombre", value: "nombre" },
                { text: "Apellidos", value: "apellidos" },
                { text: "Teléfono", value: "telefono" },
                ]
        }
    }
}
</script>
