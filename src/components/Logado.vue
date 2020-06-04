<template>
<v-container>
    <v-layout wrap>
        <v-flex xs12 mb-1>
            <v-card dark class="jumbotron">
                <v-card-title><h1>Listado de luner@s</h1></v-card-title>
                <v-card-text class="display-1">Listado de teléfonos de los luneros. Información adicional como patologías, comentarios... </v-card-text>
                <v-card-actions>
                    <v-btn class="info" large :to="{name:'Luneros'}" >Listado</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
        <v-flex xs12 mb-1>
            <v-card dark class="jumbotron">
                <v-card-title><h1>Evaluaciones</h1></v-card-title>
                <v-card-text class="display-1">Listado de las evaluaciones. Se podrán insertar nuevas evaluaciones, editarlas o eliminarlas</v-card-text>
                <v-card-actions>
                    <v-btn class="info" large :to="{name:'Evaluaciones'}" >Listado de Evaluaciones</v-btn>
                </v-card-actions>

            </v-card>
        </v-flex>
        <v-flex xs12 mb-1>
            <v-card dark class="jumbotron">
                <v-card-title><h1>Registro</h1></v-card-title>
                <v-card-text class="display-1">Registrar un nuevo monitor en la app</v-card-text>
                <v-card-actions>
                    <v-btn class="info" large :to="{name:'Registro'}">Registrar</v-btn>
                </v-card-actions>

            </v-card>
        </v-flex>
        <v-btn absolute dark mr-0 mt-0 fab bottom right color="blue" href="#"><v-icon color="white">mdi-arrow-up</v-icon></v-btn>
    </v-layout>
    <v-content>
      <router-view dark></router-view>
    </v-content>
    </v-container>
</template>
<script>

export default {
    name:'Logado',

}
</script>
