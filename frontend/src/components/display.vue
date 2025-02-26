<script>
import botones from './botones.vue';
import edicion from './edicion.vue';

export default{
    name: "componenteDisplay",
    components:{
      botones,
      edicion,
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
  </div>
</template>

<style>
  #bordeExterior{
    background-color: rgb(241, 212, 241);
    border:4px solid purple;
    }
</style>
