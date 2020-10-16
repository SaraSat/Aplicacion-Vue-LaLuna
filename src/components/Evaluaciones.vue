<template>
    <v-container>
        <!--Vista de evaluaciones-->
        <h3>Evaluaciones</h3>
        <div> 
            
            <v-btn class=" ml-12" @click="dialog=true">
                <v-icon color ="green darken-2" x-large >mdi-pencil</v-icon>
                <span>Insertar</span>
            </v-btn>
            <v-btn class="error float-right mt-0 mr-10" :to="{name:'Login'}" large=""> Salir</v-btn>               
        </div>
             
            
        <!--Tarjeta de evaluacion-->
        <v-row wrap>
            <v-col  v-for="item in items" :key="item.id" xs-12>
                <v-card dark min-width="345" min-height="700" >
                    <v-card-title><h3>{{item.nombre}} {{item.fecha}}</h3> </v-card-title>
                    <v-card-text><h4>Qué hemos hecho?:</h4> {{item.desc}}</v-card-text>
                    <v-card-text><h4>Lo mejor:</h4> {{item.mejor}}</v-card-text>
                    <v-card-text><h4>Lo peor:</h4> {{item.peor}}</v-card-text>
                    <v-card-text><h4>Equipo:</h4> {{item.equipo}}</v-card-text>
                    <v-card-text><h4>A recordar:</h4> {{item.recordar}}</v-card-text>
                    <v-card-actions>
                        <v-btn class="green" @click="preEdit(item.id)">Editar</v-btn>
                        <v-btn class="error" @click="eliminar(item.id)">Eliminar</v-btn>
                    </v-card-actions>
                </v-card>

                    <!--Dialogo para confirmar eliminación-->
                    <v-dialog v-model="dialog3" v-if="dialog3" persistent max-width="350px">
                    <v-card>
                        <v-card-title>Seguro que quieres eliminar?</v-card-title>
                        <v-card-actions>
                            <v-btn class="error" @click="confirmar()" >Eliminar</v-btn>
                            <v-btn @click="dialog3=false">Cancelar</v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-dialog>

            </v-col>
        </v-row>


        <!--Tarjeta para insertar nueva evaluacion-->
        <v-dialog v-model="dialog" persistent max-width="600px">
            <v-card dark>

                <v-card-title>
                    <v-content v-if="errors" >
                    <div v-for="(v, k) in errors" :key="k">
                        <p v-for="error in v" :key="error" class="text-sm error">
                            {{ error }}
                        </p>
                    </div>
                    </v-content>
                </v-card-title>

                <v-card-title>Nueva Evaluación</v-card-title>

                <v-card-subtitle>
                    <v-row>
                        <v-col>
                            <v-text-field v-model="nombre" label="Nombre Actividad" ></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field v-model="fecha" label="Fecha Actividad" type="date"></v-text-field>
                        </v-col>
                    </v-row>
                </v-card-subtitle>

                <v-row>
                    <v-col>
                        <v-card-text>
                            <v-textarea v-model="desc" label="Qué hemos hecho" rows="2"></v-textarea>
                        </v-card-text>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col>
                        <v-card-text>
                            <v-textarea v-model="mejor" label="Lo mejor" rows="4"></v-textarea>
                        </v-card-text>
                    </v-col>
                    <v-col>
                        <v-card-text>
                            <v-textarea v-model="peor" label="Lo peor" rows="4"></v-textarea>
                        </v-card-text>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col>
                        <v-card-text>
                            <v-textarea v-model="equipo" label="Equipo" rows="4"></v-textarea>
                        </v-card-text>
                    </v-col>
                    <v-col>
                        <v-card-text>
                            <v-textarea v-model="recordar" label="A recordar" rows="4"></v-textarea>
                        </v-card-text>
                    </v-col>
                </v-row>

                <v-card-actions>
                    <v-btn class="success" @click="insertar">Aceptar</v-btn>
                    <v-btn class="error" @click="cancelar()">Cancelar</v-btn>
                </v-card-actions>

            </v-card>
        </v-dialog>

        <!--Tarjeta para editar una evaluacion -->
                <v-dialog v-model="dialog2" persistent max-width="600px">
                <v-card dark>

                    <v-card-title>
                        <v-content v-if="errors" >
                        <div v-for="(v, k) in errors" :key="k">
                            <p v-for="error in v" :key="error" class="text-sm error">
                                {{ error }}
                            </p>
                        </div>
                        </v-content>
                    </v-card-title>


                <v-card-title>Nueva Evaluación</v-card-title>

                <v-card-subtitle>
                    <v-row>
                        <v-col>
                            <v-text-field v-model="nombre" label="Nombre Actividad"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field v-model="fecha" label="Fecha Actividad" 
                                        :type="editDate ? 'date' : 'text'" @focus="editDate=true"></v-text-field>
                        </v-col>
                    </v-row>
                </v-card-subtitle>
                
                <v-row>
                    <v-col>
                        <v-card-text>
                            <v-textarea v-model="desc" label="Qué hemos hecho" rows="2"></v-textarea>
                        </v-card-text>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col>
                        <v-card-text>
                            <v-textarea v-model="mejor" label="Lo mejor" rows="4"></v-textarea>
                        </v-card-text>
                    </v-col>
                    <v-col>
                        <v-card-text>
                            <v-textarea v-model="peor" label="Lo peor" rows="4"></v-textarea>
                        </v-card-text>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col>
                        <v-card-text>
                            <v-textarea v-model="equipo" label="Equipo" rows="4"></v-textarea>
                        </v-card-text>
                    </v-col>
                    <v-col>
                        <v-card-text>
                            <v-textarea v-model="recordar" label="A recordar" rows="4"></v-textarea>
                        </v-card-text>
                    </v-col>
                </v-row>

                <v-card-actions>
                    <v-btn class="success" @click="editar(id)">Aceptar</v-btn>
                    <v-btn class="error" @click="cancelar()">Cancelar</v-btn>
                </v-card-actions>
        </v-card>
        </v-dialog>

        <v-btn absolute dark mr-0 mt-0 fab bottom right color="blue" href="#"><v-icon color="white">mdi-arrow-up</v-icon></v-btn>
        
    </v-container>
