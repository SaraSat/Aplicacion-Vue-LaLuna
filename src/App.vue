<template>
<!--Aplicación vista principal: nav y footer -->
  <v-app id="app" >

    <!--Barra de navegación, menú -->
    <v-app-bar dark min-height="140" prominent="">
      <img src="./assets/Luna_negro.png" alt="Logotipo de la luna con un gato" height="140" width="140">
        <v-tabs v-resize="menu" :grow="grow" :vertical="vertical">
          <v-tab :to="{name:'Home'}">Inicio</v-tab>
          <v-tab :to="{name:'Actividades'}">Actividades</v-tab>
          <v-tab :to="{name:'About'}">Quienes somos?</v-tab>
          <v-tab block :to="{name:'Login'}">Monitores</v-tab>
          <v-tab block :to="{name:'Contacto'}">Contacto</v-tab>
        </v-tabs>
    </v-app-bar>

    <!--Se añaden las rutas de las vistas definidas en el menu -->
    <v-content>
      <router-view dark></router-view>
    </v-content>

    <!-- Footer -->
    <v-footer dark padless xs12>
      <v-card flat tile class="dark lighten-1 white--text text-center" width="100%">
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
  name: "App",
  data() {
    return{
      grow:true,
      vertical:false,
    }
  },
  methods:{
    menu(){
      if(window.innerWidth<808){
        this.grow=false
        this.vertical=true
      }else{
        this.grow=true
        this.vertical=false
      }
    }
  },
  mounted(){
    this.menu
  }
};
</script>

<style>
#app {
  background-color: rgb(46, 45, 45);
}
</style>