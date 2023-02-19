function Task (props){
    const {id, nombre} = props
    return (
        <div>
            <label htmlFor={id}>{nombre}</label>
            <input type="checkbox" id={id} />
        </div>
    )
}
export default Task
