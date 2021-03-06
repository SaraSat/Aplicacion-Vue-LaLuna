# Aplicacion La Luna Alcobendas 
Esta obra está bajo una <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">
          licencia de Creative Commons Reconocimiento-NoComercial 4.0 Internacional</a>.
<a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">
  <img alt="Licencia de Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png"/>
</a> 

La Luna Alcobendas es una asociación de ocio y tiempo libre para personas con discapacidad. Cada fin de semana hay una actividad en la que bien podemos ir a tomar algo o a un partido de rugby.

Esta aplicación surge de la necesidad de mantener a nuestros chavales siempre informados de las próximas actividades, y a su vez de ofrecer a los monitores, una plataforma donde poder gestionar dichas actividades, tener información sobre los usarios, 
y poder gestionar las evaluaciones que hacemos de cada actividad. 

A continuación se muestra el prototipado de la aplicación,cómo instalar y arrancar. 

Aplicación realizada con Vue.js, Vuetify como material design y Laravel de lado servidor. 

Backend: https://github.com/SaraSat/Api_LaLuna 

## Project setup
```
npm install vue cli (local)
vue add vuetify
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
# Aplicacion-Vue-LaLuna


# Prototipado: 

## Página de inicio: 

En las siguientes imágenes se puede ver cómo es la página de inicio. Sencillamente se informa de la actividad más próxima, 
incluyendo un mapa para, así, ver mejor el lugar de quedada y recogida de la actividad.
Esta información la podrán modificar los monitores logueados como se podrá ver más adelante.
<br>
Imagenes: 

![ImagenInicio](https://github.com/SaraSat/Aplicacion-Vue-LaLuna/blob/master/ImagesReadme/inicio1.PNG "PaginaInicio")

![ImagenInicioCompleto](https://github.com/SaraSat/Aplicacion-Vue-LaLuna/blob/master/ImagesReadme/inicioCompleto.PNG "PaginaInicio")

[Código_Vista_Home](https://github.com/SaraSat/Aplicacion-Vue-LaLuna/blob/master/src/views/Home.vue)<br>



## Página Actividades: 
Donde se podrán visualizar las actividades previstas para ese mes o trimestre. Al igual que en la página de inicio, ésta, la podrán gestionar también los monitores con login.
<br>
Imagen: 

![ImagenActividades](https://github.com/SaraSat/Aplicacion-Vue-LaLuna/blob/master/ImagesReadme/actividades.PNG "PaginaActividades")

[Código_Vista_Actividades](https://github.com/SaraSat/Aplicacion-Vue-LaLuna/blob/master/src/views/Actividades.vue)


## Quiénes somos?:

En esta página podemos encontrar una galería de imágenes de las actividades que vamos realizando y una pequeña descripción de lo que somos y lo que hacemos. 
Imagenes: 

![GaleriaFotos](https://github.com/SaraSat/Aplicacion-Vue-LaLuna/blob/master/ImagesReadme/Galeria.PNG "PaginaInicio")

![QuienesSomos](https://github.com/SaraSat/Aplicacion-Vue-LaLuna/blob/master/ImagesReadme/quienesSomos.PNG "PaginaInicio")

[Código_Vista_About](https://github.com/SaraSat/Aplicacion-Vue-LaLuna/blob/master/src/views/About.vue)


## Contacto: 
Página dónde encontraremos los enlaces a nuestros correos electrónicos, facebook, instagram y teléfono. Ademas de un mapa de nuestra ubicación.

## Monitores: 

Los monitores registrados tienen diversas funcionalidades. Una vez logados podrán modificar la página de inicio y actividades, crear una aviso, gestionar la lista de información de los chavales de la Luna y creación y gestión de las evaluaciones de las actividades que vamos realizando. 
Además, todos los formularios creados para la gestión de datos tienen validación del lado servidor, por lo que se nos avisará cuando falten datos o estos estén mal introducidos. 

Los monitores que sean administradores podrán registrar a otros monitores


## Acceso a Monitores: 
Una vez logados los monitores podrán acceder a la tabla de teléfonos de los luneros, a gestionar las evaluaciones y, aquellos administradores, podrán registrar a otros monitores: 

Imagenes: 

![Login](https://github.com/SaraSat/Aplicacion-Vue-LaLuna/blob/master/ImagesReadme/acceso.PNG "Login")

![LoginFallido](https://github.com/SaraSat/Aplicacion-Vue-LaLuna/blob/master/ImagesReadme/emailNoValido.PNG "Login")

[Código_Vista_Login](https://github.com/SaraSat/Aplicacion-Vue-LaLuna/blob/master/src/views/Login.vue)


Una vez logado:

Imagenes: 

![AccesoMonitores](https://github.com/SaraSat/Aplicacion-Vue-LaLuna/blob/master/ImagesReadme/funcionalidades.PNG "PagMonitores")

[Código_Componente_Logado](https://github.com/SaraSat/Aplicacion-Vue-LaLuna/blob/master/src/components/Logado.vue)


### Tabla Luneros: 

El listado consiste en una dataTable en la que podemos buscar por nombre, apellidos... se puede ordenar por orden alfabético, y elegir el número de filas que ver por página de la tabla. 
Además se pueden añadir nuevos chavales o eliminarlos. 

Imagenes: 

![TablaLuneros](https://github.com/SaraSat/Aplicacion-Vue-LaLuna/blob/master/ImagesReadme/tablaChavales.PNG "PaginaLuneros")

![AñadirLunero](https://github.com/SaraSat/Aplicacion-Vue-LaLuna/blob/master/ImagesReadme/quienesSomos.PNG "PáginaLuneros")

[Código_Componente_Luneros](https://github.com/SaraSat/Aplicacion-Vue-LaLuna/blob/master/src/components/Luneros.vue)


### Evaluaciones: 
Se podrán añadir, eliminar o editar las existentes. Consiste en un formulario sencillo a rellenar: 

Imagenes: 

![Evaluaciones](https://github.com/SaraSat/Aplicacion-Vue-LaLuna/blob/master/ImagesReadme/Evaluaciones.PNG "PagEvaluaciones")

[Código_Componente_Evaluaciones](https://github.com/SaraSat/Aplicacion-Vue-LaLuna/blob/master/src/components/Evaluaciones.vue)


### Registro: 
Únicamente para aquellos con contraseña de Administradores: 
Imagenes: 

![Registro](https://github.com/SaraSat/Aplicacion-Vue-LaLuna/blob/master/ImagesReadme/registro.PNG "PagRegistro")

[Código_Componente_Registro](https://github.com/SaraSat/Aplicacion-Vue-LaLuna/blob/master/src/components/Registro.vue)



## Página de Inicio y página Actividades: 
Además de estas funcionalidades, la página de inicio y la de actividades cambian para que los monitores la puedan modificar. 
De tal modo que en la página de inicio se pueden crear avisos o modificar la actividad principal y, en la página de actividades se podrá 
editar, eliminar y añadir nuevas actividades: 

Imagenes: 
![PaginaInicioEdicion](https://github.com/SaraSat/Aplicacion-Vue-LaLuna/blob/master/ImagesReadme/edicioPagInicio.PNG "PaginaInicio")

![ActividadPrincipal](https://github.com/SaraSat/Aplicacion-Vue-LaLuna/blob/master/ImagesReadme/edicionActividadPrincipal.PNG "PáginaInicio")

![ActividadPrincipalError](https://github.com/SaraSat/Aplicacion-Vue-LaLuna/blob/master/ImagesReadme/manejoErroresInicio.PNG "PáginaInicio")

![MapaDinámico](https://github.com/SaraSat/Aplicacion-Vue-LaLuna/blob/master/ImagesReadme/mapaDinámico.PNG "PáginaInicio")

![PaginaActividades](https://github.com/SaraSat/Aplicacion-Vue-LaLuna/blob/master/ImagesReadme/EdicionActividades.PNG "PáginaActividades")




