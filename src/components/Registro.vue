<template>
    <v-content>
        <v-card dark>
            <v-card-title>Registrar un nuevo monitor</v-card-title>
            <v-card-text>
                <v-text-field label="Nombre" v-model="datos.name"></v-text-field>
                <v-text-field label="Apellidos" v-model="datos.apellidos"></v-text-field>
                <v-text-field label="Telefono" v-model="datos.telefono"></v-text-field>
                <v-text-field label="Correo" v-model="datos.email"></v-text-field>
                <v-text-field label="Contaseña" v-model="datos.password"></v-text-field>
                <v-text-field label="Repite contraseña" v-model="datos.c_password"></v-text-field>
                <v-text-field label="Comentarios" v-model="datos.coment"></v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-btn class="success" @click="insertar">Registrar</v-btn>
            </v-card-actions>
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
            }
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
