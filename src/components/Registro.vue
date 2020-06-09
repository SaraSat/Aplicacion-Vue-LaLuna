<template>
    <v-container>
        <v-card dark>
            <form lazy-validation>
            <v-card-title>Registrar un nuevo monitor</v-card-title>
            <v-card-text >
                <v-text-field label="Nombre" v-model="name" required :rules="nameRules"></v-text-field>
                <v-text-field label="Correo" v-model="email" required :rules="emailRules"></v-text-field>
                <v-text-field label="Contraseña"  :type="pass ? 'text' : 'password'" :append-icon="pass ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="pass = !pass" :rules="passwordRules" required v-model="password"></v-text-field>
                <v-text-field label="Repite contraseña" v-model="c_password" :type="pass ? 'text' : 'password'" required :rules="samePass"></v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-btn class="success" @click="insertar">Registrar</v-btn>
                <v-btn class="error" :to="{name:'Login'}">Salir</v-btn>
            </v-card-actions>
            </form>
        </v-card>
          <v-snackbar v-model="snackbar"> 
              Ha ocurrido un error, compruebe que el correo sea válido
                    <v-btn color="red" text @click="snackbar = false">Close</v-btn>
            </v-snackbar>


            <v-dialog v-model="dialog" width="350px">
                <v-card>
                    <v-card-title>Registro completado</v-card-title>
                    <v-card-subtitle>Desea realizar otro registro?</v-card-subtitle>
                    <v-card-actions>
                        <v-btn @click="dialog=false">Continuar</v-btn>
                        <v-btn :to="{name:'Login'}" class="error">Salir</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-dialog v-model="admin" width="350">
                <v-card>
                    <v-card-actions>Acceso a Administradores</v-card-actions>
                    <v-card-text>
                        <v-text-field  v-model="passAdmin" label="Introduzca la Constraseña" type="password" :rules="passwordRules"></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn @click="isAdmin" class="info">Aceptar</v-btn>
                        <v-btn class="error" :to="{name:'Login'}">Cancelar</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-snackbar v-model="errorAdmin"> 
              Contraseña no válida
                    <v-btn color="red" text @click="snackbar = false">Close</v-btn>
            </v-snackbar>

    </v-container>
</template>

<script>
export default {
    name:'Registro',
    computed: {
        snackbar(){
            return this.$store.getters.snackbar
        },
        admin(){
            return this.$store.getters.adminPass
        },
        errorAdmin() {
            return this.$store.getters.errorAdmin
        }
    },
    data() {
        return{

            name:'',
            email:'',
            password:'',
            c_password:'',
            passAdmin:'',
            nameRules: [
                v => !!v || ' El nombre es obligatorio',
                v => (v && v.length >= 3) || 'El nombre debe tener al menos 4 caracteres',
            ],
            emailRules: [
                v => !!v || ' el e-mail es obligatorio',
                v => /.+@.+\..+/.test(v) || 'E-mail no válido',
            ],
            passwordRules:[
                v => !!v || 'La constraseña es obligatoria',
                v => (v && v.length >= 8) || 'La contraseña debe tener al menos 8 caracteres'
            ],
            samePass:[
                v => !!v || 'La constraseña es obligatoria',
                v=> v===this.password || 'Las constraseñas no coinciden'
                
            ],
            dialog:false,
            pass:false,
        }
    },
    methods: {
        insertar() {

            var datos={
                name:this.name,
                email:this.email,
                password:this.password,
                c_password:this.c_password
            }
            this.$store.dispatch('registro', {datos:datos}) 
            
            this.name='',
            this.email='',
            this.password='',
            this.c_password='',
        
            this.dialog=true,
           
        },

        isAdmin(){
            this.$store.dispatch('administradores', this.passAdmin)
        }

    },

}
</script>
