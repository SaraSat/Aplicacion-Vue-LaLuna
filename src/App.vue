<template>
<!--Aplicación vista principal: nav y footer -->
  <v-app id="app" >

    <!--Barra de navegación, menú -->
    <v-app-bar dark min-height="140" prominent="">
        <v-layout align-center wrap=""  >
          <v-flex>
            <img src="./assets/Luna_negro.png" alt="Logotipo de la luna con un gato" height="140" width="140">
          </v-flex>
          <v-flex>
          <v-btn  block :to="{name:'Home'}" dark text>Inicio</v-btn>
          </v-flex>
          <v-flex>
            <v-btn  block :to="{name:'Actividades'}" dark text>Actividades</v-btn>
          </v-flex>
          <v-flex>
            <v-btn  block :to="{name:'About'}" dark text>Quienes somos?</v-btn>
          </v-flex>
          <v-flex>
            <v-btn  block :to="{name:'Login'}" dark text>Monitores</v-btn>
          </v-flex>
          <v-flex>
            <v-btn  block :to="{name:'Contacto'}" dark text>Contacto</v-btn>
          </v-flex>
        </v-layout>
    </v-app-bar>

    <!--Se añaden las rutas de las vistas definidas en el menu -->
    <v-content>
      <router-view dark></router-view>
    </v-content>

    <!-- Footer -->
    <v-footer dark padless>
      <v-card flat tile class="dark lighten-1 white--text text-center">
        <v-card-text>
          <v-btn icon><v-icon color="blue">mdi-facebook</v-icon></v-btn>
          <v-btn icon ><v-icon color="pink">mdi-instagram</v-icon></v-btn>
        </v-card-text>
        <v-card-text class="white--text pt-0">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit similique assumenda repellat, facilis sint suscipit eius, 
          nemo accusantium aliquam ratione necessitatibus, 
          quam placeat vitae eum iure optio recusandae exercitationem quos?
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>La Luna Alcobendas</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  background-color: rgb(46, 45, 45);
}
</style>