</template>

<script>
export default {
    name:'Evaluaciones',
    computed:{
        items() {
            return this.$store.getters.evaluaciones //carga de evaluaciones --> Variable
        },

        errors() {
            return this.$store.getters.errors
        }
    },

    mounted() {
         this.$store.dispatch('loadEvaluaciones') //Carga de evaluaciones
    },

    data() {
        return {
            dialog:false,
            dialog2:false,
            dialog3:false,
            editDate:false,

            nombre:'',
            fecha:'',
            desc:'',
            mejor:'',
            peor:'',
            equipo:'',
            recordar:'',
            id:'',

        }
    },

    methods: {
        //Función que permite la inserccion de una evaluacion nueva
        insertar() {
            this.fecha = this.crearFecha()

            var datos = {

                nombre:this.nombre,
                fecha:this.fecha,
                desc:this.desc,
                mejor:this.mejor,
                peor:this.peor,
                equipo:this.equipo,
                recordar:this.recordar,

            }
            this.$store.dispatch('insertEvaluacion', {datos:datos})

            if((datos.nombre != " " && datos.desc != " " && datos.fecha != " "  && datos.mejor != " " && datos.peor != " "  && datos.equipo != " ") && 
                (datos.nombre != '' && datos.desc != '' && datos.fecha != ''  && datos.mejor != "" && datos.peor != ""  && datos.equipo != "")){

                    this.nombre = ''
                    this.fecha = ''
                    this.desc = ''
                    this.mejor = ''
                    this.peor = ''
                    this.equipo = ''
                    this.recordar = '',

                    this.dialog = false
            }

        }, 

        //Función que permite visualizar en el dialogo de edicion la evaluacion seleccionada
        preEdit(id){
            this.items.forEach(element => {

                if(element.id == id){

                    this.nombre = element.nombre
                    this.fecha = element.fecha
                    this.desc = element.desc
                    this.mejor = element.mejor
                    this.peor = element.peor
                    this.equipo = element.equipo
                    this.recordar = element.recordar
                    this.id = element.id
                }
            });

            this.dialog2=true
        },

        //Función que permite la edicion de una evaluacion
        editar(id) {
            this.fecha = this.crearFecha()

            var datos = {
                nombre:this.nombre,
                fecha:this.fecha,
                desc:this.desc,
                mejor:this.mejor,
                peor:this.peor,
                equipo:this.equipo,
                recordar:this.recordar,
            }

            this.$store.dispatch('updateEvaluaciones', {id:id, datos:datos})

            if((datos.nombre != " " && datos.desc != " " && datos.fecha != " "  && datos.mejor != " " && datos.peor != " "  && datos.equipo != " ") && 
                (datos.nombre != '' && datos.desc != '' && datos.fecha != ''  && datos.mejor != "" && datos.peor != ""  && datos.equipo != "")){


                    this.nombre = ''
                    this.fecha = ''
                    this.desc = ''
                    this.mejor = ''
                    this.peor = ''
                    this.equipo = ''
                    this.recordar = '',

                    this.dialog2 = false
                    this.editDate = false
            }

        },

        cancelar(){
            this.dialog2 = false

            this.editDate = false

            this.dialog = false

            this.nombre = ''
            this.fecha = ''
            this.desc = ''
            this.mejor = ''
            this.peor=''
            this.equipo = ''
            this.recordar = ''

            this.$store.commit('setErrors', '')
        },

        //Función que permite eliminar una evaluacion
        eliminar(id){
            
            this.dialog3 = true
            this.id = id

        },
        confirmar(){
            this.$store.dispatch('deleteEvaluacion' ,this.id)
            this.dialog3 = false
        },

        //Función que generará una fecha en el formato dd/mm/aaaa
        crearFecha(){
            this.fecha = this.fecha.split('/')
            if(this.fecha.length>1){
                var f = new Date(this.fecha[2], this.fecha[1]-1,this.fecha[0])
            }else{
                var f = this.fecha.toString()
                f = new Date(f)
            }
            
            return f.toLocaleDateString()
        },

    }
}
</script>
