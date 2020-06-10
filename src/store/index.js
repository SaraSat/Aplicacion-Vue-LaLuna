import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const PREFIX = 'http://127.0.0.1:8000';

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

     //Login --> petición ajax al login de un monitor registrado
    login(datos) {
        return new Promise((resolutionFunc, rejectionFunc) => {
            const instance = axios.create({
                baseURL: this.server,
                headers: { 'Authorization': 'Bearer ' + this.auth_token }
            });
            instance.post(this.server + '/api/login', {
                email: datos.email,
                password: datos.password
            }).then((res) => {
                this.auth_token = res.data.auth_token;
                this.___setCookie('lauth', this.auth_token, 1);
                resolutionFunc(res.data)
                console.log("ok")
            }).catch((res) => {
                rejectionFunc(res.data)
            });
        });
    }

    //Petición ajax para el cierre de sesión 
    cerrar_sesion() {
        this.___setCookie('lauth', '', -1)
    }

    //Petición ajax para el registro de un monitor nuevo. 
    register(datos) {
        return new Promise((resolutionFunc, rejectionFunc) => {
            axios.post(this.server + '/api/register', {
                name: datos.name,
                password: datos.password,
                c_password: datos.c_password,
                email: datos.email
            }).then((res) => {
                resolutionFunc()
            }).catch((res) => {
                rejectionFunc(res.data)
            });
        });

    }

    //Petición ajax para el envio de la password de administradores
    admin(pass) {
        return new Promise((resolutionFunc, rejectionFunc) => {
            axios.post(this.server + '/api/admins', {
                password: pass
            }).then((res) => {
                resolutionFunc()
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
            instance.get(this.server + '/api/inicios/', {

            }).then((res) => {
                resolutionFunc(res.data)
            }).catch((res) => {
                rejectionFunc(res.data)
            });
        });
    }

    update_inicio(id, datos) {
        console.log(id)
        return new Promise((resolutionFunc, rejectionFunc) => {
            const instance = axios.create({
                baseURL: this.server,
                //timeout: 1000,
                headers: { 'Authorization': 'Bearer ' + this.auth_token }
            });
            instance.put(this.server + '/api/inicios/' + id, {
                dia: datos.dia,
                fecha: datos.fecha,
                lugar: datos.lugar,
                hora: datos.hora,
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

    load_actividades(id_act) {
        return new Promise((resolutionFunc, rejectionFunc) => {
            const instance = axios.create({
                baseURL: this.server,
                //timeout: 1000,
                headers: { 'Authorization': 'Bearer ' + this.auth_token }
            });

            var id = id_act || ""

            instance.get(this.server + '/api/actividads/' + id, {

            }).then((res) => {
                resolutionFunc(res.data)
            }).catch((res) => {
                rejectionFunc(res.data)
            });
        });

    }
    update_actividades(id, datos) {
        return new Promise((resolutionFunc, rejectionFunc) => {
            const instance = axios.create({
                baseURL: this.server,
                //timeout: 1000,
                headers: { 'Authorization': 'Bearer ' + this.auth_token }
            });
            instance.put(this.server + '/api/actividads/' + id, {
                dia: datos.nombre,
                fecha: datos.fecha,
                desc: datos.desc,
            }).then((res) => {
                resolutionFunc(res.data)
            }).catch((res) => {
                rejectionFunc(res.data)
            });
        });

    }
    delete_actividad(id) {
        return new Promise((resolutionFunc, rejectionFunc) => {
            const instance = axios.create({
                baseURL: this.server,
                //timeout: 1000,
                headers: { 'Authorization': 'Bearer ' + this.auth_token }
            });
            instance.delete(this.server + '/api/actividads/' + id, {}).then((res) => {
                resolutionFunc(res.data)
            }).catch((res) => {
                rejectionFunc(res.data)
            });
        });

    }

    insert_actividad(datos) {
        return new Promise((resolutionFunc, rejectionFunc) => {
            const instance = axios.create({
                baseURL: this.server,
                //timeout: 1000,
                headers: { 'Authorization': 'Bearer ' + this.auth_token }
            });
            instance.post(this.server + '/api/actividads/', {
                nombre: datos.nombre,
                fecha: datos.fecha,
                desc: datos.desc
            }).then((res) => {
                resolutionFunc(res.data)
            }).catch((res) => {
                rejectionFunc(res.data)
            });
        });

    }

    //Peticiones ajax página evaluaciones:

    load_evaluaciones(id_eva) {
        return new Promise((resolutionFunc, rejectionFunc) => {
            const instance = axios.create({
                baseURL: this.server,
                //timeout: 1000,
                headers: { 'Authorization': 'Bearer ' + this.auth_token }
            });

            var id = id_eva || ""

            instance.get(this.server + '/api/evaluacions/' + id, {

            }).then((res) => {
                resolutionFunc(res.data)
            }).catch((res) => {
                rejectionFunc(res.data)
            });
        });

    }
    update_evaluaciones(id, datos) {
        return new Promise((resolutionFunc, rejectionFunc) => {
            const instance = axios.create({
                baseURL: this.server,
                //timeout: 1000,
                headers: { 'Authorization': 'Bearer ' + this.auth_token }
            });
            instance.put(this.server + '/api/evaluacions/' + id, {
                dia: datos.nombre,
                fecha: datos.fecha,
                desc: datos.desc,
                mejor: datos.mejor,
                peor: datos.peor,
                equipo: datos.equipo,
                recordar: datos.recordar
            }).then((res) => {
                resolutionFunc(res.data)
            }).catch((res) => {
                rejectionFunc(res.data)
            });
        });

    }
    delete_evaluacion(id) {
        return new Promise((resolutionFunc, rejectionFunc) => {
            const instance = axios.create({
                baseURL: this.server,
                //timeout: 1000,
                headers: { 'Authorization': 'Bearer ' + this.auth_token }
            });
            instance.delete(this.server + '/api/evaluacions/' + id, {}).then((res) => {
                resolutionFunc(res.data)
            }).catch((res) => {
                rejectionFunc(res.data)
            });
        });

    }

    insert_evaluacion(datos) {
        return new Promise((resolutionFunc, rejectionFunc) => {
            const instance = axios.create({
                baseURL: this.server,
                //timeout: 1000,
                headers: { 'Authorization': 'Bearer ' + this.auth_token }
            });
            instance.post(this.server + '/api/evaluacions/', {
                nombre: datos.nombre,
                fecha: datos.fecha,
                desc: datos.desc,
                mejor: datos.mejor,
                peor: datos.peor,
                equipo: datos.equipo,
                recordar: datos.recordar
            }).then((res) => {
                resolutionFunc(res.data)
            }).catch((res) => {
                rejectionFunc(res.data)
            });
        });

    }

    // peticiones ajax Luneros 
    load_luneros() {
        return new Promise((resolutionFunc, rejectionFunc) => {
            const instance = axios.create({
                baseURL: this.server,
                //timeout: 1000,
                headers: { 'Authorization': 'Bearer ' + this.auth_token }
            });
            instance.get(this.server + '/api/luneros/', {}).then((res) => {
                resolutionFunc(res.data)
            }).catch((res) => {
                rejectionFunc(res.data)
            });
        });

    }




}

const client = new L_client(PREFIX);

//Store:
export default new Vuex.Store({
    state: {
        proximaActividad: [], //item de pag inicio

        actividades: [], //items pag actividades 

        evaluaciones: [], // items pag evaluaciones

        login: false, //permite que ciertos botones sea visibles si te has logado

        luneros: [], //items pag luneros

        snackbar: false, //permite mostrar mensaje de error si se ha producido desde back

        adminPass: true, //Permite la entrada a registro de monitores si se ha introducido bien la pass de admin

        errorAdmin: false //Permite mostrar mensaje de error si se ha introducido mal la pass de admin
    },
    mutations: {
        //Setters
        setProximaActividad: function(state, proximaActividad) {
            state.proximaActividad = proximaActividad
        },
        setActividades(state, actividades) {
            state.actividades = actividades
        },
        setEvaluaciones(state, evaluaciones) {
            state.evaluaciones = evaluaciones
        },
        setLogin(state, login) {
            state.login = login
        },
        setLuneros(state, luneros) {
            state.luneros = luneros
        },
        setSnackbar(state, snackbar) {
            state.snackbar = snackbar
        },
        setAdminPass(state, admin) {
            state.adminPass = admin
        },
        setErrorAdmin(state, errorAdmin) {
            state.errorAdmin = errorAdmin
        }

    },
    actions: {

        //Página inicio 
        loadInicio(context) {
            client.load_inicio().then((data) => {
                context.commit('setProximaActividad', data)

            }).catch((data) => {
                console.log(data)
            })
        },
        updateInicio(context, { datos, id }) {
            client.update_inicio(id, datos).then((data) => {
                client.load_inicio().then((data) => {
                    context.commit('setProximaActividad', data)
                })

            }).catch((data) => {
                console.log(data)
            })
        },

        //Página actividades
        loadActividades(context) {
            client.load_actividades().then((data) => {
                context.commit('setActividades', data)
                console.log(data)
            }).catch((data) => {
                console.log(data)
            })
        },
        updateActividades(context, { id, datos }) {
            console.log(datos)
            client.update_actividades(id, datos).then((data) => {
                client.load_actividades().then((data) => {
                    context.commit('setActividades', data)
                })
            }).catch((data) => {
                console.log(data)
            })
        },
        deleteActividad(context, id) {
            client.delete_actividad(id).then((data) => {
                client.load_actividades().then((data) => {
                    context.commit('setActividades', data)
                })
            }).catch((data) => {
                console.log(data)
            })
        },
        insertActividad(context, { datos }) {
            client.insert_actividad(datos).then((data) => {
                client.load_actividades().then((data) => {
                    context.commit('setActividades', data)
                })
            }).catch((data) => {
                console.log(data)
            })
        },

        //Página evaluaciones
        loadEvaluaciones(context) {
            client.load_evaluaciones().then((data) => {
                context.commit('setEvaluaciones', data)
            }).catch((data) => {
                console.log(data)
            })
        },
        updateEvaluaciones(context, { id, datos }) {
            console.log(datos)
            client.update_evaluaciones(id, datos).then((data) => {
                client.load_evaluaciones().then((data) => {
                    context.commit('setEvaluaciones', data)
                })
            }).catch((data) => {
                console.log(data)
            })
        },
        deleteEvaluacion(context, id) {
            client.delete_evaluacion(id).then((data) => {
                client.load_evaluaciones().then((data) => {
                    context.commit('setEvaluaciones', data)
                })
            }).catch((data) => {
                console.log(data)
            })
        },
        insertEvaluacion(context, { datos }) {
            client.insert_evaluacion(datos).then((data) => {
                client.load_evaluaciones().then((data) => {
                    context.commit('setEvaluaciones', data)
                })
            }).catch((data) => {
                console.log(data)
            })
        },

        //Pagina registro: 
        registro(context, { datos }) {
            client.register(datos).then((data) => {
                console.log("Registro realizado")
            }).catch((data) => {
                context.commit('setSnackbar', true)
                console.log(context.getters.snackbar)
            })
        },

        //login;
        login(context, { datos }) {
            client.login(datos).then((data) => {
                context.commit('setLogin', true)
            }).catch((data) => {
                context.commit('setSnackbar', true)
                console.log(context.getters.snackbar)
            })
        },

        // cierre de sesión
        cerrarSesion(context) {
            context.commit('setLogin', false)
        },

        //comprobacion pass de admin (pag de registro)
        administradores(context, pass) {
            client.admin(pass).then((data) => {
                context.commit('setAdminPass', false)
            }).catch((data) => {
                context.commit('setErrorAdmin', true)
                console.log(data)
            })
        },

        //pagina luneros
        loadLuneros(context) {
            client.load_luneros().then((data) => {
                context.commit('setLuneros', data)
            }).catch((data) => {
                console.log(data)
            })
        }



    },
    getters: {
        proximaActividad(state) {
            return state.proximaActividad
        },
        actividades(state) {
            return state.actividades
        },
        evaluaciones(state) {
            return state.evaluaciones
        },
        login(state) {
            return state.login
        },
        luneros(state) {
            return state.luneros
        },
        snackbar(state) {
            return state.snackbar
        },
        adminPass(state) {
            return state.adminPass
        }, 
        errorAdmin(state){
            return state.errorAdmin
        }
    },
    modules: {}
})