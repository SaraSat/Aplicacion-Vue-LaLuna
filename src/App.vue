<template>
<!--Aplicación vista principal: nav y footer -->
  <v-app id="app" >

    <!--Barra de navegación, menú -->
    <v-app-bar dark min-height="140" prominent="">
      <img src="./assets/LunaFondoBueno.png" alt="Logotipo de la luna con un gato" height="140" width="140">
        <v-tabs v-resize="menu" :grow="grow" v-if="grow">
          <v-tab :to="{name:'Home'}">Inicio</v-tab>
          <v-tab :to="{name:'Actividades'}">Actividades</v-tab>
          <v-tab :to="{name:'About'}">Quienes somos?</v-tab>
          <v-tab block :to="{name:'Login'}">Monitores</v-tab>
          <v-tab block :to="{name:'Contacto'}">Contacto</v-tab>
        </v-tabs>
        <v-btn class="error" v-if="login" @click="cerrar">cerrar sesion</v-btn>

      <!--Versión menu navegación para pantallas pequeñas-->  
        <v-app-bar-nav-icon v-if="vertical" @click.stop="open=!open"></v-app-bar-nav-icon>
        <span v-if="vertical">Menu</span>
        <v-navigation-drawer v-model="open" width="350" absolute="" floating="" hide-overlay>
          <v-list dense>
            <v-list-item link :to="{name:'Home'}">
              <v-list-item-action>
                <v-icon>mdi-home</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Inicio</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link :to="{name:'Actividades'}">
              <v-list-item-content>
                <v-list-item-title>Actividades</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link :to="{name:'About'}">
              <v-list-item-content>
                <v-list-item-title>Quienes somos?</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link :to="{name:'Login'}">
              <v-list-item-content>
                <v-list-item-title>Monitores</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link :to="{name:'Contacto'}">
              <v-list-item-content>
                <v-list-item-title>Contacto</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>        
          </v-navigation-drawer>
    </v-app-bar>

    

    <!--Se añaden las rutas de las vistas definidas en el menu -->
    <v-content>
      <router-view dark></router-view>
    </v-content>

    <!-- Footer -->
    <v-footer dark padless xs12>
      <v-card flat tile class="dark lighten-1 white--text text-center" width="100%">
        <v-card-text> 
          <v-btn icon href="https://www.facebook.com/La-Luna-1575189982738297"><v-icon color="blue" >mdi-facebook</v-icon></v-btn>
          <v-btn icon href="https://www.instagram.com/lalunaalcobendas" ><v-icon color="pink">mdi-instagram</v-icon></v-btn>
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
  computed:{
    login(){
      return this.$store.getters.login
    }
  },
  data() {
    return{
      //Variables que permiten el cambio de menu en función del tamaño de la pantalla --> menu()
      grow:true,
      vertical:false,
      open:false,
    }
  },
  methods:{
    //Función que permite cambiar la vista del menu en función del tamaño de pantalla
    menu(){
      if(window.innerWidth<808){
        this.grow=false
        this.vertical=true
      }else{
        this.grow=true
        this.vertical=false
      }
    },
    cerrar(){
      this.$store.dispatch('cerrarSesion')
    }
  },
  beforeUpdate(){
    this.menu()
  },
  mounted(){
    this.menu()
  },
};
</script>

<style>
#app {
  background-color: rgb(46, 45, 45);
}
p, v-card, v-dialog, v-container, v-content, h1, h2, h3{
  word-break: normal;
}
</style>