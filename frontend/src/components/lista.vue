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
            // Recoge el html con la lista de tareas del archivo JSON 
           /* eventBus.actualizarTareas();
            this.listaResultado = eventBus.listaDeTareas;
            console.log("MOUNTED")
            console.log(this.listaResultado)*/
        
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
        
        
        //console.log("2Actualizar tareas");
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
    watch: {
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
    <!--<div v-html="listaResultado"></div>-->
    <div>
        <label v-for="tarea of listaTareas" :key="tarea.id">
      <input 
        type="radio" 
        name="numeros" 
        :value="tarea.id" 
        @click="eventBus.metodoPrueba" 
      />
      {{ tarea.descripcion }}<br>
      </label>
  </div>
</template>

<style scoped>
    div{background-color: rgb(234, 248, 224);border:1px solid #339900;}
</style>
