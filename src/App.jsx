
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {

  return (
    <div className="App">
      <div className='todoBox'>
        <span className='heading'>
          <h3 className='text'>To-Do List</h3>
        </span>
        <TodoForm />
        <TodoList /> 
      </div>
    </div>
  )
}

export default App
