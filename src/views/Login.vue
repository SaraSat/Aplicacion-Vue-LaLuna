<template>
    <v-container>
        <h2>Acceso a Monitores</h2>
            <v-content>
        <v-content v-if="!login">
                    <v-layout justify-center >
            <v-flex xs6>
                <v-card>
                    <v-card-title>Iniciar sesión</v-card-title>
                    <v-card-text>
                        <v-form @submit.prevent="enter">
                            <v-text-field label="Usuario" v-model="email"></v-text-field>
                            <v-text-field label="Contraseña" v-model="password" type="password"></v-text-field>
                    <v-card-actions>
                        <v-btn class="info" type="submit">Aceptar</v-btn>
                    </v-card-actions>
                    </v-form>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>

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
        }
    },
    data() {
        return {

            email:'',
            password:''

        }
    },
    methods: {
        enter(){
            var datos={
                email:this.email,
                password:this.password
            }
            
            this.$store.dispatch('login', {datos:datos})
        }
    }

}
</script>
