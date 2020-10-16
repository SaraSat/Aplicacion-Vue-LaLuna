

  <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAHxWqUJC1KmBMYiUU-zf-0OE05m_6yz64&callback=initMap"
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
                        <v-select :items="nombres" label="Selecciona una dirección" v-model="selected"></v-select>
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

                        <iframe :src="sitioInicio" 
                        width="800" height="480" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> 

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

                      <v-col cols="12" sm="6" md="3">
                        <v-select :items="nombres" label="Selecciona una dirección" v-model="selectedF"></v-select>
                      </v-col>

                      </v-row>
                    </v-card-subtitle>

                    <v-card-actions>

                        <v-row wrap>  
                          <v-col xs="12" sm="12" md="12">                          
                          </v-col>

                            <iframe :src="sitioFinal" 
                            width="800" height="480" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> 

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




export default {
  name: "Home",

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

      selected: [],
      selectedF:[],
      sitioInicio: '',
      sitioFinal: '',

      nombres:[
        "Casa de las asociaciones",
        "Renfe Alcobendas",
        "Renfe ValdelasFuentes",
        "Plaza Ayuntamiento Viejo Alcobendas",
        "Ayuntamiento Alcobendas, Gran Manzana",
        "Ayuntamiento San Sebastián de los Reyes",
        "Plaza Norte",
        "Diversia",
      ],

      direcciones:[
        {
          name: "Casa de las asociaciones",
          direccion: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.135448669044!2d-3.6343836845510444!3d40.53859657935126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422cf780c46225%3A0xc4af6e1770c0aefe!2sCasa%20de%20las%20Asociaciones!5e0!3m2!1ses!2ses!4v1602835830467!5m2!1ses!2ses"
        },

        {
          name: "Renfe Alcobendas",
          direccion: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.7921627029323!2d-3.6359359629524555!3d40.546180700000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422cf03430383d%3A0x594e947ebe8a3b68!2sAv.espa%C3%B1a-est.alcobendas%20S.seb.reyes!5e0!3m2!1ses!2ses!4v1602836560592!5m2!1ses!2ses"
        }, 

        {
          name: "Renfe ValdelasFuentes",
          direccion: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.7370047690993!2d-3.6563539845508113!3d40.54739917935012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422c9adbc657d7%3A0xbfe540430f7c5886!2sValdelasfuentes!5e0!3m2!1ses!2ses!4v1602836805759!5m2!1ses!2ses" 
        }, 

        {
          name: "Plaza Ayuntamiento Viejo Alcobendas",
          direccion: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.0288626810066!2d-3.6362762845509633!3d40.54095147935086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422cf72216e4b1%3A0x54151ec0d6c37881!2sPlaza%20del%20Pueblo%2C%201%2C%2028100%20Alcobendas%2C%20Madrid!5e0!3m2!1ses!2ses!4v1602836996353!5m2!1ses!2ses"
        }, 

        {
          name: "Ayuntamiento Alcobendas, Gran Manzana",
          direccion:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.7331252632057!2d-3.643750384550812!3d40.547484879350186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422ced44d3a3d3%3A0x63e18ae87ce69cef!2sPlaza%20Mayor%2C%2028100%20Alcobendas%2C%20Madrid!5e0!3m2!1ses!2ses!4v1602837089913!5m2!1ses!2ses" 
        }, 

        {
          name: "Ayuntamiento San Sebastián de los Reyes",
          direccion: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.7328264911766!2d-3.6284593845507565!3d40.54749147935017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422cfcad57c565%3A0x32c16a53b4cfeba5!2sAyuntamiento%20de%20San%20Sebasti%C3%A1n%20de%20los%20Reyes!5e0!3m2!1ses!2ses!4v1602837149407!5m2!1ses!2ses"
        },

        {
          name: "Plaza Norte",
          direccion: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.033474920104!2d-3.615701684550965!3d40.540849579350905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422cde0b7c5567%3A0xabbb242cbe4258e0!2sPlaza%20Norte%202!5e0!3m2!1ses!2ses!4v1602837251226!5m2!1ses!2ses"
          
        },

        {
          name: "Diversia",
          direccion: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.506284897882!2d-3.640704984551297!3d40.530402479352205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422c5c0bed47b1%3A0x9057902a35705a45!2sHeron%20Diversia!5e0!3m2!1ses!2ses!4v1602837305097!5m2!1ses!2ses"
        }
      ],

    };
  },
  mounted() {
    this.$store.dispatch('loadInicio')
   
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

      this.selectDireccion()

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
    }, 

    selectDireccion(){
      
      var dir 
      var dirF

      console.log(this.selected)

      this.direcciones.forEach(element => {
        if(element.name == this.selected){
          dir = element.direccion
        }
        if(element.name == this.selectedF){
          dirF = element.direccion
        }
      })

      this.sitioInicio = dir
      this.sitioFinal = dirF

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

.mapa {
    height: 425px;
  }


</style>
