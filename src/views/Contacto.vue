<template>
<!--Vista de página de contacto-->
    <v-container>
        <h1>Contacto</h1>
        <v-layout  >
            <v-flex xs12>
                <v-card dark> 
                    <v-card-title>
                        <h1>Cualquier duda estamos a su disposición!
                            <br>
                            Puedes mandarnos un correo o llamarnos: 
                        </h1>
                    </v-card-title>
                    <v-card-text> 
                        <div>
                            <v-btn  text large="" 
                                href="mailto:lalunaalcobendas@gmail.com?Subject=Interesado%en%la%Luna" color="blue" left=""> 
                                    lalunaalcobenndas@gmail.com
                            </v-btn>
                            <v-btn text large="" 
                                href="mailto:lalunaalcobendas@gmail.com?Subject=Interesado%en%la%Luna" color="blue" right=""> 
                                    la_luna_alcobenndas@hotmail.com
                            </v-btn>
                        </div>
                        <v-divider></v-divider>
                        <p class="display-1">Teléfono de la luna: <v-btn text href="tel:611688021" large="" ><p class="display-1">611 68 80 21</p></v-btn></p>
                        <v-divider></v-divider>
                        <p class="display-1"></p>
                        <v-divider></v-divider>
                        <h6>también puedes encontrarnos en  <span class="font-weight-bold">facebook o instagram</span>
                            <v-btn icon href="https://www.facebook.com/La-Luna-1575189982738297"><v-icon color="blue" >mdi-facebook</v-icon></v-btn>
                            <v-btn icon href="https://www.instagram.com/lalunaalcobendas" ><v-icon color="pink">mdi-instagram</v-icon></v-btn>
                            </h6>
                        
                        <v-divider></v-divider>
                        <h6>NIF: G81164469</h6>
                        <h6>Casa de las asociaciones<br>Calle de Cáceres,18 <br> 28100 Alcobendas, Madrid</h6>
                    </v-card-text>
                    <v-card-actions>            
                        <iframe class="d-block w-100" src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.1354486690466!2d-3.6343836846003565!3d40.53859657935119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422cf780c46225%3A0xc4af6e1770c0aefe!2sCasa%20de%20las%20Asociaciones!5e0!3m2!1ses!2ses!4v1586739419365!5m2!1ses!2ses "
                                width="100% " height="450 " frameborder="0 " style="border:3; " allowfullscreen=" " aria-hidden="false " tabindex="0 "></iframe>
                    </v-card-actions>
                </v-card>
                <v-btn absolute dark mr-0 mt-0 fab bottom right color="blue" href="#"><v-icon color="white">mdi-arrow-up</v-icon></v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<<script>
export default {
    name:'Contacto'
}
</script>
<style>
    h4{
        color:azufre
    }
</style>