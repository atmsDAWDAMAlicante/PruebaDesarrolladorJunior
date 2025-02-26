<script>
import frase from './components/frase.vue';
import lista from './components/lista.vue';
import display from './components/display.vue';
import opcional from './components/opcional.vue';

export default{
  components:{
    frase,
    lista,
    display,
    opcional
  }
}

</script>

<template>
  
  <header><!-- Encabezado con frase aleatoria: problemas con la API -->
    <frase></frase>
  </header>

<div class="container">
  <div class="row">
    <div class="col col-8">
        <lista></lista>
    </div>
    <div class="col col-4">
      <display></display>
    </div>
  </div>
</div>


  <footer><!-- Pie de página: parte metereológico -->
      <opcional></opcional>
  </footer>

</template>

<style scoped>
  header{
    color:black;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 20px;
  }
  footer{
    background-color: rgb(249, 221, 240);
    border:1px solid brown;
    width: 80%;
    margin: 0 auto;
    margin-top:30px;
    }
</style>
