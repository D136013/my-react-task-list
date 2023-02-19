import Header from "./components/Header";
import TaskList from "./components/TaskList";

const TAREAS =[
  {id:1, tarea:"lavar los platos"},
  {id:2, tarea:"llevar la niña al colegio"},
  {id:3, tarea:"cocinar"},
]

function App() {

  return (
    <div>
      <Header />
      <TaskList lista = {TAREAS} />
    </div>
  )
}

export default App
