<template>

  <!--Vista Quienes somos con una descripción de la asociación y el componente galeria-->
    <v-container>
        <h1>Quiénes somos??</h1>
        <v-layout wrap>
          <Galeria class="mb-4"></Galeria>
          <v-flex xs12 mb-2>
          </v-flex>
          <v-flex xs12>
            <v-card dark>
              <v-card-title>
                <h2 class="display-2">Asociación de ocio y tiempo libre: <span class="display-4"> La Luna</span> </h2>
                </v-card-title>
                <v-card-text>
                  <h3 class="font-weight-thin">
                  El fin último de la Asociación es <span class="font-weight-bold">ofrecer ocio</span> a personas con discapacidad, aprovechando las alternativas que ofrece 
                  el ocio de forma educativa, <span class="font-weight-bold">potenciando la integración</span> de los destinatarios/as en el entorno, 
                  propiciaremos la comunicación y diálogo entre ellos/as. Todo ello recordando, 
                  la implicación en la mejora del funcionamiento de la Asociación.</h3>
                  <v-divider></v-divider>
                  <h4 class="font-weight-thin">
                  Las actividades se realizarán <span class="font-weight-bold">los fines de semana</span>, teniendo en cuenta la disponibilidad de los monitores y 
                  las monitoras voluntarios/as de la Asociación.
                  <v-divider></v-divider>
                  Se utilizarán los siguientes recursos: 
                  <v-list>
                    Económicos:la subvención
                  </v-list>
                  <v-list>Humanos: todo el voluntariado que forma parte de la Asociación
                  </v-list>
                  <v-list>Socio-sanitarios como fuente de trabajo multidisciplinar</v-list>
                  <v-list>Socioculturales y socioeducativos para favorecer la integración en el entorno y 
                      ofrecer un ocio de manera educativa</v-list>
                  <v-divider></v-divider>
                  A cada actividad se le asignarán objetivos planificados en el proyecto y se evaluará en función de los mismos y 
                  de la ficha de actividad diseñada por la Asociación. Se evaluará el cumplimiento de objetivos de manera trimestral con 
                  vistas a mejoras o reforzando el trabajo realizado.</h4>

                </v-card-text>  
            </v-card>    

          </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import Galeria from "../components/Galeria";

export default {
  name: "About",

  components: {
    Galeria
  },

  data: () => ({})
};
</script>
<style>
h1 {
  color: azure;
}
</style>