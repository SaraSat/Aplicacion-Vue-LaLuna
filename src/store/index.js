import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const PREFIX = 'http://127.0.0.1:5000';

const axios = require('axios').default;

class L_client {
  constructor(server) {
    this.server = server;
    this.auth_token = this.___getCookie('lauth') || null;
  }

  //Creación de la cookie
  ___setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
  }

  ___getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
      x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
      y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
      x = x.replace(/^\s+|\s+$/g, "");
      if (x == c_name) {
        return unescape(y);
      }
    }
  }
  //Login --> petición ajax al login
  connect(user, password) {
    return new Promise((resolutionFunc, rejectionFunc) => {
      axios.post(this.server + '/api/v1/auth', {
        username: user,
        password: password
      }).then((res) => {
        this.auth_token = res.data.auth_token;
        this.___setCookie('lauth', this.auth_token, 1);
        resolutionFunc()
      }).catch((res) => {
        rejectionFunc()
      });
    });
  }

  //Validación de la sesión 
  validateSession() {
    return new Promise((resolutionFunc, rejectionFunc) => {
      if (!this.auth_token) {
        rejectionFunc(null);
        return;
      }
      const instance = axios.create({
        baseURL: this.server,
        //timeout: 1000,
        headers: { 'Authorization': 'Bearer ' + this.auth_token }
      });

      instance.get(this.server + '/api/v1/auth/', {

      }).then((res) => {
        resolutionFunc(res.data)
      }).catch((res) => {
        rejectionFunc(res.data)
      });
    });
  }

  //Peticiones ajax página de inicio: 

  load_inicio() {
    return new Promise((resolutionFunc, rejectionFunc) => {
      const instance = axios.create({
        baseURL: this.server,
        //timeout: 1000,
        headers: { 'Authorization': 'Bearer ' + this.auth_token }
      });
      instance.get(this.server + '/api/actividadInicio', {

      }).then((res) => {
        resolutionFunc(res.data)
        console.log(data)
      }).catch((res) => {
        rejectionFunc(res.data)
      });
    });
  }

  update_inicio(datos) {
    return new Promise((resolutionFunc, rejectionFunc) => {
      const instance = axios.create({
        baseURL: this.server,
        //timeout: 1000,
        headers: { 'Authorization': 'Bearer ' + this.auth_token }
      });
      instance.put(this.server + '/api/actividadInicio/'+1, {
        dia: datos.dia,
        fecha: datos.fecha,
        lugar: datos.lugar,
        hora:datos.hora,
        desc: datos.desc,
        precio: datos.precio,
        horaFin: datos.horaFin,
        lugarFin: datos.lugarFin
      }).then((res) => {
        resolutionFunc(res.data)
      }).catch((res) => {
        rejectionFunc(res.data)
      });
    });

  }

  //Peticiones ajax página actividades: 

  load_actividades() {
    return new Promise((resolutionFunc, rejectionFunc) => {
      const instance = axios.create({
        baseURL: this.server,
        //timeout: 1000,
        headers: { 'Authorization': 'Bearer ' + this.auth_token }
      });
      instance.get(this.server + '/api/v1/project/' + {

      }).then((res) => {
        resolutionFunc(res.data)
        console.log(data)
      }).catch((res) => {
        rejectionFunc(res.data)
      });
    });

  }

}

const client = new L_client(PREFIX);


export default new Vuex.Store({
  state: {
    proximaActividad: [],
  },
  mutations: {
    setProximaActividad: function (state, proximaActividad) {
      state.proximaActividad = proximaActividad
    }
  },
  actions: {
    loadInicio(context){
      client.load_inicio().then((data)=>{
        context.commit('setProximaActividad', data)
      }).catch((data)=>{
        console.log(data)
      })
    }
  },
  getters: {
    proximaActividad(state) {
      return state.proximaActividad
    }
  },
  modules: {
  }
})
