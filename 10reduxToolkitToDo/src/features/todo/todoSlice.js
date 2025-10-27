import {createSlice, nanoid} from 'reduxjs/toolkit'

// Creating an initial state
const initialState = {
    todos: {id: 1, text: 'Hello World'}
}

// Creating a Slice
export const todoSlice = createSlice({
    name: 'todo',
    /* We provide initial state. Ab jo humne pehle initial state likhi thi vo hum yha par bhi de skte hai ya seedhe hi variable ka reference de skte hai. */
    initialState,
    // Writing reducers
    reducer: {
        addTodo: (state, action) => {
            // Creating todo
            const todo= {
                id: nanoid(),
                text: action.payload
            }
            
            // Changing the state
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

// Exporting individual reducer methods
export  const { addTodo, removeTodo } = todoSlice.actions

// Exporting reducers
export default todoSlice.reducer