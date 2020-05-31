<template>
    <v-content>
        <v-card dark>
            <v-card-title>Registrar un nuevo monitor</v-card-title>
            <v-card-text>
                <v-text-field label="Nombre" v-model="datos.nombre"></v-text-field>
                <v-text-field label="Apellidos" v-model="datos.apellidos"></v-text-field>
                <v-text-field label="Telefono" v-model="datos.telefono"></v-text-field>
                <v-text-field label="Correo" v-model="datos.email"></v-text-field>
                <v-text-field label="Contaseña" v-model="datos.contraseña"></v-text-field>
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
                nombre:'',
                apellidos:'',
                telefono:'',
                email:'',
                contraseña:'',
                coment:''
            }
        }
    },
    methods: {
        insertar() {
            this.$store.dispatch('insertMonitor', {datos:this.datos})
            this.datos={
                nombre:'',
                apellidos:'',
                telefono:'',
                email:'',
                contraseña:'',
                coment:''

            }
        }
    }
}
</script>
