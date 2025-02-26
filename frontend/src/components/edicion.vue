<script>
export default{
    name: "componenteEdicion",
    components:{

    },
    data(){
        return {
            pruebaEdicion: "componenteEdicion"
        }
    },
    methods:{
        prueba(){
            return this.pruebaEdicion
        }
    }
    
}
</script>

<template>
    <div>
        Tarea:
        <input type="text">
    </div>
</template>

<style scoped>
    div{
        background-color: rgb(221, 249, 249);
        border:1px solid blue;
        padding: 20px 10px;
        }
</style>
