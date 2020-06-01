<template>
    <v-content>
        <v-card dark>
            <form lazy-validation>
            <v-card-title>Registrar un nuevo monitor</v-card-title>
            <v-card-text >
                <v-text-field label="Nombre" v-model="datos.name" required :rules="nameRules"></v-text-field>
                <v-text-field label="Apellidos" v-model="datos.apellidos"></v-text-field>
                <v-text-field label="Telefono" v-model="datos.telefono"></v-text-field>
                <v-text-field label="Correo" v-model="datos.email" required :rules="emailRules"></v-text-field>
                <v-text-field label="Contaseña" v-model="datos.password" type="password" required :rules="passwordRules"></v-text-field>
                <v-text-field label="Repite contraseña" v-model="datos.c_password" type="password" required></v-text-field>
                <v-text-field label="Comentarios" v-model="datos.coment"></v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-btn class="success" @click="insertar">Registrar</v-btn>
            </v-card-actions>
            </form>
        </v-card>
    </v-content>
</template>

<script>
export default {
    name:'Registro',
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
            ]
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
        }
    }
}
</script>
