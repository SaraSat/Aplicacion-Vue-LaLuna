<template>

  <!--Vista de las actividades programadas-->
  <v-container>
    <h1>Actividades previstas</h1>

      <!--Tarjeta de actividad, se genera un for para recorrer el objeto que contenga las diferentes actividades programadas
      y asi mostrar los datos de cada una con la misma estructura-->
    <v-content> 

      <!--Botón Intesertar que abre el diálogo con el formulario--> 
      <v-btn class="d-flex flex-column ml-12 mb-5" @click="dialog=true"  v-if="login">
        <v-icon color ="green darken-2" x-large >mdi-pencil</v-icon>
        <span>Insertar</span>
      </v-btn>

      <!--Botón up, visible para pantallas pequeñas-->
      <v-btn  v-if="min" absolute dark mr-0 mt-0 fab bottom right color="blue" href="#"><v-icon color="white">mdi-arrow-up</v-icon></v-btn>  
          
      <!--Dialog para poder insertar una nueva tarjeta actividad -->
      <v-dialog v-model="dialog"  persistent max-width="600px">
        <v-card dark>
          <v-card-title>
              <v-text-field label="Introduce el nombre de la actividad" v-model="nombre" requiered :rules="requiredRules"></v-text-field>
          </v-card-title>
          <v-card-subtitle>
              Fin de Semana previsto:
              <v-text-field label="introduce el dia" v-model="fecha" requiered :rules="requiredRules" type="date"></v-text-field>
          </v-card-subtitle>
          <v-card-text>
              <v-text-field label="introduce una breve descripción" v-model="desc" requiered :rules="requiredRules"></v-text-field>
          </v-card-text>
          <v-card-actions>
              <v-btn class="success" @click="insertar" >Aceptar</v-btn>
              <v-btn class="error" @click="dialog=false" >Cancelar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!--Tarjetas de actividad-->
      <v-container fluid align-center justify-center="">
        <v-row wrap>
          <v-col v-for="(item,index) in items" :key="index" mb-1>
              <v-card dark min-width="350" height="250">
                <v-card-title><h3 >{{item.nombre}}</h3>
                </v-card-title>
                <v-card-subtitle><h5 >Fin de semana previsto: {{item.fecha}}</h5>
                </v-card-subtitle>
                <v-card-text ><h6>{{item.desc}}</h6></v-card-text>
                <v-card-actions>
                  <v-btn class="success" @click="preEdit(item.id)" v-if="login">Editar</v-btn><!--Abre el diálogo de edición 
                                                                                  con los datos rellenos de la actividad pulsada-->
                  <v-btn class="error" @click="eliminar(item.id)" v-if="login" >Eliminar</v-btn>
                </v-card-actions>
              </v-card>

            <!-- Dialog3: Dialogo para confirmar eliminación-->
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
      </v-container>
          

        <!--Dialog2: Dialog para poder editar cada tarjeta por separado-->
            <v-dialog v-model="dialog2" persistent max-width="600px">
              <v-card dark xs12>
                <v-card-title>
                <h4><v-text-field v-model="nombre" requiered :rules="requiredRules"></v-text-field></h4>
                </v-card-title>
                <v-card-subtitle>
                <h6><v-text-field label="Fin de semana previsto: " v-model="fecha" requiered :rules="requiredRules"  
                  :type="editDate ? 'date' : 'text'" @focus="editDate=true"></v-text-field></h6>
                </v-card-subtitle>
                <v-card-text><v-text-field v-model="desc" requiered :rules="requiredRules"></v-text-field></v-card-text>
                <v-card-actions>
                    <v-btn class="success" @click="edit(id)"  >Editar</v-btn>
                    <v-btn class="error" @click="cancelarEdicion()" >Cancelar</v-btn>
                </v-card-actions>
          </v-card>
          </v-dialog>
      </v-content>
  </v-container>
</template>

<script>
export default {
  name: "Actividades",
  components: {
  },
  computed:{
    items() {
      return this.$store.getters.actividades //carga de actividades -->mounted()
    },
    login() {
      return this.$store.getters.login //Si el monitor se ha logado se mostrarán los botones de edición, inserción y eliminación
    }
  },

  mounted() {
    this.$store.dispatch('loadActividades')
  },

  beforeUpdate(){
      this.btnMin() //Carga btn up para pantallas pequeñas
  },

  data() {
    return {
      dialog:false, //-->method insertar
      dialog2: false, //-->method editar
      dialog3:false, //-->method eliminar

      editDate:false,

      nombre:' ',
      fecha:' ',
      desc:' ',
      id:' ',

      requiredRules:[
        v => !!v || ' Campo obligatorio',
      ],

      min:false //-->method btnMin para mostrar el botón up
    };
  },

  methods: {

    //Función que muestra el diálogo de edición con los datos de la actividad pulsada
    preEdit(id) {

      this.items.forEach(element => {

        if(element.id == id){

          this.nombre = element.nombre
          this.fecha = element.fecha,
          this.desc = element.desc
          this.id = element.id
        }
      });

      this.dialog2 = true

    },

    //Función que permite la edición de la actividad pulsada
    edit(id){

      var datos = {}
      this.fecha = this.crearFecha()

      this.items.forEach(element => {
      
        if(element.id == id){
          datos = {
            nombre:this.nombre,
            fecha:this.fecha,
            desc:this.desc
          }
        }
      });

      this.$store.dispatch('updateActividades', {id:id, datos:datos})

      this.dialog2 = false
      this.editDate = false

      this.nombre = '',
      this.fecha = '',
      this.desc = '',
      this.id = ''
    },

    cancelarEdicion(){
      this.dialog2 = false

      this.editDate = false

      this.nombre = '',
      this.fecha = '',
      this.desc = '',
      this.id = ''
    },

    //Eliminación de la actividad pulsada
    eliminar(id) {
      this.id = id
      this.dialog3 = true
    },

    confirmar(){
      this.$store.dispatch('deleteActividad', this.id) 
      this.dialog3 = false
    },

    //Función para insertar una nueva actividad
    insertar() {
      this.fecha = this.crearFecha()

      var datos = {
        nombre:this.nombre,
        fecha:this.fecha,
        desc:this.desc
      }
      this.$store.dispatch('insertActividad', {datos:datos})
      this.dialog = false

    }, 

    //Función que permite mostrar o no el botón up, en función del tamaño de la pantalla
    btnMin(){
      if(window.innerWidth<808){
        this.min=true
      }else{
        this.min=false
      }
    },

    //Función que generará una fecha en el formato dd/mm/aaaa
    crearFecha(){
      this.fecha=this.fecha.split('/')
      if(this.fecha.length>1){
        var f=new Date(this.fecha[2], this.fecha[1]-1,this.fecha[0])
      }else{
        var f =this.fecha.toString()
        f=new Date(f)
      }

      return f.toLocaleDateString()
    }
  }

};
</script>

<style>
  h1 {
    color: azure;
  }
</style>

