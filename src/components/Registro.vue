<template>
    <v-container>
        <v-card dark>
            <form lazy-validation>
            <v-card-title>Registrar un nuevo monitor</v-card-title>
            <v-card-text >
                <v-text-field label="Nombre" v-model="datos.name" required :rules="nameRules"></v-text-field>
                <v-text-field label="Apellidos" v-model="datos.apellidos"></v-text-field>
                <v-text-field label="Telefono" v-model="datos.telefono"></v-text-field>
                <v-text-field label="Correo" v-model="datos.email" required :rules="emailRules"></v-text-field>
                <v-text-field label="Contaseña" v-model="datos.password" :type="type" required :rules="passwordRules">
                </v-text-field>
                <v-text-field label="Repite contraseña" v-model="datos.c_password" type="password" required :rules="samePass"></v-text-field>
                <v-text-field label="Comentarios" v-model="datos.coment"></v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-btn class="success" @click="insertar">Registrar</v-btn>
            </v-card-actions>
            </form>
        </v-card>
          <v-snackbar
            v-model="snackbar"
            :multi-line="multiLine"> Ha ocurrido un error, compruebe que el correo sea válido
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
        }
    },
    data() {
        return{
            datos:{
                name:'',
                apellidos:'',
                telefono:'',
                email:'',
                password:'',
                c_password:'',
                coment:''
            },
            type:'password',
            nameRules: [
                v => !!v || ' El nombre es obligatorio',
                v => (v && v.length <= 4) || 'El nombre debe tener al menos 4 caracteres',
            ],
            emailRules: [
                v => !!v || ' el e-mail es obligatorio',
                v => /.+@.+\..+/.test(v) || 'E-mail no válido',
            ],
            passwordRules:[
                v => !!v || 'La constraseña es obligatoria',
                v => (v && v.length <= 8) || 'La contraseña debe tener al menos 8 caracteres'
            ],
            samePass:[
                v => !!v || 'La constraseña es obligatoria',
                v=> v===this.datos.password || 'Las constraseñas no coinciden'
                
            ],

        }
    },
    methods: {
        insertar() {

            this.$store.dispatch('registro', {datos:this.datos}) 
            
            this.datos={
            name:'',
            apellidos:'',
            telefono:'',
            email:'',
            password:'',
            c_password:'',
            coment:''

            }
           
        },

    }
}
</script>
