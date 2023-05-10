import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { useState, useEffect } from "react";

const tareasPendientes = [
  {id:1, descripcion:"lavar los platos", completada:false},
  {id:2, descripcion:"llevar la niña al colegio", completada:false},
  {id:3, descripcion:"cocinar", completada:false},
]

function App() {

  const [listaTareas, setListaTareas] = useState(
    JSON.parse(localStorage.getItem("listaTareas")) || tareasPendientes
  );
  const [tareaNueva, setNuevaTarea] = useState("");

  useEffect(() => {
    localStorage.setItem("listaTareas", JSON.stringify(listaTareas));
  });

  const agregar = evento => {
    evento.preventDefault();
    if (tareaNueva.trim() !== "") {
      const nuevaTareaConId = {
        id: listaTareas.length + 1,
        descripcion: tareaNueva ,
        completado: false,
      };
      setListaTareas([...listaTareas, nuevaTareaConId]);
      setNuevaTarea("");
    }
  }

  const handlerChange = evento => {
    setNuevaTarea(evento.target.value);
  };

  const eliminarTarea = (id,) => {
    const nuevasTareas = listaTareas.filter(tarea => tarea.id !== id);
    setListaTareas(nuevasTareas);
    console.log("aqui se elimina")
    console.log(nuevasTareas)
    };

    const editarTarea = (id, nuevaDescripcion) => {
      const nuevasTareas = listaTareas.map(tarea => {
        if (tarea.id ===id) {
          tarea.descripcion = nuevaDescripcion;
        }
        return tarea;
      });
      setListaTareas(nuevasTareas);
    };

  const onComplete =  (id, bolean) => {
    console.log (bolean)
  }

    return (
      <div className="app">
        <Header/>
        <form className="f1">
          <input className="primerimput"
          type="text"
          maxLength="25"
          value={tareaNueva}
          onChange={handlerChange}
          placeholder="Ingrese Tarea"
          />
          <button className="primerboton" type="submit" onClick={agregar}>
            Agregar Tarea
          </button>
        </form>
        <TaskList
          pendientes={listaTareas}
          onEliminar={eliminarTarea}
          onEditar={editarTarea}
          onCompletar={onComplete}
        />
      </div>
    );
  }

  export default App;