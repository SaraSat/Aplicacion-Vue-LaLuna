<template>
    <v-container>
        <v-toolbar class="text-uppercase" dark xs4>
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
            <v-btn class="error" :to="{name:'Login'}">Salir</v-btn>            
        </v-toolbar>
            <v-spacer/>

        <v-data-table :headers="headers" :items="items"  hide-default-footer :search="filter" show-select
                            v-model="selected" dark :sort-by="['name']" 
                             dense>

                <!--Plantilla del desplegable con más información de la tarea -->
            <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="info(item)">mdi-plus</v-icon>
            </template>
        </v-data-table>
                    <v-dialog v-model="dialog" max-width="500" dark>
                <v-card>
                    <v-card-title>Información</v-card-title>
                    <v-card-text>
                        Tutores: {{item.tutores}}
                        <v-divider></v-divider>
                        Patologias: {{item.patologias}}
                        <v-divider></v-divider>
                        Comentarios: {{item.coment}}
                    </v-card-text>
                    <v-card-actions>
                        <v-btn class="error" @click="dialog=false">Cerrar</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

    </v-container>
</template>

<script>
export default {
    name:'Luneros',
    mounted(){
        this.$store.dispatch('loadLuneros')
    },
    computed:{
        items(){
            return this.$store.getters.luneros
        },
    },
    data(){
        return{
            selected:[],
            expanded:[],
            filter:'',
            headers:[    
                { text: "Nombre", value: "nombre"},
                { text: "Apellidos", value: "apellidos" },
                { text: "Teléfono", value: "telf", sortable: false },
                {text:"Teléfono 2",value: "telf2", sortable: false},
                { text: 'Más Información', value: 'actions', sortable: false },                
                ],
            dialog:false,
            index:-1,
            item:[]

            
        }
    },
    methods: {
        info(item){
            this.index = this.items.indexOf(item)
            this.item = Object.assign({}, item)
            this.dialog = true
        }
    },
}
</script>
