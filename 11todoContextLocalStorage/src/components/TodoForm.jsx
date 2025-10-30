import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'

function TodoForm() {
    // Ye individual components ki state hai
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()
        
        /* Ab yaha par hum string pass nhi kar skte like this 'addTodo(todo)' kyunki hum udhar 'App.jsx' mei object ko destructure kar rhe hai to hume yaha par bhi object ki tarah bhejna padega. */
        addTodo({todo, completed: false})
        // Cleaning the input
        setTodo("")
    }
    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    )
}

export default TodoForm
