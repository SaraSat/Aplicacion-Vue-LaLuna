<template>

<!--Componente hijo de ListaActividades, formulario para poder agregar una actividad-->
        <v-form  @submit.prevent="evento">
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
                <v-btn class="success" type="submit">Aceptar</v-btn>
                <v-btn class="error" @click="cancelar">Cancelar</v-btn>
            </v-card-actions>
        </v-card>
    </v-form>
</template>




<script>
export default {
  name: "FormularioActividad",
  mounted() {

  },

}
</script>
