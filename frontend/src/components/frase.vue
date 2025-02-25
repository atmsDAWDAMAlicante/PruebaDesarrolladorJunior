<script>
export default{
    name: "componenteFrase",
    components:{

    },
    data(){
        return {
            pruebaFrase: "componenteFrase"
        }
    },

    methods:{
        prueba(){
            return this.pruebaFrase
        }
    }
    
}
</script>

<template>
 <div>{{pruebaFrase}}</div>
 <div class="container">

 </div>
</template>

<style scoped>
    div{background-color: rgb(249, 233, 215);border:1px solid orange;}
</style>
