

  <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyByIXeeSklnBjggAdqHXZZuyTYR8HbqVG8&callback=initMap"
  type="text/javascript"></script>
<template>
<!--Vista de inicio con información de la próxima actividad-->

    <v-container>
        <h1>Próxima actividad</h1>

      <v-content>
      <!--Cards Información próxima actividad
      Se genera un for para recorrer el objeto que contiene los datos de la actividad y así poder mostrarlos -->
        <v-layout v-for="(item,index) in items " :key="index" wrap>

          <!--Tarjeta con información del comienzo de la actividad
          Contiene la condición ed, de tal manera que si se presiona el botón editar, los campos serán inputs-->
          <v-flex xs12>
              <v-card dark height="90%" class="jumbotron">
                  <v-btn @click="ed=true"  v-if="!ed && login" class="info float-right mt-4 mr-8">Editar</v-btn>
                  <v-btn  class="info float-right mt-4 mr-4" v-if="ed" @click="edit(item.id);editDate=false">Aceptar</v-btn>
                  <v-card-title>
                    <h1 v-if="!ed">{{item.dia}}</h1>  
                  </v-card-title>
                  <v-card-subtitle>
                    <h3 v-if="!ed">{{item.fecha}} a las  {{item.hora}} en {{item.lugar}}</h3>  
                    <h3 v-if="ed"><v-text-field label="Fecha" v-model="item.fecha" requiered :rules="requiredRules" 
                    :type="editDate ? 'date' : 'text'" @focus="editDate=true"></v-text-field> 
                    <v-text-field   label="a las (hora)->Formato: 23:59" v-model="item.hora" requiered :rules="requiredRules">
                    </v-text-field><v-text-field label="en (lugar)" v-model="item.lugar" requiered :rules="requiredRules"> </v-text-field></h3>
                  </v-card-subtitle>
                  <v-card-text>
                    <h4 v-if="!ed">{{item.desc}}</h4>
                    <h4 v-if="ed"><v-text-field  label="Descripción" v-model="item.desc" requiered :rules="requiredRules"></v-text-field></h4>
                    <h4 v-if="!ed">La actividad tendrá un coste de {{item.precio}}€</h4>
                    <h4 v-if="ed"><v-text-field label="La actividad tendrá un coste de (X)" v-model="item.precio" requiered :rules="requiredRules">€</v-text-field> </h4>
                  </v-card-text>
                  <v-card-actions>
                      <iframe class="d-block w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.1354486690466!2d-3.6343836846003565!3d40.53859657935119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422cf780c46225%3A0xc4af6e1770c0aefe!2sCasa%20de%20las%20Asociaciones!5e0!3m2!1ses!2ses!4v1586739419365!5m2!1ses!2ses"
                      width="mr-auto" height="350" frameborder="0" style="border:3;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                  </v-card-actions>
              </v-card>
          </v-flex>

          <!--Tarjeta con información del final de la actividad-->
            <v-flex xs12>
                <v-card dark height="90%" class="jumbotron">
                    <v-card-title>
                      <h1>Recogida</h1>
                    </v-card-title>
                    <v-card-subtitle>
                      <h3 v-if="!ed">{{item.fecha}} a las  {{item.horaF}} en {{item.lugarF}}</h3>  
                      <h3 v-if="ed"><v-text-field label="a las (hora recogida)->Formato: 23:59" v-model="item.horaF" requiered :rules="requiredRules"></v-text-field> 
                      <v-text-field label="en (lugar de recogida)" v-model="item.lugarF" requiered :rules="requiredRules"></v-text-field></h3>
                    </v-card-subtitle>
                    <v-card-actions>
                        <iframe class="d-block w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.1354486690466!2d-3.6343836846003565!3d40.53859657935119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422cf780c46225%3A0xc4af6e1770c0aefe!2sCasa%20de%20las%20Asociaciones!5e0!3m2!1ses!2ses!4v1586739419365!5m2!1ses!2ses"
                        width="mr-auto" height="350" frameborder="0" style="border:3;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </v-card-actions>
                </v-card>
              <v-btn absolute dark mr-0 mt-0 fab bottom right color="blue" href="#"><v-icon color="white">mdi-arrow-up</v-icon></v-btn>
            </v-flex>
        </v-layout>
        <!--Fin Card informacion-->

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
    }
  },
  data() {
    return {
      ed: false, //v-if --> method edit
      item:[],
      editDate:false,
      id:1,
      requiredRules:[
        v => !!v || ' Campo obligatorio',
      ]
    };
  },
  mounted() {
    this.$store.dispatch('loadInicio')
  },
  methods: {
    //Recogida de los datos de la actividad a editar  para poder mostrarlos en el formulario de edicion
    edit(index) {
      var datos={}
      var meses=["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto","septiembre", "octubre", 
                  "noviembre","diciembre"]
      var dias =["Lunes","Martes","Miércoles", "Jueves","Viernes","Sábado", "Domingo"]
      this.items.forEach(element => {
        if (element.id==index){
          if(element.fecha.type=="Date"){
            var fecha=new Date(element.fecha)
            element.fecha=fecha.getDate()+" de "+ meses[fecha.getMonth()]
            element.dia=dias[fecha.getDay()-1]

          }
          this.$store.dispatch('updateInicio', {datos:element, id:element.id });
        }
      });
      
      this.ed=false
    },

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
