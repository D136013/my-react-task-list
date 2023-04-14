function Task (props){
    const {id, descripcion, completada, eliminarTarea} = props
    return (
        <div>
            <input type="checkbox" id={id} checked={completada} />
            <label htmlFor={id}>{descripcion}</label>
            <button>editar</button>
            <button onClick={()=>eliminarTarea(id)}>eliminar</button>
        </div>
    )
}
export default Task
