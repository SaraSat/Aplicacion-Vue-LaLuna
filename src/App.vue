<template>
<!--Aplicación vista principal: nav y footer -->
  <v-app id="app" >

    <!--Barra de navegación, menú -->
    <v-app-bar dark min-height="140" prominent="">
      <img src="./assets/LunaFondoBueno.png" alt="Logotipo de la luna con un gato" height="80" width="80" class="mt-2">
      <span class="float-right ml-2 mt-2" id="title" v-if="grow">Asociación de ocio y tiempo libre <br> La Luna</span>
      <span class="float-right ml-2 mt-2" id="title" v-if="vertical" style="fontSize:4vw; ">Asociación de ocio y tiempo libre La Luna</span>
        <v-tabs v-resize="menu" :grow="grow" v-if="grow" class="mr-5">
          <v-tab :to="{name:'Home'}">Inicio</v-tab>
          <v-tab :to="{name:'Actividades'}">Actividades</v-tab>
          <v-tab :to="{name:'About'}">Quienes somos?</v-tab>
          <v-tab block :to="{name:'Login'}">Monitores</v-tab>
          <v-tab block :to="{name:'Contacto'}">Contacto</v-tab>
          <v-btn class="error" v-if="login" @click="cerrar" small="">Cerrar Sesion</v-btn>
        </v-tabs>

      <!--Versión menu navegación para pantallas pequeñas-->  
        <v-app-bar-nav-icon v-if="vertical" @click.stop="open=!open" class="mt-12 ml-6"></v-app-bar-nav-icon>
        <v-toolbar-title v-if="vertical" class="mb-6" style="width:60vw">Menu</v-toolbar-title>
       
    </v-app-bar>
            <v-navigation-drawer v-model="open"  absolute="" float hide-overlay dark>
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
          <v-list-item>
            <v-list-item-action>
               <v-btn class="error" v-if="login" @click="cerrar" small="">Cerrar Sesión</v-btn>
            </v-list-item-action>
          </v-list-item>      
          </v-navigation-drawer>    

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
          <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">
          <img alt="Licencia de Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" />
          </a><br />Este obra está bajo una <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">
          licencia de Creative Commons Reconocimiento-NoComercial 4.0 Internacional</a>.        
        </v-card-text>
        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>La Luna Alcobendas</strong>
        </v-card-text>
      </v-card>
    </v-footer>

    <!--Dialog con información de las cookies utilizadas -->
    <v-dialog v-model="dialog" >
      <v-card width="300" class="float-right">
        <v-card-title>Política de cookies</v-card-title>
        <v-card-text>Esta página web utiliza cookies únicamente temporales para mantener abierta la sesión del usuario, 
          guardando el usuario y contraseña del último desde el que se ha accedido</v-card-text>          
        <v-card-actions>
          <v-btn @click="dialog=false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

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
      dialog:true,
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
    //Función para cerrar sesión
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
  font-family: 'Dancing Script', cursive;

  font-family: 'Indie Flower', cursive;

  font-family: 'Raleway', sans-serif;
}
p, v-card, v-dialog, v-container, v-content, h1, h2, h3{
  word-break: normal;
}

#title{
    font-family: 'Dancing Script', cursive;

    font-family: 'Indie Flower', cursive;
   
  }


@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Indie+Flower&display=swap'); 

@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Indie+Flower&family=Raleway:wght@200&display=swap');
</style>