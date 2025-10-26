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
    reducers: {
        addTodo: (state, action) => {},
        removeTodo: () => {}
    }
})