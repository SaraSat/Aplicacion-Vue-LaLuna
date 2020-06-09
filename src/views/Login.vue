<template>
    <v-container>
        <h2>Acceso a Monitores</h2>
            <v-content>
        <v-content v-if="!login">
            <v-layout justify-center >
                <v-flex xs12 sm6 align-self-center="">
                    <v-card max-width="800" min-width="350">
                        <v-card-title>Iniciar sesión</v-card-title>
                        <v-card-text>
                            <v-form @submit.prevent="enter">
                                <v-text-field label="Usuario" v-model="email"></v-text-field>
                                <v-text-field label="Contraseña"  :type="pass ? 'text' : 'password'" :append-icon="pass ? 'mdi-eye' : 'mdi-eye-off'"
                                @click:append="pass = !pass" v-model="password"></v-text-field>
                        <v-card-actions>
                            <v-btn class="info" type="submit">Aceptar</v-btn>
                        </v-card-actions>
                        </v-form>
                        </v-card-text>
                    </v-card>
                </v-flex>
        </v-layout>
            <v-snackbar v-if="snackbar"> E-mail o contraseña erróneos
            <v-btn color="red" text @click="snackbar = false">Close</v-btn>
            </v-snackbar>

        </v-content>
        <Logado v-if="login"></Logado>
    </v-content>

    </v-container>

</template>

<script>
import Logado from '../components/Logado.vue'
export default {
    name:'Login',
    components: {
        Logado
    },
    computed:{
        login(){
            return this.$store.getters.login
        },
        snackbar(){
           return this.$store.getters.snackbar 
        }, 
    },
    data() {
        return {

            email:'',
            password:'',
            pass:false

        }
    },
    methods: {
        enter(){
            var datos={
                email:this.email,
                password:this.password
            }
            
            this.$store.dispatch('login', {datos:datos})
        },

    }

}
</script>
