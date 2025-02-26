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
       obtenerFrase(){ 
        }
    },mounted(){
        // Método para obtener una frase de una API https://api.quotable.io/random
        // No permite la conexión directa sólo apuntando a la URL
        fetch("https://api.allorigins.win/get?url=" + encodeURIComponent("https://api.quotable.io/random"))
            .then((response)=>{
                return response.json()
            }).then((data)=>{
                console.log(`Esto es lo que se obtiene: ${data}`);
                // Aunque la URL de la API sí muestra un JSON con frases/autores aleatorios, a la
                // petición fetch devuelve un error
                this.pruebaFrase = `${data.content}" - ${data.author}---error: ${data.error} / stack ${data.stack}`;
            })
    }
    
}
</script>

<template>
    <div @DOMContentLoaded="obtenerFrase" class="container">
        Frase del día: {{pruebaFrase}}
    </div>
    <h1>Bienvenido a To-Do</h1>
</template>

<style scoped>
    div{
    background-color: rgb(249, 233, 215);
    border:1px solid orange;
    }
    h1{
        text-align: center;
        margin-top: 20px;
    }
</style>
