<template>
    <v-container>
        <h1>Contacto</h1>
        <v-layout  >
            <v-flex xs12>
                <v-card dark> 
                    <v-card-title>
                        <h2>Puedes mandarnos un correo o llamarnos: </h2>
                    </v-card-title>
                    <v-card-text>
                        <v-btn text small href="mailto:lalunaalcobenndas@gmail.com?Subject=Interesado%en%la%Luna" class="success">
                            lalunaalcobenndas@gmail.com
                        </v-btn>
                        <v-btn text small href="mailto:lalunaalcobenndas@gmail.com?Subject=Interesado%en%la%Luna" class="success ml-2">
                            la_luna_alcobenndas@hotmail.com
                        </v-btn>
                        <hr class=" my-4 ">
                        Teléfono de la luna: <v-btn text href="tel:611688021" ><h4>611 68 80 21</h4></v-btn>
                        <hr class=" my-4 ">
                        <p>Cualquier duda estamos a su disposición</p>
                        <hr class=" my-4 ">
                        <p>NIF: G81164469</p>
                        <p>Casa de las asociaciones<br>Calle de Cáceres,18 <br> 28100 Alcobendas, Madrid</p>
                    </v-card-text>
                    <v-card-actions>            
                        <iframe class="d-block w-100" src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.1354486690466!2d-3.6343836846003565!3d40.53859657935119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422cf780c46225%3A0xc4af6e1770c0aefe!2sCasa%20de%20las%20Asociaciones!5e0!3m2!1ses!2ses!4v1586739419365!5m2!1ses!2ses "
                                width="auto " height="350 " frameborder="0 " style="border:3; " allowfullscreen=" " aria-hidden="false " tabindex="0 "></iframe>
                    </v-card-actions>
                </v-card>
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