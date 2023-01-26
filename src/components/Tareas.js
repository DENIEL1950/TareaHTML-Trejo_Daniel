//Componente que muestra las actividades (tareas) diarias de una persona
import {listadoTareas} from './TareaEnCasa'

export default Tareas
function Tareas (){
    return (
        <div>
            <ul>
                {
                    listadoTareas.map((item,index)=>{return <li key={index}>{item.titulo}</li>})
                }
            </ul>
        </div>
    )
}
console.log("Listado de Tareas")
console.log(listadoTareas)