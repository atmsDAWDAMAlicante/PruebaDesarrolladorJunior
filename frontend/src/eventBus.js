import { reactive } from 'vue';

const eventBus = reactive({
  tareas: [], // El estado que compartimos
});

export default eventBus;