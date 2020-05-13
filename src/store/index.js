import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    proximaActividad: [
      {
        dia: "Sábado",
        fecha: "02/05/2020",
        hora: "17:00",
        lugar: "Casa de las asociaciones",
        descripcion:
          "Paseo por el Arroyo la Vega, merienda y juegos al aire libre",
        precio: "2",
        horaFin: "20:00",
        lugarFin: "Casa de las asociaciones"
      }

    ],
  },
  mutations: {
    setProximaActividad: function(state, proximaActividad) {
      state.proximaActividad=proximaActividad
    }
  },
  actions: {
    proximaActividad: function(dia, fecha, hora, lugar, descripcion, precio, horaFin, lugarFin){
      data=[]
      data.push(
        dia,
        fecha,
        hora,
        lugar,
        descripcion,
        precio,
        horaFin,
        lugarFin
      )
      setProximaActividad(data)
    }
  },
  getters:{
    proximaActividad(state){
      return state.proximaActividad
    }
  },
  modules: {
  }
})
