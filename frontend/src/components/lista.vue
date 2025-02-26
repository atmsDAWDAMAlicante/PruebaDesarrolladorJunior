<script>
import eventBus from '../eventBus';
import { watch } from 'vue';

export default{
    name: "componenteLista",
    components:{
    },

    data(){
        return {
            listaResultado: "", // Recoge el html con los radio buttons
            elemento: "",
            tareaEnviar: "",
            listaTareas:[]
        }
    },

    mounted(){
        eventBus.actualizarTareas()
            // Objetivo inicial: recoger el html con la lista de tareas del archivo JSON 

            // 1º) INTENTO:
            // Llegado a este punto solicito ayuda de la IA para poder utilizar la API fetch
            // para llamar al JSON local mediante Apache para listar las tareas y efectuar
            // las operaciones CRUD
            // El resultado de la ayuda de la IA es el archivo .htaccess y su contenido
            // que se encuentra en el directorio raiz del proyecto
            /*fetch('http://localhost/PruebaDesarrolladorJunior/data/tareas.json')
            .then((response)=>response.json())
            .then((data)=>{
                console.log(data)
                for (let elem of data){
                    this.pruebaLista+=elem.id
                    this.listaResultado += `<input type='radio' name='numeros' name=''/>${elem.descripcion}<br />`
                }
            })*/
        


            // 2º INTENTO: Intento fallido de comunicar con eventBus
            /* 
            eventBus.actualizarTareas();
                this.listaResultado = eventBus.listaDeTareas;
                console.log("MOUNTED")
                console.log(this.listaResultado)
                */



            // 3º INTENTO: regreso a la idea sencilla del principo
            // el principal problema de esta idea es que no se puede 
            // añadir con v-html el evento @click a los radiobutton

        fetch('http://localhost/PruebaDesarrolladorJunior/data/tareas.json')
        .then((response)=>response.json())
        .then((data)=>{
            let resultado = "";
            this.listaTareas = data;
            for (let elem of data){
                resultado += `<input type='radio' name='numeros' @click='eventBus.seleccionarTarea' value='d'/>${elem.descripcion}<br />`
            }
            this.listaResultado = resultado;
            //return this.listaDeTareas;
        }).catch((error)=>console.log("Hay un error"));
    



    },
    watch: { // Intento infructuoso de prueba para escuchar los eventos de otros componentes
        // En particular, tendría por objeto escuchar el evento click de los botones para actualizar
        // la lista. Sin perjuicio de esta intención inicial, el código tiene por objeto
        // concretamente el probar watch actualizando la lista de tareas con el DOM renderizado
            'eventBus.tareas': function() {
            this.$nextTick(() => {
                console.log(this.listaResultado)
                this.listaResultado = eventBus.actualizarTareas();
                console.log("2\n"+this.listaResultado)
            });
        }
    }
    
}
</script>




<template>
    <!-- abandono la idea de utilizar la directiva v-hmtl porque no permite añadir el evento @click a los radiobutton -->
    <!--<div v-html="listaResultado"></div>-->
    <div>
        <!-- He acudido a los radiobuttons como solución rápida y sencilla que evitara -->
        <!-- que el usuario pudiera seleccionar más de una tarea por vez -->
        <!-- el problema de este código ha estado en que no se reconoce ni se comunica -->
        <!-- correctamente el componente con eventBus -->

        <!-- la idea era pasar el id del elemento seleccionado y mostrarlo en el cuadro de texto -->
        <!-- para editarlo o borrarlo -->
        <label v-for="tarea of listaTareas" :key="tarea.id">
      <input 
        type="radio" 
        name="numeros" 
        :value="tarea.id" 
        @click="eventBus.metodoPrueba" />
      {{ tarea.descripcion }}<br>
      </label>
  </div>
</template>

<style scoped>
    div{background-color: rgb(234, 248, 224);border:1px solid #339900;}
</style>
