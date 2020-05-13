<template>

  <!--Vista Quienes somos con una descripción de la asociación y el componente galeria-->
    <v-container>
        <h1>Quiénes somos??</h1>
        <v-layout wrap>
          <Galeria></Galeria>
          <v-flex xs12 mb-2>
          </v-flex>
          <v-flex xs12>
            <v-card dark>
              <v-card-title>
                <h2>Asociación de ocio y tiempo libre La Luna</h2>
                </v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eos labore dolores facere. 
                  Ipsa dolores vitae nesciunt dicta perferendis consequatur voluptate earum sunt unde non! 
                  Doloremque maiores dolor dignissimos! Amet rem nisi corporis quaerat earum totam ullam non incidunt natus.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  Odio inventore sed suscipit, saepe consequatur accusamus mollitia,
                  tempore quae tenetur temporibus numquam ipsa rerum quisquam neque earum explicabo quos nostrum quo.
                  Odit non numquam magni, eligendi repudiandae autem eveniet suscipit nam.
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