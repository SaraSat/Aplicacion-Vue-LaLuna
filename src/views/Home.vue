<template>
<!--Vista de inicio con información de la próxima actividad, importa el componente ProximaActividad -->

    <v-container>
        <h1>Próxima actividad</h1>
        <ProximaActividad></ProximaActividad>
    </v-container>
</template>
<script>
import ProximaActividad from "../components/ProximaActividad";

export default {
  name: "Home",

  components: {
    ProximaActividad
  },

  data: () => ({})
};
</script>
<style>
h1,
h2 {
  color: azure;
}
</style>
