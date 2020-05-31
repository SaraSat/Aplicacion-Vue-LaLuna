<template>

  <!--Vista de las actividades programadas-->
  <v-container>
    <h1>Actividades previstas</h1>

      <!--Tarjeta de actividad, se genera un for para recorrer el objeto que contenga las diferentes actividades programadas
      y asi mostrar los datos de cada una con la misma estructura
      Se importa el componente FormularioActividad para agregar o editar
      Se importa la constante variables de Formulario actividad para poder acceder a gettes y setters de los datos-->
    <v-content>
      
      <!--Dialog para poder insertar una nueva tarjeta actividad -->
          <v-btn class="d-flex flex-column ml-12" @click="dialog=true" small="">
            <v-icon color ="green darken-2" x-large >mdi-pencil</v-icon>
            <span>Insertar</span>
          </v-btn>
      <v-dialog v-model="dialog"  persistent max-width="600px">
        <v-card dark>
          <v-card-title>
              <v-text-field label="Introduce el nombre de la actividad" v-model="nombre"></v-text-field>
          </v-card-title>
          <v-card-subtitle>
              Fin de Semana previsto:
              <v-text-field label="introduce el dia" v-model="fecha"></v-text-field>
          </v-card-subtitle>
          <v-card-text>
              <v-text-field label="introduce una breve descripción" v-model="desc"></v-text-field>
          </v-card-text>
          <v-card-actions>
              <v-btn class="success" @click="insertar">Aceptar</v-btn>
              <v-btn class="error" @click="dialog=false">Cancelar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!--Tarjetas de actividad-->
      <v-layout wrap>
          <v-flex v-for="(item,index) in items" :key="index" mb-1>
            <v-card dark xs12 md6>
              <v-card-title><h4 >{{item.nombre}}</h4>
              </v-card-title>
              <v-card-subtitle><h6 >Fin de semana previsto: {{item.fecha}}</h6>
              </v-card-subtitle>
              <v-card-text >{{item.desc}}</v-card-text>
              <v-card-actions>
              <v-btn class="success" @click="preEdit(item.id)"  >Editar</v-btn>
              <v-btn class="error" @click="eliminar(item.id)" >Eliminar</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

          <!--Dialog para poder editar cada tarjeta por separado-->
              <v-dialog v-model="dialog2" persistent max-width="600px">
                <v-card dark xs12 md6>
                  <v-card-title>
                  <h4><v-text-field v-model="nombre"></v-text-field></h4>
                  </v-card-title>
                  <v-card-subtitle>
                  <h6><v-text-field label="Fin de semana previsto: " v-model="fecha"></v-text-field></h6>
                  </v-card-subtitle>
                  <v-card-text><v-text-field v-model="desc"></v-text-field></v-card-text>
                  <v-card-actions>
                      <v-btn class="success" @click="edit(id)"  >Editar</v-btn>
                      <v-btn class="error" @click="dialog2=false" >Cancelar</v-btn>
                  </v-card-actions>
            </v-card>
            </v-dialog>

      </v-layout>
    </v-content>
  </v-container>
</template>
<script>

export default {
  name: "Actividades",
  components: {
  },
  computed:{
    items() {
      return this.$store.getters.actividades
    },

  },
    mounted() {
      this.$store.dispatch('loadActividades')
  },
  data() {
    return {
      dialog2: false, //-->method editar

      nombre:'',
      fecha:'',
      desc:'',
      id:'',
      dialog:false
    };
  },
  methods: {
    preEdit(id) {
      this.items.forEach(element => {
        if(element.id == id){
          this.nombre=element.nombre
          this.fecha=element.fecha,
          this.desc=element.desc
          this.id=element.id
        }
      });
      this.dialog2=true

    },
    edit(id){
      var datos={}
      this.items.forEach(element => {
        if(element.id == id){
          datos={
            nombre:this.nombre,
            fecha:this.fecha,
            desc:this.desc
          }
          
        }
      });
      this.$store.dispatch('updateActividades', {id:id, datos:datos})
      this.nombre='',
      this.fecha='',
      this.desc='',
      this.id=''
      this.dialog2=false
    },
    eliminar(id) {

      this.$store.dispatch('deleteActividad', id)
    },
    insertar() {
      var datos={
        nombre:this.nombre,
        fecha:this.fecha,
        desc:this.desc
      }
      this.$store.dispatch('insertActividad', {datos:datos})
      this.dialog=false

    }
  }

};
</script>

<style>
  h1 {
    color: azure;
  }
</style>

