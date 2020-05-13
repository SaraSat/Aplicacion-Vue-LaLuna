<template>

  <!--Vista de las actividades programadas, importa el componente ListaActividades-->
    <v-container>
        <h1>Actividades previstas</h1>
        <ListaActividades></ListaActividades>
    </v-container>
</template>
<script>
import ListaActividades from "../components/ListaActividades";

export default {
  name: "Actividades",

  components: {
    ListaActividades
  },

  data: () => ({})
};
</script>
<style>
h1 {
  color: azure;
}
</style>