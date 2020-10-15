<template>
<!--Vista de la tabla de Luneros -->
    <v-container>

        <!--Botón Intesertar que abre el diálogo con el formulario--> 
        <v-btn class="d-flex flex-column ml-12 mb-5" @click="dialog2=true"  v-if="login">
            <v-icon color ="green darken-2" x-large >mdi-pencil</v-icon>
            <span>Insertar</span>
        </v-btn>

        <!--Dialog2: Dialogo para insertar un nuevo lunero -->
        <v-dialog v-model="dialog2">
            <v-card dark>

                <v-card-title>
                  <v-content v-if="errors" >
                    <div v-for="(v, k) in errors" :key="k">
                        <p v-for="error in v" :key="error" class="text-sm error">{{ error }}</p>
                    </div>
                  </v-content>
                </v-card-title>

                <v-card-title>Insertar un nuevo Lunero</v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col><v-text-field label="Nombre" v-model="nombre"></v-text-field></v-col>
                        <v-col><v-text-field label="Apellidos" v-model="apellidos"></v-text-field></v-col>
                    </v-row>
                    <v-row>
                        <v-col><v-text-field label="Tutores" v-model="tutores"></v-text-field></v-col>
                        <v-col><v-text-field label="Teléfono 1: " v-model="telf"></v-text-field></v-col>
                        <v-col><v-text-field label="Teléfono 2: " v-model="telf2"></v-text-field></v-col>
                    </v-row>
                    <v-row>
                        <v-col><v-textarea label="patologias" v-model="patologias" rows="4"></v-textarea></v-col>
                        <v-col><v-textarea label="comentarios" v-model="coment" rows="4"></v-textarea></v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-btn class="success" @click="crearLunero()">Aceptar</v-btn>
                    <v-btn class="error" @click="cancelar()">Cancelar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>


        <!--Barra de búsqueda y cabecera de la date table-->
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

        <!--Tabla de de datos con filtrado por búesqueda y ordenación por nombre o apellido.
        Los checkbox sin funcionalidad interna, únicamente se han puesto para marcar al pasar lista-->
        <v-data-table :headers="headers" :items="items"  :search="filter" show-select
                        v-model="selected" dark :sort-by="['name']" 
                        dense :items-per-page="10" >

            <!--Plantilla del botón para abrir dialog con más información -->
            <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="info(item)">mdi-plus</v-icon>
            </template>

            <!--Botón para eliminar lunero -->
            <template v-slot:item.delete="{item}">
                <v-btn class="error" icon="" small>
                    <v-icon small @click="eliminarLunero(item.id)">mdi-delete</v-icon>
                </v-btn>
            </template>
        </v-data-table>

        <!--Dialog con más información del lunero-->
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
                        <v-btn class="error" @click="dialog=false ">Cerrar</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

        <!--Dialog3: Dialogo para confirmar eliminación de lunero -->
        <v-dialog v-model="dialog3" v-if="dialog3" persistent max-width="350px">
            <v-card>
                <v-card-title>Seguro que quieres eliminar?</v-card-title>
                <v-card-actions>
                <v-btn class="error" @click="confirmarEliminar()" >Eliminar</v-btn>
                <v-btn @click="dialog3=false" class="success">Cancelar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog> 


    </v-container>
</template>

<script>
export default {
    name:'Luneros',

    mounted(){
        this.$store.dispatch('loadLuneros') //carga de items
    },

    computed:{
        items(){
            return this.$store.getters.luneros //carga de luneros
        },

        login() {
            return this.$store.getters.login
        },

        errors() {
            return this.$store.getters.errors
        }
    },
    
    data(){
        return{
            selected:[], //checkbox

            filter:'', //Filtrado por nombre o apellido

            headers:[    //Cabeceras de la tabla
                { text: "Nombre", value: "nombre"},
                { text: "Apellidos", value: "apellidos" },
                { text: "Teléfono", value: "telf", sortable:false },
                { text:"Teléfono 2",value: "telf2", sortable:false },
                { text: 'Más Información', value: 'actions', sortable:false }, 
                { text: "Eliminar", value: 'delete', sortable:false },               
                ],

            page: 1,
            pageCount: 0,

            dialog:false,
            dialog2:false,
            dialog3:false,

            index:-1,
            item:[], 

            id:'',
            nombre:'',
            apellidos:'',
            telf:'',
            telf2:'',
            tutores:'',
            patologias:'',
            coment:''

        }
    },
    methods: {
        //Función que permite visualizar la información del lunero seleccionado
        info(item){
            this.index = this.items.indexOf(item)
            this.item = Object.assign({}, item)
            this.dialog = true
        },

        crearLunero(){

            this.telf = parseInt(this.telf)

            if(this.telf2 != "" && this.telf2 != " "){
                this.telf2 = parseInt(this.telf2)
            }

            var datos = {

                nombre:this.nombre,
                apellidos:this.apellidos,
                telf:this.telf,
                telf2:this.telf2,
                tutores:this.tutores,
                patologias:this.patologias,
                coment:this.coment
            }

            this.$store.dispatch('insertLunero', {datos:datos})


            if((datos.nombre != " " && datos.telf != " ") && 
                (datos.nombre != '' && datos.telf != '') && (!isNaN(datos.telf) && !isNaN(datos.telf2))){

                        this.dialog2 = false

                        this.nombre = ''
                        this.apellidos = ''
                        this.telf = ''
                        this.telf2 = ''
                        this.tutores = ''
                        this.patologias = ''
                        this.coment = ''

            }

        },

        cancelar(){

            this.dialog2 = false

            this.nombre = '',
            this.fecha = '',
            this.desc = '',
            this.id = ''

            this.$store.commit('setErrors', '')
        },

        eliminarLunero(id){
            this.id = id
            this.dialog3 = true
        },

        confirmarEliminar(){
            
            this.$store.dispatch('deleteLunero', this.id)

            this.dialog3 = false
        }
    },
}
</script>
