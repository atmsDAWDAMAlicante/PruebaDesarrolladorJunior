<script>
import botones from './botones.vue';
import edicion from './edicion.vue';
import opcional from './opcional.vue';
export default{
    name: "componenteDisplay",
    components:{
      botones,
      edicion,
      opcional
    },
    data(){
        return {
            pruebaDisplay: "componenteDisplay"
        }
    },

    methods:{
        prueba(){
            return this.pruebaDisplay
        }
    }
}
</script>

<template>

  <div id="bordeExterior">
    <div>
        <botones></botones>
    </div>
    <div>
      <edicion></edicion>
    </div>
    <div>
      <opcional></opcional>
    </div>
  </div>
</template>

<style>
  #bordeExterior{background-color: rgb(241, 212, 241);border:4px solid purple;}
</style>
