<script>
//import HelloWorld from './components/HelloWorld.vue'
import frase from './components/frase.vue'
import display from './components/display.vue'
export default{
  components:{
    frase
  }
}

</script>

<template>
  <!--<div><a href="https://vite.dev" target="_blank"><img src="/vite.svg" class="logo" alt="Vite logo" /></a><a href="https://vuejs.org/" target="_blank"><img src="./assets/vue.svg" class="logo vue" alt="Vue logo" /></a></div><HelloWorld msg="Vite + Vue" />-->
<header>
  <frase></frase>
</header> 
<p>Hola</p>
</template>

<style scoped>
  header{
    color:black;
  }



/*.logo {  height: 6em;  padding: 1.5em;will-change: filter;  transition: filter 300ms;}.logo:hover {filter: drop-shadow(0 0 2em #646cffaa);}.logo.vue:hover {filter: drop-shadow(0 0 2em #42b883aa);}*/
</style>
