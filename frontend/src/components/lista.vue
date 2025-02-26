<script>
import eventBus from '../eventBus';
import { watch } from 'vue';
export default{
    name: "componenteLista",
    components:{

    },
    data(){
        return {
            listaResultado: "",
            elemento: "",
            tareaEnviar: ""
        }
    },
    mounted(){
            // Llegado a este punto solicito ayuda de la IA para poder utilizar la API fetch
            // para llamar al JSON local mediante Apache para listar las tareas y efectuar
            // las operaciones CRUD
            // El resultado de la ayuda de la IA es el archivo .htaccess y su contenido
            // que se encuentra en el directorio raiz del proyecto
            fetch('http://localhost/PruebaDesarrolladorJunior/data/tareas.json')
            .then((response)=>response.json())
            .then((data)=>{
                console.log(data)
                for (let elem of data){
                    this.pruebaLista+=elem.id
                    this.listaResultado += `<input type='radio' name='numeros' name=''/>${elem.descripcion}<br />`
                }
            })
        
    }
    
}
</script>

<template>
    <div v-html="listaResultado"></div>

</template>

<style scoped>
    div{background-color: rgb(234, 248, 224);border:1px solid #339900;}
</style>
