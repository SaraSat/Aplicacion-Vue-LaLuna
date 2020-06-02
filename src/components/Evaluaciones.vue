<template>
    <v-content>
        <h3>Evaluaciones</h3>
        <v-btn class="d-flex flex-column ml-12" @click="dialog=true">
        <v-icon color ="green darken-2" x-large >mdi-pencil</v-icon>
        <span>Insertar</span>
        </v-btn>
        <!--Tarjeta de evaluacion-->
        <v-row>
            <v-col  v-for="item in items" :key="item.id">
                <v-card dark max-width="600px">
                    <v-card-title><h3>Evaluacion</h3></v-card-title>
                    <v-card-subtitle><h3>{{item.nombre}} {{item.fecha}}</h3> </v-card-subtitle>
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

            </v-col>
        </v-row>
        <!--Tarjeta para insertar nueva evaluacion-->
        <v-dialog v-model="dialog" persistent max-width="600px">
            <v-card dark>
                <v-card-title>Nueva Evaluación</v-card-title>
                <v-card-subtitle>
                    <v-text-field v-model="nombre" label="Nombre Actividad"  requiered :rules="requiredRules"></v-text-field>
                    <v-text-field v-model="fecha" label="Fecha Actividad" type="date" requiered :rules="requiredRules"></v-text-field>
                </v-card-subtitle>
                <v-card-text>
                    <v-text-field v-model="desc" label="Qué hemos hecho" requiered :rules="requiredRules" ></v-text-field>
                </v-card-text>
                <v-card-text>
                    <v-text-field v-model="mejor" label="Lo mejor" requiered :rules="requiredRules"></v-text-field>
                </v-card-text>
                <v-card-text>
                    <v-text-field v-model="peor" label="Lo peor" requiered :rules="requiredRules"></v-text-field>
                </v-card-text>
                <v-card-text>
                    <v-text-field v-model="equipo" label="Equipo" requiered :rules="requiredRules"></v-text-field>
                </v-card-text>
                <v-card-text>
                    <v-text-field v-model="recordar" label="A recordar" requiered :rules="requiredRules"></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-btn class="success" @click="insertar">Aceptar</v-btn>
                    <v-btn class="success" @click="dialog=false">Cancelar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <!--Tarjeta para editar una evaluacion evaluacion-->
        
                <v-dialog v-model="dialog2" persistent max-width="600px">
                <v-card dark>
                <v-card-title>Nueva Evaluación</v-card-title>
                <v-card-subtitle>
                    <v-text-field v-model="nombre" label="Nombre Actividad" requiered :rules="requiredRules"></v-text-field>
                    <v-text-field v-model="fecha" label="Fecha Actividad" requiered :rules="requiredRules" type="date"></v-text-field>
                </v-card-subtitle>
                <v-card-text>
                    <v-text-field v-model="desc" label="Qué hemos hecho" requiered :rules="requiredRules"></v-text-field>
                </v-card-text>
                <v-card-text>
                    <v-text-field v-model="mejor" label="Lo mejor" requiered :rules="requiredRules"></v-text-field>
                </v-card-text>
                <v-card-text>
                    <v-text-field v-model="peor" label="Lo peor" requiered :rules="requiredRules"></v-text-field>
                </v-card-text>
                <v-card-text>
                    <v-text-field v-model="equipo" label="Equipo" requiered :rules="requiredRules"></v-text-field>
                </v-card-text>
                <v-card-text>
                    <v-text-field v-model="recordar" label="A recordar" requiered :rules="requiredRules"></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-btn class="success" @click="editar(id)">Aceptar</v-btn>
                    <v-btn class="success" @click="dialog2=false">Cancelar</v-btn>
                </v-card-actions>
        </v-card>
        </v-dialog>


    </v-content>
</template>

<script>
export default {
    name:'Evaluaciones',
    computed:{
        items() {
            return this.$store.getters.evaluaciones
        }
    },
    mounted() {
         this.$store.dispatch('loadEvaluaciones')
    },
    data() {
        return {
            dialog:false,
            dialog2:false,
            nombre:'',
            fecha:'',
            desc:'',
            mejor:'',
            peor:'',
            equipo:'',
            recordar:'',
            id:'',
            requiredRules:[
            v => !!v || ' Campo obligatorio',
            ],


        }
    },
    methods: {
        insertar() {
            var datos={
                nombre:this.nombre,
                fecha:this.fecha,
                desc:this.desc,
                mejor:this.mejor,
                peor:this.peor,
                equipo:this.equipo,
                recordar:this.recordar,

            }
            this.$store.dispatch('insertEvaluacion', {datos:datos})
            
            this.nombre=''
            this.fecha=''
            this.desc=''
            this.mejor=''
            this.peor=''
            this.equipo=''
            this.recordar='',

            this.dialog=false

        }, 
        preEdit(id){
            this.items.forEach(element => {
                if(element.id==id){
                    this.nombre=element.nombre
                    this.fecha=element.fecha
                    this.desc=element.desc
                    this.mejor=element.mejor
                    this.peor=element.peor
                    this.equipo=element.equipo
                    this.recordar=element.recordar
                    this.id=element.id
                }
            });
            this.dialog2=true
        },
        editar(id) {
            var datos={
                nombre:this.nombre,
                fecha:this.fecha,
                desc:this.desc,
                mejor:this.mejor,
                peor:this.peor,
                equipo:this.equipo,
                recordar:this.recordar,
            }
            this.$store.dispatch('updateEvaluaciones', {id:id, datos:datos})

            this.nombre=''
            this.fecha=''
            this.desc=''
            this.mejor=''
            this.peor=''
            this.equipo=''
            this.recordar='',

            this.dialog2=false

        },
        eliminar(id){
            this.$store.dispatch('deleteEvaluacion' ,id)
        }
    }
}
</script>
