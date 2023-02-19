import Task from "./Task"

function TaskList(props){
    const {lista} = props
    return(
        <div>
            {
                lista.map((task)=> (
                    <Task id={task.id} nombre={task.tarea} />
                ))
            }
        </div>
    )
}
export default TaskList