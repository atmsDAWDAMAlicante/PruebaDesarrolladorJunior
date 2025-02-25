<script>
export default{
    name: "componenteOpcional",
    components:{

    },
    data(){
        return {
            pruebaOpcional: "componenteOpcional"
        }
    },
    methods:{
        prueba(){
            return this.pruebaOpcional
        }
    }
    
}
</script>

<template>
 <div>{{pruebaOpcional}}</div>
</template>

<style scoped>
    div{background-color: rgb(221, 249, 249);border:1px solid blue;}
</style>
