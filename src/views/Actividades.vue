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
                <v-btn icon><v-icon @click="agregar" color="green">mdi-plus</v-icon></v-btn>
            </v-flex>
        </v-layout>

        <!--Tarjetas de actividad-->
        <v-layout wrap>
            <v-flex v-for="(item,index) in items" :key="index" v-if="add && edit" mb-1>
                <v-card dark xs12 md6>
                    <v-card-title><h4>{{item.nombre}}</h4></v-card-title>
                    <v-card-subtitle><h6>Fin de semana previsto: {{item.finde}}</h6></v-card-subtitle>
                    <v-card-text>{{item.texto}}</v-card-text>
                    <v-card-actions>
                        <v-btn class="success" @click="editar(index)">Editar</v-btn>
                        <v-btn class="error" @click="eliminar(item.id)">Eliminar</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>

        <!--Componente FormularioActividad que se mostrará si la variable add es true-->
        <v-layout v-if="!add">
            <v-flex>
                    <FormularioActividad @action="agregarActividad" @cancel="cancelar">
                    </FormularioActividad>

            </v-flex>
        </v-layout>

        <!--Componente FormularioActividad que se mostrará si la variable edit es true-->
        <v-layout  v-if="!edit">
            <v-flex>
                 <FormularioActividad @action="editarActividad" @cancel="cancelar">
                    </FormularioActividad>
            </v-flex>

        </v-layout>
    </v-content>
    </v-container>
</template>
<script>

import FormularioActividad from "../components/FormularioActividad.vue";
import { variables } from "../components/FormularioActividad.vue";
export default {
  name: "Actividades",
  components: {
    FormularioActividad
  },
  data() {
    return {
      //Objeto con datos de actividad
      items: [
        {
          id: 0,
          nombre: "Colchonetas",
          finde: "25 de Abril",
          texto:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint quam quaerat laudantium quidem accusantium, doloremque dolorem incidunt nemo? Incidunt, sit."
        }
      ],

      add: true, //-.>method editar
      edit: true, //-->method agregar
      itemIndex: ""
    };
  },
  methods: {
    //Metodo para hacer visible el formulario mostrando los datos recogidos de la actividad seleccionada
    editar(index) {
      variables.setNombre(this.items[index].nombre);
      variables.setFinde(this.items[index].finde);
      variables.setTexto(this.items[index].texto);

      this.edit = false;
      this.itemIndex = index;
    },

    //Metodo que edita la ficha seleccionada, los parámetros son emitidos desde el componente hijo
    editarActividad(nombre, finde, texto) {
      if (nombre !== "" || finde !== "" || texto !== "") {
        this.items[this.itemIndex].nombre = nombre;
        this.items[this.itemIndex].finde = finde;
        this.items[this.itemIndex].texto = texto;

        this.edit = true;
      }
    },

    //Métdo para eliminar del objeto la actividad seleccionada
    eliminar(id) {
      this.items = this.items.filter(e => e.id != id);
    },

    //Metodo para hacer visible el formulario, mostrando los datos vacíos
    agregar() {
      this.add = false;

      variables.setNombre("");
      variables.setFinde("");
      variables.setTexto("");
    },

    //Método que añade una actividad al objeto, los parámetros son emitidos desde el componente hijo
    agregarActividad(nombre, finde, texto) {
      if (nombre !== "" || finde !== "" || mes !== "") {
        this.items.push({
          id: this.items.length + 1,
          nombre: nombre,
          finde: finde,
          texto: texto
        });

        this.add = true;
      }
    },

    //Metodo para poder cancelar la edicion o agregar. Emitido desde el hijo
    cancelar() {
      if (!this.add) {
        this.add = true;
      }
      if (!this.edit) {
        this.edit = true;
      }
    }
  }
};
</script>

<style>
  h1 {
    color: azure;
  }
</style>

