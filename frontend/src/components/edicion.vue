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
        {{ pruebaEdicion }}
        <input type="text">
    </div>
</template>

<style scoped>
    div{background-color: rgb(221, 249, 249);border:1px solid blue;}
</style>
