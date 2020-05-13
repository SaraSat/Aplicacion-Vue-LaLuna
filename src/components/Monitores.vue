<template>
    <v-content>
        <v-content v-if="!login">
                    <v-layout justify-center >
            <v-flex xs6>
                <v-card>
                    <v-card-title>Iniciar sesión</v-card-title>
                    <v-card-text>
                        <v-form @submit.prevent="enter">
                            <v-text-field label="Usuario" v-model="user"></v-text-field>
                            <v-text-field label="Contraseña" v-model="pass" type="password"></v-text-field>
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
</template>
<script>
import Logado from './Logado.vue'
export default {
    name:'Monitores',
    components: {
        Logado
    },
    data() {
        return {
            users:[
                {
                    user:'Sara',
                    pass:'Sara0000'
                },
                {
                    user:'Tomas',
                    pass:'Tomas1111'
                }
            ],
            user:'',
            pass:'',
            login:true
            
        }
    },
    methods: {
        enter(){
            var cont = 0
         this.users.forEach(user => {
             if(user.user === this.user && user.pass === this.pass){
                 cont += 1
             }

         });
         if(cont === 0){
             console.log('Usuario o contraseña erroneas')
         }else{
             //this.login=true
         }
        }
        
    }
}
</script>
