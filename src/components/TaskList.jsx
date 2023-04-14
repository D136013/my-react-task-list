import Task from "./Task"

function TaskList(props){
    const {lista, eliminarTarea} = props
    return(
        <div>
            {
                lista.map((task)=> (
                    <Task 
                        id={task.id}
                        descripcion={task.descripcion} 
                        completada={task.completada} 
                        eliminarTarea={eliminarTarea} 
                    />
                ))
            }
        </div>
    )
}
export default TaskList