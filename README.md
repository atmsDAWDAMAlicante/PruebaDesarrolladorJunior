## PruebaDesarrolladorJunior
### Prueba para desarrollador Junior para el módulo de prácticas de DAW en el curso 2024-2025.

## PASOS PARA LA EJECUCIÓN DEL PROYECTO:
A) Requisitos previos para la ejecución:
- XAMPP para el servidor Apache
- Node.js y npm

B) Servidor Apache
- Clonar el repositorio en el directorio /htdocs en el caso que se esté ejecutando XAMPP
- Arrancar el servidor Apache.
- Comprobar se puede acceder al archivo:
http://localhost/PruebaDesarrolladorJunior/data/tareas.json

C) Para la ejecución del proyecto de Vue
- npm install // para instalar las dependencias de Vue
- cd frontend // entrar en este directorio
- npm run dev // para ejecutar el proyecto

## EXPLICACIÓN detallada del ejercicio:

El proyecto/ejercicio fue entregado a las 17:00 horas (hora española).
Duración: 24 horas.
Entrega: 14:00 horas (hora española).

1º El proyecto (hasta donde he llegado) ha sido desarrollado con Vue 3.

2º Alternativas en cuanto al backend: dado que no tengo conocimientos de Laravel y que, de PHP, mis conocimientos se ciñen a su uso introduciendo direcctamente html y JavaScript desde el propio documento PHP, careciendo de los conocimientos para su uso relacionado con la tecnología Vue, he descartado su uso buscando una alternativa que se ajustara a los requerimientos del ejercicio propuesto.

3º La alternativa ideada consistía en crear la aplicación frontend con Vue 3 y que, las funciones CRUD de tareas del usuario se almacenaran en un archivo JSON, mediante peticiones al servidor Get, Delete, Put y Post.

4º Para llevar a cabo las operaciones he utilizado el servidor Apache.

5º Dado que se producen ciertas restricciones en cuanto al uso de fetch y un JSON en local, en este primer punto he solicitado auxilio a la IA quien me ha facilitado el contenido del archivo .htaccess, el cual se encuentra en el directorio principal del repositorio.

6º Diseñado un mockup sencillo, he procedido a crear los componentes correspondientes, realizando un par de alteraciones, fundamentalmente establecer el pie de página con la información metereológica.

7º He comenzado la programación de los componentes estableciendo las conexiones adecuadas y su contenido mínimo para verificar que todo estaba en orden.

8º Los dos primeros componentes han sido los que requerían consumo de API. El que se encuentra en el encabezamiento del texto no ha permitido mostrar las citas/autores, si bien la URL parece funcionar correctamente. El que muestra la información metereológica sí funciona correctamente y se muestra en el pie de página.

9º A fin de centrarme en las operaciones indicadas en el ejercicio, evitando emplear excesivo tiempo en validaciones, he optado por formar una lista de radiobuttons con cada tarea (mostrando su descripción), de forma que, al seleccionar un usuario una de las tareas se excluye el resto.

10º El siguiente paso sería que, la tarea seleccionada apareciera en otro componente para su eventual edicion. Es en este punto donde he llegado a una vía muerta con la comunicación con entre los componentes y el archivo eventBus.js. Los métodos el archivo eventBus no llegan a ser reconocidos en los componentes. 

11º En este apartado he vuelto a consultar a la IA llegando a la conclusión que hay una discrepancia en el uso de versiones de Vue.

12º Estando próxima la hora de vencimiento para la finalización del ejercicio, procedo a entregarlo dado que carece de objeto ahondar careciendo de conocimientos.

Atentamente, muchas gracias.
