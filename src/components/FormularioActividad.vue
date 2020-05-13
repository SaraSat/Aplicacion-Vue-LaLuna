<template>

<!--Componente hijo de ListaActividades, formulario para poder agregar o editar una actividad-->
        <v-form  @submit.prevent="evento" >
        <v-card dark>
            <v-card-title>
                <v-text-field label="Introduce el nombre de la actividad" v-model="nombre"></v-text-field>
            </v-card-title>
            <v-card-subtitle>
                Fin de Semana previsto:
                <v-text-field label="introduce el dia" v-model="finde"></v-text-field>
            </v-card-subtitle>
            <v-card-text>
                <v-text-field label="introduce una breve descripción" v-model="texto"></v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-btn class="success" type="submit">Aceptar</v-btn>
                <v-btn class="error" @click="cancelar">Cancelar</v-btn>
            </v-card-actions>
        </v-card>
    </v-form>
</template>




<script>
export default {
  name: "FormularioActividad",
  data() {
    return {
      nombre: variables.getNombre(),
      finde: variables.getFinde(),
      texto: variables.getTexto()
    };
  },
  methods: {
    //Metodo para emitir al padre la variables del formulario
    evento() {
      this.$emit("action", this.nombre, this.finde, this.texto);
    },

    //Metodo para poder emitir al padre el evento cancel, y asi cancelar la operacion
    cancelar() {
      this.$emit("cancel");
    }
  }
};

//Constante que contiene los getters y setters de las variables
export const variables = {
  setNombre: function(nombre) {
    this.nombre = nombre;
  },
  setFinde: function(finde) {
    this.finde = finde;
  },
  setTexto(texto) {
    this.texto = texto;
  },
  getNombre: function() {
    return this.nombre;
  },
  getFinde: function() {
    return this.finde;
  },
  getTexto: function() {
    return this.texto;
  }
};
</script>
