<template>
    <v-content>
      <!--Cards Información próxima actividad
      Se genera un for para recorrer el objeto que contiene los datos de la actividad y así poder mostrarlos -->
        <v-layout v-for="(item,index) in items " :key="index" wrap v-if="valid">

            <!--Tarjeta con información del comienzo de la actividad-->
            <v-flex xs12>
                <v-card dark height="100%" class="jumbotron">
                   <v-btn @click="edit(index)" class="info float-right mt-4 mr-4">Editar</v-btn>
                    <v-card-title>
                      <h1>{{item.dia}}</h1>  
                      </v-card-title>
                    <v-card-subtitle>
                      <h4>{{item.fecha}} a las  {{item.hora}} en {{item.lugar}}</h4>  
                    </v-card-subtitle>
                    <v-card-text>
                      <p>{{item.descripcion}}</p>
                      <p>La actividad tendrá un coste de {{item.precio}}€</p>
                    </v-card-text>
                    <v-card-actions>
                        <iframe class="d-block w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.1354486690466!2d-3.6343836846003565!3d40.53859657935119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422cf780c46225%3A0xc4af6e1770c0aefe!2sCasa%20de%20las%20Asociaciones!5e0!3m2!1ses!2ses!4v1586739419365!5m2!1ses!2ses"
                        width="mr-auto" height="350" frameborder="0" style="border:3;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </v-card-actions>
                </v-card>

            <!--Tarjeta con información del final de la actividad-->
            </v-flex>
            <v-flex xs12>
                <v-card dark height="100%" class="jumbotron">
                    <v-card-title>
                      <h1>Recogida</h1>
                    </v-card-title>
                    <v-card-subtitle>
                      <h4>{{item.fecha}} a las  {{item.horaFin}} en {{item.lugarFin}}</h4>  
                    </v-card-subtitle>
                    <v-card-actions>
                        <iframe class="d-block w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.1354486690466!2d-3.6343836846003565!3d40.53859657935119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422cf780c46225%3A0xc4af6e1770c0aefe!2sCasa%20de%20las%20Asociaciones!5e0!3m2!1ses!2ses!4v1586739419365!5m2!1ses!2ses"
                        width="mr-auto" height="350" frameborder="0" style="border:3;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
        <!--Fin Card informacion-->

        <!--Formulario para poder editar Card de informacion, mostrará cuando la variable valid sea false, al contrario que la 
        tarjeta de informacion
        El formulario tiene la misma estructura que la tarjeta de info-->
        <v-layout v-if="!valid">
          <v-flex>
            <v-form @submit.prevent="validar">
              <v-card dark height="100%">
                <v-card-title>
                  <h2>
                    <v-text-field v-model="newDia" label=" Introduce el día"></v-text-field>
                  </h2>
                </v-card-title>
                <v-card-subtitle>                
                  <h4>
                    <v-text-field v-model="newFecha" label="Introduce la fecha: dd/mm/aaaa"></v-text-field>
                    <v-text-field v-model="newHora" label="Introduce la hora de comienzo: 00:00 "></v-text-field>
                    <v-text-field v-model="newLugar" label="Introduce el lugar de comienzo"></v-text-field>
                  </h4>
                </v-card-subtitle>
                <v-card-text>
                <p>
                  <v-text-field v-model="newDescripcion" label="Introduce una descripción de la actividad"></v-text-field>
                </p>
                <p>
                  <v-text-field v-model="newPrecio" label="Introduce el precio: X"></v-text-field>
                </p>
                </v-card-text>
            </v-card>
            <v-card dark height="100%">
              <v-card-title>
                <h2>
                  Recogida
                </h2>
              </v-card-title>
              <v-card-subtitle>                
                <h4>
                  <v-text-field v-model="newHoraFin" label="Introduce la hora de comienzo: 00:00 "></v-text-field>
                  <v-text-field v-model="newLugarFin" label="Introduce el lugar de comienzo"></v-text-field>
                </h4>
              </v-card-subtitle>
              <v-card-actions>              
                <v-btn type="submit" class="info float-right mt-4 mr-4">Editar</v-btn>
              </v-card-actions>
            </v-card>
            </v-form>
          </v-flex>
        </v-layout>
        <!--Fin del formulario-->
    </v-content>
</template>
<script>
export default {
  name: "ProximaActividad",
  computed:{
    items() {
      return this.$store.getters.proximaActividad
    }
  },
  data() {
    return {

      valid: true, //v-if --> method edit

      //Variables recogidas en v-model del formulario
      newDia: "",
      newFecha: "",
      newHora: "",
      newLugar: "",
      newDescripcion: "",
      newPrecio: "",
      newHoraFin: "",
      newLugarFin: "",

      indexActi: "" //--> method edit
    };
  },
  methods: {
    //Recogida de los datos de la actividad a editar  para poder mostrarlos en el formulario de edicion
    edit(index) {
      this.valid = false;

      this.$store.proximaActividad({data:[this.newDia,this.newFecha,this.newHora,this.newLugar,this.newDescripcion,this.newPrecio,this.newHoraFin,this.newLugarFin]})


      this.indexActi = index;
    },
    validar() {
      //validamos

      //Actualización de los datos editados en el formulario
      this.items[this.indexActi].dia = this.newDia;
      this.items[this.indexActi].fecha = this.newFecha;
      this.items[this.indexActi].hora = this.newHora;
      this.items[this.indexActi].lugar = this.newLugar;
      this.items[this.indexActi].descripcion = this.newDescripcion;
      this.items[this.indexActi].precio = this.newPrecio;
      this.items[this.indexActi].horaFin = this.newHoraFin;
      this.items[this.indexActi].lugarFin = this.lugarFin;

      this.valid = true;
    }
  }
};
</script>
