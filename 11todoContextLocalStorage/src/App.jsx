
import { useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts'

function App() {
  /* To kyunki todos hai to hume kahi to rakhna padega to hum state mei rakhenge. */
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    /* 
      1.)-> Now here if we write like this 'setTodos(todo)' then it will override all the previous values with this todo, that's wy we need access of previous states also amd state 'todos' does not have accesss to previous state.
      That's why in setState we have a callback function which have access to previous value and its name can be anything here 'prev'.
      2.)-> Now since 'prev' is an array so we'll destructure all its values and its our choice where to add new todo, it can be either behind or in front of previous todos.
      3.)-> Also we cannot write like this '[todo, ...prev]', we have to create a todo object. Kyunki hum string to pass kar nhi rhe usme hume values change karke deni hai that's why.
      4.)-> And we need to generate unique id also that's why we are using 'Date.now()', and for other values (todo and isCompleted) we'll spread out todo '...todo'.
    */
    setTodos( (prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id, todo) => {
    /* 
      Now to update a todo our approach should be that first we take previous value which will come as array of objects so we'll loop it to visit each todo. Then we'll match the each todo id with our given todo id that we wannna update.
      If the id is equal then we'll push our todo otherwise prevTodo.
    */
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
    
  }

  const removeTodo = (id) => {
    setTodos((prev)=> prev.filter((todo) => todo.id !== id))
  }

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, removeTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>    
    </TodoProvider>
  )
}

export default App
