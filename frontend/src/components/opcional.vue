<script>
export default{
    name: "componenteOpcional",
    components:{

    },
    data(){
        return {
            origenParte: "componenteOpcional",
            elTiempoHoy: ""
        }
    },mounted(){
        // Esta API devuelve un parte metereológico
        fetch('https://www.el-tiempo.net/api/json/v2/home')
        .then(response=>response.json())
        .then((data)=>{
            console.log(`${data.provincias[1].CODPROV}`) // prueba para acceder a una provincia en particular

            // Obtención de los datos mostrados por pantalla
            this.origenParte = `${data.origen.productor}`
            this.elTiempoHoy = `${data.today.p[0]}`
        })
    }
    
}
</script>

<template>
 <div><p>Parte metereológico facilitado por la: <span class="negrita">{{origenParte}}</span></p>
 <p>{{ elTiempoHoy }}</p>
 </div>
</template>

<style scoped>
    p{
        font-size:0.8em;
        margin-top:10px;
        }

</style>
