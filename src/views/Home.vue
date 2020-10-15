

  <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyByIXeeSklnBjggAdqHXZZuyTYR8HbqVG8&callback=initMap"
  type="text/javascript"></script>

  <template>
<!--Vista de inicio con información de la próxima actividad-->
    
    <v-container>
      <v-content>

      <!--Cards Información próxima actividad
      Se genera un for para recorrer el objeto que contiene los datos de la actividad y así poder mostrarlos -->

        <v-layout wrap  v-for="(item,index) in items " :key="index" >
          <v-content v-if="item.aviso == 0">
          <h1>Próxima actividad</h1>

          <!--Tarjeta con información del comienzo de la actividad
          Contiene la condición ed, de tal manera que si se presiona el botón editar, los campos serán inputs-->
          <v-flex xs12 >                
            <v-row xs="6" sm="3">
              <v-col><v-btn @click="ed=true"  v-if="!ed && login" class="info">Editar</v-btn></v-col>
              <v-col><v-btn class="error" v-if="!ed &&login" @click="crearAviso()">Crear Aviso</v-btn></v-col>
            </v-row>


              <v-card dark height="90%" class="jumbotron">

                <v-card-title>
                  <v-content v-if="errors" >
                    <div v-for="(v, k) in errors" :key="k">
                        <p v-for="error in v" :key="error" class="text-sm error">{{ error }}</p>
                    </div>
                  </v-content>
                </v-card-title>
                                  
                <v-btn  class="info float-right mt-4 mr-4" v-if="ed" @click="edit(item.id);editDate=false">Aceptar</v-btn>

                  <v-card-title>
                    <h1 v-if="!ed">{{item.dia}}</h1>  
                  </v-card-title>

                  <v-card-subtitle>
                    <h3 v-if="!ed">{{item.fecha}} a las  {{item.hora}} en {{item.lugar}}</h3>  

                    <v-row v-if="ed" wrap>
                      <v-col cols="12" sm="6" md="3">
                        <v-text-field label="Fecha" v-model="item.fecha" requiered :rules="requiredRules" 
                          :type="editDate ? 'date' : 'text'" @focus="editDate=true"></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="6" md="3">                      
                        <v-text-field   label="a las (hora)->Formato: 23:59" v-model="item.hora" requiered :rules="requiredRules"></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="6" md="3">                      
                        <v-text-field label="en (lugar)" v-model="item.lugar" requiered :rules="requiredRules"></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="6" md="3">
                        <v-text-field label="La actividad tendrá un coste de (X)" v-model="item.precio" requiered :rules="requiredRules">€</v-text-field>
                      </v-col>
                    </v-row>
                  </v-card-subtitle>

                  <v-card-text>
                    <h4 v-if="!ed">{{item.desc}}</h4>
                    <v-row v-if="ed">
                      <v-textarea  label="Descripción" v-model="item.desc" requiered :rules="requiredRules" outlined>
                      </v-textarea>
                    </v-row>

                    <h4 v-if="!ed">La actividad tendrá un coste de {{item.precio}}€</h4>
                  </v-card-text>

                  <v-card-actions>
                    <v-row>
                      <v-col xs="12" sm="12" md="12">
                        <vistaMapa></vistaMapa>                           
                      </v-col>
                    </v-row>
                  </v-card-actions>
              </v-card>
          </v-flex>

          <!--Tarjeta con información del final de la actividad-->
            <v-flex xs12>
                <v-card dark height="90%" class="jumbotron">
                    <v-card-title>
                      <h1>Recogida:</h1>
                    </v-card-title>

                    <v-card-subtitle>
                      <h3 v-if="!ed">{{item.fecha}} a las  {{item.horaF}} en {{item.lugarF}}</h3>

                      <v-row v-if="ed">
                        <v-col cols="12" sm="6" md="3">                        
                          <v-text-field label="a las (hora recogida)->Formato: 23:59" v-model="item.horaF" requiered :rules="requiredRules"></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="3">
                          <v-text-field label="en (lugar de recogida)" v-model="item.lugarF" requiered :rules="requiredRules"></v-text-field>
                        </v-col>
                      </v-row>
                    </v-card-subtitle>

                    <v-card-actions>

                        <v-row wrap>  
                          <v-col xs="12" sm="12" md="12">                          
                          </v-col>
                            <vistaMapa></vistaMapa>
                          <v-col xs="12" sm="12" md="12" v-if="ed">                          
                            <v-btn  class="info float-right mt-4 mr-4" v-if="ed" @click="edit(item.id);editDate=false">Aceptar</v-btn>
                          </v-col>
                        </v-row>
                        
                    </v-card-actions>
                </v-card>

              <v-btn absolute dark mr-0 mt-0 fab bottom right color="blue" href="#"><v-icon color="white">mdi-arrow-up</v-icon></v-btn>
            </v-flex>
          </v-content>
            <!--Fin Card informacion-->

            <!--Tarjeta de aviso en caso de cancelación de actividad-->
            <v-content  v-if="item.aviso == 1" >
              <v-card v-if="avisoCreado" dark="">
                <v-card-title><h1>Aviso importante!</h1></v-card-title>
                <v-card-text >{{item.motivo}}</v-card-text>
                <v-card-actions>
                  <v-btn class="error" v-if="login" @click="editarAviso()">Editar Aviso</v-btn>
                  <v-btn class="info" v-if="login" @click="cancelarAviso()">Volver a Crear Actividad</v-btn>
                </v-card-actions>
              </v-card>
              <v-card v-if="!avisoCreado" dark>
                <v-card-text>
                  <v-textarea v-model="item.motivo" label="Expliación del aviso"></v-textarea>
                  <v-btn @click="crearAviso()" class="info">Aceptar</v-btn>
                </v-card-text>
              </v-card>
            </v-content>
        </v-layout>
    </v-content>
    </v-container>
