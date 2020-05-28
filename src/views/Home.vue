<template>
<!--Vista de inicio con información de la próxima actividad, importa el componente ProximaActividad -->

    <v-container>
        <h1>Próxima actividad</h1>

      <v-content>
      <!--Cards Información próxima actividad
      Se genera un for para recorrer el objeto que contiene los datos de la actividad y así poder mostrarlos -->
        <v-layout v-for="(item,index) in items " :key="index" wrap v-if="valid">

            <!--Tarjeta con información del comienzo de la actividad-->
            <v-flex xs12>
                <v-card dark height="100%" class="jumbotron">
                   <v-btn @click="valid=false" class="info float-right mt-4 mr-4">Editar</v-btn>
                    <v-card-title>
                      <h1>{{item.dia}}</h1>  
                      </v-card-title>
                    <v-card-subtitle>
                      <h4>{{item.fecha}} a las  {{item.hora}} en {{item.lugar}}</h4>  
                    </v-card-subtitle>
                    <v-card-text>
                      <p>{{item.desc}}</p>
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
                      <h4>{{item.fecha}} a las  {{item.horaF}} en {{item.lugarF}}</h4>  
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
            <v-form @submit.prevent="edit">
              <v-card dark height="100%">
                <v-card-title>
                  <h2>
                    <v-text-field v-model="item.dia" label=" Introduce el día"></v-text-field>
                  </h2>
                </v-card-title>
                <v-card-subtitle>                
                  <h4>
                    <v-text-field v-model="item.fecha" label="Introduce la fecha: dd/mm/aaaa"></v-text-field>
                    <v-text-field v-model="item.hora" label="Introduce la hora de comienzo: 00:00 "></v-text-field>
                    <v-text-field v-model="item.lugar" label="Introduce el lugar de comienzo"></v-text-field>
                  </h4>
                </v-card-subtitle>
                <v-card-text>
                <p>
                  <v-text-field v-model="item.desc" label="Introduce una descripción de la actividad"></v-text-field>
                </p>
                <p>
                  <v-text-field v-model="item.precio" label="Introduce el precio: X"></v-text-field>
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
                  <v-text-field v-model="item.horaF" label="Introduce la hora de comienzo: 00:00 "></v-text-field>
                  <v-text-field v-model="item.lugarF" label="Introduce el lugar de comienzo"></v-text-field>
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

    </v-container>
</template>
<script>
export default {
  name: "Home",
  computed: {
    items() {
      return this.$store.getters.proximaActividad;
    }
  },
  data() {
    return {
      valid: true, //v-if --> method edit
      item:[],
      id:1,
      //Variables recogidas en v-model del formulario

      indexActi: "" //--> method edit
    };
  },
  mounted() {
    this.$store.dispatch('loadInicio')
  },
  methods: {
    //Recogida de los datos de la actividad a editar  para poder mostrarlos en el formulario de edicion
    edit() {
      var datos={
        dia:this.item.dia,
        lugar:this.item.lugar,
        hora:this.item.hora,
        fecha:this.item.fecha,
        desc:this.item.desc,
        precio:this.item.precio,
        horaF:this.item.horaF,
        lugarF:this.item.lugarF
      }
      this.$store.dispatch('updateInicio', {datos:datos, id:this.id });
      this.valid=true
    },

  }
};
</script>
<style>
h1,
h2 {
  color: azure;
}
</style>
