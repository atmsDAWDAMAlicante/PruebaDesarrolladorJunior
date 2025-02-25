<script>
export default{
    name: "x",
    components:{

    },
    data(){
        return {
            prueba: "Hola"
        }
    },

    methods:{
        prueba(){
            return "Prueba"
        }
    }
    
}
</script>

<template>
 <p>{{prueba}}</p>
</template>

<style scoped>
p{color:black}
</style>
