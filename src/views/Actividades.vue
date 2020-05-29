<template>

  <!--Vista de las actividades programadas-->
  <v-container>
    <h1>Actividades previstas</h1>

      <!--Tarjeta de actividad, se genera un for para recorrer el objeto que contenga las diferentes actividades programadas
      y asi mostrar los datos de cada una con la misma estructura
      Se importa el componente FormularioActividad para agregar o editar
      Se importa la constante variables de Formulario actividad para poder acceder a gettes y setters de los datos-->
    <v-content>
      <!--Dialog para poder insertar una nueva tarjeta actividad -->
      <v-dialog v-model="dialog"  persistent max-width="600px">
        <template v-slot:activator="{on}">
          <v-btn class="d-flex flex-column ml-12" v-on="on"  small="">
            <v-icon color ="green darken-2" x-large >mdi-pencil</v-icon>
            <span>Insertar</span>
          </v-btn>
        </template>
        <v-card dark>
          <v-card-title>
              <v-text-field label="Introduce el nombre de la actividad" v-model="nombre"></v-text-field>
          </v-card-title>
          <v-card-subtitle>
              Fin de Semana previsto:
              <v-text-field label="introduce el dia" v-model="fecha"></v-text-field>
          </v-card-subtitle>
          <v-card-text>
              <v-text-field label="introduce una breve descripción" v-model="desc"></v-text-field>
          </v-card-text>
          <v-card-actions>
              <v-btn class="success" @click="insertar">Aceptar</v-btn>
              <v-btn class="error" @click="dialog=false">Cancelar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!--Tarjetas de actividad-->
      <v-layout wrap>
          <v-flex v-for="(item,index) in items" :key="index"  mb-1 v-if= add>
              <v-card dark xs12 md6>
                  <v-card-title><h4 v-if="!ed">{{item.nombre}}</h4>
                  <h4 v-if="ed"><v-text-field v-model="item.nombre"></v-text-field></h4>
                  </v-card-title>
                  <v-card-subtitle><h6 v-if="!ed">Fin de semana previsto: {{item.fecha}}</h6>
                  <h6 v-if="ed"><v-text-field label="Fin de semana previsto: " v-model="item.fecha"></v-text-field></h6>
                  </v-card-subtitle>
                  <v-card-text v-if="!ed">{{item.desc}}</v-card-text>
                  <v-card-text v-if="ed"><v-text-field v-model="item.desc"></v-text-field></v-card-text>
                  <v-card-actions>
                      <v-btn class="success" @click="ed=true" v-if="!ed" >Editar</v-btn>
                      <v-btn class="success" @click="edit" v-if="ed" >Editar</v-btn>
                      <v-btn class="error" @click="eliminar" v-if="!ed">Eliminar</v-btn>
                      <v-btn class="error" @click="ed=false" v-if="ed">Cancelar</v-btn>
                  </v-card-actions>
              </v-card>
          </v-flex>
      </v-layout>
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
      return this.$store.getters.actividades
    }
  },
    mounted() {
      this.$store.dispatch('loadActividades')
  },
  data() {
    return {
      ed: false, //-->method editar
      item:[], 
      nombre:'',
      fecha:'',
      desc:'',
      dialog:false
    };
  },
  methods: {
    edit(){
      var datos={
        nombre:this.items.nombre,
        fecha:this.items.fecha,
        desc:this.items.desc
      }
      this.$store.dispatch('updateActividades', {id:this.items.id, datos:datos})
      this.edd=false
    },
    eliminar() {
      this.$store.dispatch('deleteActividad', this.items.id)
    },
    insertar() {
      var datos={
        nombre:this.nombre,
        fecha:this.fecha,
        desc:this.desc
      }
      this.$store.dispatch('insertActividad', {datos:datos})
      this.dialog=false

    }
  }

};
</script>

<style>
  h1 {
    color: azure;
  }
</style>

