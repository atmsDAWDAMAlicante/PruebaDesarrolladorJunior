<script>
export default{
    name: "componenteOpcional",
    components:{

    },
    data(){
        return {
            pruebaOpcional: "componenteOpcional",
            elTiempoHoy: ""
        }
    },mounted(){
        // Esta API devuelve el tiempo pero sólo del día de hoy y mañana, y referencias a provincias
        fetch('https://www.el-tiempo.net/api/json/v2/home')
        .then(response=>response.json())
        .then((data)=>{

            console.log(`${data.provincias[1].CODPROV}`)
            this.pruebaOpcional = `${data.origen.productor}`
            this.elTiempoHoy = `${data.today.p[0]}`
        })
    }
    
}
</script>

<template>
 <div><p></p>{{pruebaOpcional}}<p>{{ elTiempoHoy }}</p></div>
</template>

<style scoped>
    div{background-color: rgb(221, 249, 249);border:1px solid blue;}
    p{font-size:0.7em;margin-top:10px;}
</style>
