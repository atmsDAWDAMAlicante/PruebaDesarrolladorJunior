<script>
import eventBus from '../eventBus';
export default{
    name: "componenteBotones",
    components:{

    },
    data(){
        return {
            pruebaBotones: "componenteBotones"
        }
    },
    methods:{
            limpiarConsola(){ // ¡¡IMPRESCINDIBLE!!
                console.clear();
            },
            refrescarLista(){ // Por el momento es un método de prueba para eventBus.js
                eventBus.actualizarTareas();
        }
    }
    
}
</script>

<template>
    <div>
        <button class="btn btn-primary"> Nueva</button>
        <button class="btn btn-primary"> Borrar</button>
        <button class="btn btn-primary" @click="refrescarLista"> Editar</button>
        <button class="btn btn-primary" @click="limpiarConsola"> #</button>
    </div>
</template>

<style scoped>
    div{
        background-color: rgb(221, 249, 249);
        border:1px solid blue;
        margin-bottom: 10px;
        }
    button{margin-left:5px;}
</style>
