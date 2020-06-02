<template>
<v-container>
    <v-layout wrap>
        <v-flex xs12 mb-1>
            <v-card dark class="jumbotron">
                <v-card-title><h1>Listado de luner@s</h1></v-card-title>
                <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, hic.</v-card-text>
                <v-card-actions>
                    <v-btn class="info" large :to="{name:'Luneros'}" >Listado</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
        <v-flex xs12 mb-1>
            <v-card dark class="jumbotron">
                <v-card-title><h1>Evaluaciones</h1></v-card-title>
                <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, hic.</v-card-text>
                <v-card-actions>
                    <v-btn class="info" large :to="{name:'Evaluaciones'}" >Listado de Evaluaciones</v-btn>
                </v-card-actions>

            </v-card>
        </v-flex>
        <v-flex xs12 mb-1>
            <v-card dark class="jumbotron">
                <v-card-title><h1>Registro</h1></v-card-title>
                <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, hic.</v-card-text>
                <v-card-actions>
                    <v-btn class="info" large :to="{name:'Registro'}">Registrar</v-btn>
                </v-card-actions>

            </v-card>
        </v-flex>
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
