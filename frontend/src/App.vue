<script>
//import HelloWorld from './components/HelloWorld.vue'
import frase from './components/frase.vue';
import lista from './components/lista.vue';
import display from './components/display.vue';

export default{
  components:{
    frase,
    lista,
    display
  }
}

</script>

<template>
  <!--<div><a href="https://vite.dev" target="_blank"><img src="/vite.svg" class="logo" alt="Vite logo" /></a><a href="https://vuejs.org/" target="_blank"><img src="./assets/vue.svg" class="logo vue" alt="Vue logo" /></a></div><HelloWorld msg="Vite + Vue" />-->
<header>
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
</template>

<style scoped>
  header{
    color:black;
    margin-bottom: 20px;
  }



/*.logo {  height: 6em;  padding: 1.5em;will-change: filter;  transition: filter 300ms;}.logo:hover {filter: drop-shadow(0 0 2em #646cffaa);}.logo.vue:hover {filter: drop-shadow(0 0 2em #42b883aa);}*/
</style>
