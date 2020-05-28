<template>

  <!--Vista de las actividades programadas-->
  <v-container>
      <h1>Actividades previstas</h1>

      <!--Tarjeta de actividad, se genera un for para recorrer el objeto que contenga las diferentes actividades programadas
      y asi mostrar los datos de cada una con la misma estructura
      Se importa el componente FormularioActividad para agregar o editar
      Se importa la constante variables de Formulario actividad para poder acceder a gettes y setters de los datos-->
    <v-content>
        <v-layout>
            <v-flex>
                <v-btn icon><v-icon @click="add=false" color="green">mdi-plus</v-icon></v-btn>
            </v-flex>
        </v-layout>

        <!--Tarjetas de actividad-->
        <v-layout wrap>
            <v-flex v-for="(item,index) in items" :key="index"  mb-1 v-if= add>
                <v-card dark xs12 md6>
                    <v-card-title><h4>{{item.nombre}}</h4></v-card-title>
                    <v-card-subtitle><h6>Fin de semana previsto: {{item.fecha}}</h6></v-card-subtitle>
                    <v-card-text>{{item.desc}}</v-card-text>
                    <v-card-actions>
                        <v-btn class="success" @click="edit=false" >Editar</v-btn>
                        <v-btn class="error" >Eliminar</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>

        <!--Componente FormularioActividad que se mostrará si la variable add es true-->
        <v-layout v-if="add">
            <v-flex>
                    <FormularioActividad>
                    </FormularioActividad>

            </v-flex>
        </v-layout>

        <!--Componente FormularioActividad que se mostrará si la variable edit es true-->
        <v-layout v-if="!edit">
            <v-flex>
                 <FormularioActividad :item="item">
                  </FormularioActividad>
            </v-flex>

        </v-layout>
    </v-content>
    </v-container>
</template>
<script>

import FormularioActividad from "../components/FormularioActividad.vue";
export default {
  name: "Actividades",
  components: {
    FormularioActividad
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
      add: true, //-.>method editar
      edit: true, //-->method agregar
      item:[]
    };
  },
  methods: {

  }

};
</script>

<style>
  h1 {
    color: azure;
  }
</style>

