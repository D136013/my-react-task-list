import Header from "./components/Header";
import TaskList from "./components/TaskList";
import { useState } from "react";

const TAREAS = [
  {id:1, descripcion:"lavar los platos", completada:false},
  {id:2, descripcion:"llevar la niña al colegio", completada:false},
  {id:3, descripcion:"cocinar", completada:false},
]

function App() {

  const [listaTareas, setListaTareas] = useState(TAREAS)
  const [tareaNueva, setTareaNueva] = useState("")

  const handleChangeTareaNueva = (evento) => {
    setTareaNueva(evento.target.value)
  }

  const handleClickAgregar = (evento) => {
    evento.preventDefault()
    setListaTareas([...listaTareas, {id: new Date().getTime(), descripcion: tareaNueva, completada: false}])
  }

  const eliminarTarea = (id)=> {
    let tareasNoBorradas = listaTareas.filter((tarea) => tarea.id !== id)
    setListaTareas(tareasNoBorradas)
  }

  return (
    <div>
      <Header />

      <form action="">
          <input onChange={handleChangeTareaNueva} type="text" placeholder="agregue una tarea" />
          <button onClick={handleClickAgregar}>+</button>
      </form>

      <TaskList lista={listaTareas} eliminarTarea={eliminarTarea} />
    </div>
  )
}

export default App