</template>

<script>

import vistaMapa from '../components/vistaMapa.vue'

export default {
  name: "Home",

  components:{
    vistaMapa
  },

  computed: {
    items() {
      return this.$store.getters.proximaActividad;
    },

    //Variable que cuando el login es correcto permite mostrar el botón de editar
    login() {
      return this.$store.getters.login
    },

    snackbar(){
        return this.$store.getters.snackbar //true para mostrar snackbar de error en el registro
    },
    errorAdmin() {
        return this.$store.getters.errorAdmin // true si la constraseña de admin se ha introducido erroneamente
    },

    aviso() {
      return this.$store.getters.aviso
    },

    avisoCreado(){
      return this.$store.getters.avisoCreado
    },

    errors() {
      return this.$store.getters.errors
    },

  },

  data() {
    return {

      ed: false, //v-if --> method edit
      item:[],
      editDate:false,
      id:1,

      passAdmin:'',
      admin:false,

      requiredRules:[
        v => !!v || ' Campo obligatorio',
      ],

      passwordRules:[
        v => !!v || 'La constraseña es obligatoria',
        v => (v && v.length >= 8) || 'La contraseña debe tener al menos 8 caracteres'
      ],

    };
  },
  mounted() {
    this.$store.dispatch('loadInicio')
    this.items.forEach(e=> console.log(e.aviso))
  },

  methods: {

    //Recogida de los datos de la actividad a editar  para poder mostrarlos en el formulario de edicion
    edit(index) {

      var datos = {}

      var meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto","septiembre", "octubre", 
                  "noviembre","diciembre"]

      var dias = ["Lunes","Martes","Miércoles", "Jueves","Viernes","Sábado", "Domingo"]

      this.items.forEach(element => {

        var fecha = element.fecha.split('-')

        if(fecha.length == 3){

          fecha=new Date(element.fecha)

        }else{

          fecha = element.fecha.split(' ')

          var mes = fecha[2]
          
          mes = meses.indexOf(mes)
            
          fecha = new Date('2020',mes, fecha[0])
        }
                
        element.fecha = fecha.getDate() + " de " + meses[fecha.getMonth()]
        element.dia = dias[fecha.getDay()-1]

        element.aviso = false

        datos = element

      });

      this.$store.dispatch('updateInicio', {datos:datos, id:datos.id });

      if((datos.lugar != " " && datos.desc != " " && datos.fecha != " " && datos.hora != " " && datos.lugarF != " " && 
          datos.horaF != " " && datos.precio != " ") && 
          (datos.lugar != "" && datos.desc != "" && datos.fecha != "" && datos.hora != "" && datos.lugarF != "" && 
          datos.horaF != "" && datos.precio != "") && typeof(datos.precio) != 'string' )
          {
      
            this.ed = false
          }
    },

    crearAviso() {

      var datos = {}

      this.items.forEach(element => {
        element.aviso = true
        this.$store.dispatch('updateInicio', {datos:element, id:element.id });
      })

      this.$store.commit('setAvisoCreado', true)
    },

    cancelarAviso() {
      
      this.items.forEach(element=> {
        
        element.aviso = false 

        this.$store.dispatch('updateInicio', {datos:element, id:element.id });
        
      })
      
    },

    editarAviso() {
      this.$store.commit('setAvisoCreado', false)
    }




  }
};
</script>
<style>
h1,
h2,
h3,
h4 {
  color: azure;
}
</style>
