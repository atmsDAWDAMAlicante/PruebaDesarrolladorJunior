<script>
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
        prueba(){
            return this.pruebaBotones
        }
    }
    
}
</script>

<template>
    <div>
        <button class="btn btn-primary"> {{ pruebaBotones }}</button>
    </div>
</template>

<style scoped>
    div{background-color: rgb(221, 249, 249);border:1px solid blue;}
</style>
