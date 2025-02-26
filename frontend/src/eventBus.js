import { reactive } from 'vue';

const eventBus = reactive({
    // Variables de estado
    tareas: [],
    idTarea: 0,
    descripcionTarea: "",

    // Métodos a compartir
    metodoPrueba(){
        console.log("Funciona");
    },
    // Método actualizarTareas para que se ejecute cuando se cargue el componente
    // lista (que contiene la lista de tareas, por tanto tendrá que mostrarlas) y 
    // también se tendrá que ejecutar cuando se completen las acciones CRUD para 
    // mostrar en la lista los cambios efectuados.
    actualizarTareas(){
        console.log("2Actualizar tareas");
        fetch('http://localhost/PruebaDesarrolladorJunior/data/tareas.json')
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data)
            let resultado = "AAAAAAA";
            for (let elem of data){
                resultado += `<input type='radio' name='numeros' name=''/>${elem.descripcion}<br />`
            }
            return resultado;
        })
    }

});

export default eventBus;