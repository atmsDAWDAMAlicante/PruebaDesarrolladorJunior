<script>
export default{
    name: "componenteLista",
    components:{

    },
    data(){
        return {
            pruebaLista: "componenteLista"
        }
    },
    methods:{
        prueba(){
            return this.pruebaLista
        }
    }
    
}
</script>

<template>
    <div> {{ pruebaLista }}</div>

</template>

<style scoped>
    div{background-color: rgb(234, 248, 224);border:1px solid #339900;}
</style>
